import "./StoryDetailsPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import trashIcon from "../../assets/images/icons/trash-bin.png";
import heartFilled from "../../assets/images/icons/heart-filled.png";
import heart from "../../assets/images/icons/heart.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const StoryDetailsPage = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const [isLikedAdded, setIsLikeAdded] = useState(true);

  const navigate = useNavigate();

  const getStory = async () => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/api/content/story/${storyId}`
      );
      setStory(data);
    } catch (error) {
      alert("Error retrieving story. Error: " + error);
    }
  };
  useEffect(() => {
    getStory();
  }, [storyId]);


  const deleteStory = async (id) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/api/content/story/${id}`
      );
      alert("Story sucessfully deleded. Returning home")
      navigate(-1);
    } catch (error) {
      alert("Error deleting story. Error: " + error);
    }
  };


  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this story?")) {
      deleteStory(id);
    }

  }

  function likesHandler() {
    setIsLikeAdded((previous) => !previous);
  }


  let source_url = '';
  if (story) {
    source_url = story.source.startsWith("/r/")
      ? `https://www.reddit.com/${story.source}`
      : story.source == ""
        ? "http://localhost:5173/home"
        : story.source;

  }

  if (!story) return <div className="loading"></div>;

  return (
    <>
    <Header/>
    <main>
      <div className="content">
        <article key={story.id} className="content__article--modified">
          <Link to={`/category/${story.category}`} className="content__category">
            {story.category}
          </Link>

          <Link to={`/story/${story.id}`} className="content__headline">
            <h2>{story.title}</h2>
          </Link>
          <p className="content__author">
            By:{" "}
            {source_url ? (
              <a href={source_url} className="content__external-link">
                {story.source_name}
              </a>
            ) : (
              ""
            )}
          </p>
          <div className="content-media">
            {story.media.endsWith("fallback" || ".mp4") ? (
              <video controls className="content__video">
                <source src={story.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={
                  story.media.startsWith("images")
                    ? `${API_BASE_URL}/${story.media}`
                    : story.media.startsWith("userFiles")
                      ? `${API_BASE_URL}/${story.media}`
                      : story.media
                }
                alt="article image"
                className="content__img--modified"
              />
            )}
            <div className="content-interactions">
              <img
                src={`${isLikedAdded ? heartFilled : heart}`}
                onClick={likesHandler}
                className="content-likeIcon"
              />
              <img
                src={trashIcon}
                alt="trash icon"
                onClick={() => handleDelete(story.id)}
                className={
                  story.source_name == "Alexandra Lionga"
                    ? "content-deleteIcon"
                    : "content-deleteIcon--hidden"
                }
              />
            </div>
          </div>

          {story.description === "" ? (
            <p className="content__description">
              Checkout the story behind this story:{" "}
              <a href={source_url} className="content__description-link">
                here.
              </a>
            </p>
          ) : (
            <p className="content__description">{story.description}</p>
          )}
        </article>
      </div>

      <section className="comments">
        <h2 className="comments__heading">Show Your Love</h2>
        <form className="comments__form">
          <div className="comments__avatar">
            <img
              className="comments__avatar-img"
              src={heart}
            />
          </div>
          <div className="comments__entry">
            <div className="comments__entry-header">
              <label for="name">NAME</label>
              <input
                type="text"
                id="name"
                name="username"
                placeholder="Enter your name"
              />
            </div>
            <div className="comments__entry-bottom">
              <div className="comments__entry-body">
                <label for="comment">COMMENT</label>
                <textarea
                  type="text"
                  id="comment"
                  name="usercomment"
                  placeholder="Add a new comment"
                  rows="5"
                  cols="33"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="comments__btn">
              COMMENT
            </button>
          </div>
        </form>

        <div className="posted-comments">
          <div className="posted-comment">
            <div className="posted-comment__avatar">
              <div className="posted-comment__img"></div>
            </div>
            <div className="posted-comment__item">
              <div className="posted-comment__header">
                <p className="posted-comment__username">Bubbles</p>
                <p className="posted-comment__timestamp">2/17/2021</p>
              </div>
              <div className="posted-comment__body">
                <p>
                  What a fantastic update! It's refreshing to hear good news; it gives so much hope for the future!
                </p>
              </div>
            </div>
          </div>
          <div className="posted-comment">
            <div className="posted-comment__avatar">
              <div className="posted-comment__img"></div>
            </div>
            <div className="posted-comment__item">
              <div className="posted-comment__header">
                <p className="posted-comment__username">Buttercup</p>
                <p className="posted-comment__timestamp">1/9/2021</p>
              </div>
              <div className="posted-comment__body">
                <p>
                  This is such wonderful news! It's amazing to see positive changes like this happening—truly inspiring!
                </p>
              </div>
            </div>
          </div>
          <div className="posted-comment">
            <div className="posted-comment__avatar">
              <div className="posted-comment__img"></div>
            </div>
            <div className="posted-comment__item">
              <div className="posted-comment__header">
                <p className="posted-comment__username">Blossom</p>
                <p className="posted-comment__timestamp">12/20/2020</p>
              </div>
              <div className="posted-comment__body">
                <p>
                  "This just made my day! So glad to see something uplifting and encouraging. Let's celebrate this moment!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};
export default StoryDetailsPage;
