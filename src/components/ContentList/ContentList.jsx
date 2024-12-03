import "./ContentList.scss";
import { Link } from "react-router-dom";
import heartFilled from "../../assets/images/icons/heart-filled.png";
import heart from "../../assets/images/icons/heart.png";
import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const ContentList = ({ feedName, searchKey }) => {

  const [contentList, setContentList] = useState(null);
  const [filteredContentList, setFilteredContentList] = useState(null);
  const [isLikedAdded, setIsLikeAdded] = useState(true);

  const getContentList = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/content/?s=${searchKey}`);
      setFilteredContentList(data);
    } catch (error) {
      alert("Error retrieving content list. Error: " + error);
    }
  };

  useEffect(() => {
    getContentList();
  }, [searchKey]);


  function likesHandler() {
    setIsLikeAdded((previous) => !previous);
  }

  return (
    <>
      <div className="content">
        <h2 className="content__heading"> {feedName ? feedName : "News Feed"}</h2>
        {filteredContentList?.length == 0 ? (<p className="result-message">No results found.</p>) :
        (filteredContentList?.map((post) => {
          let source_url = post.source.startsWith("/r/")
            ? `https://www.reddit.com/${post.source}`
            : post.source == ""
              ? "http://localhost:5173/home"
              : post.source;

          return (
            <article key={post.id} className="content__article">
              <Link
                to={`/category/${post.category}`}
                className="content__category"
              >
                {post.category}
              </Link>

              <Link to={`/story/${post.id}`} className="content__headline">
                <h2>{post.title}</h2>
              </Link>
              <p className="content__author">
                By:{" "}
                {source_url ? (
                  <a href={source_url} className="content__external-link">
                    {post.source_name}
                  </a>
                ) : (
                  ""
                )}
              </p>
              <div className="content-media">
                {post.media.endsWith("fallback" || ".mp4") ? (
                  <video controls className="content__video">
                    <source src={post.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={
                      post.media.startsWith("images")
                        ? `${API_BASE_URL}/${post.media}`
                        : post.media.startsWith("userFiles")
                          ? `${API_BASE_URL}/${post.media}`
                          : post.media
                    }
                    alt="article image"
                    className="content__img"
                  />
                )}
                <div className="content-interactions">
                  <img
                    src={`${isLikedAdded ? heartFilled : heart}`}
                    onClick={likesHandler}
                    className="content-likeIcon"
                  />
                </div>
              </div>

              {post.description === "" ? (
                <p className="content__description">
                  Checkout the story behind this post:{" "}
                  <a href={source_url} className="content__description-link">
                    here.
                  </a>
                </p>
              ) : (
                <p className="content__description">{post.description}</p>
              )}
            </article>
          );
        }))}
      </div>
    </>
    
  );
};

export default ContentList;
