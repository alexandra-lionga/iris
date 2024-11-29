import "./ContentList.scss";
import { Link } from "react-router-dom";


const API_BASE_URL = import.meta.env.VITE_API_URL;
const ContentList = ({ contentList }) => {
  return (
    <div className="content">
      {contentList?.map((post) => {
        let source_url = post.source.startsWith("/r/")
          ? `https://www.reddit.com/${post.source}`
          : post.source;
        return (
          <article key={post.id} className="content__article">
            <Link
              to={`/category/${post.category}`}
              className="content__category"
            >
              {post.category}
            </Link>
            <Link to={`/post/${post.id}`} className="content__headline">
              <h2>{post.title}</h2>
            </Link>
            <p className="content__author">
              Source:{" "}
              <a href={source_url} className="content__external-link">
                {post.source_name}
              </a>
            </p>
            {post.media.endsWith("fallback") ? (
              <video controls className="content__video">
                <source src={post.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={
                  post.media.startsWith("images")
                    ? `${API_BASE_URL}/${post.media}`
                    : post.media
                }
                alt="article image"
                className="content__img"
              />
            )}
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
      })}
    </div>
  );
};

export default ContentList;
