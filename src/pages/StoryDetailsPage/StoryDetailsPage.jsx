import "./StoryDetailsPage.scss";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import trashIcon from "../../assets/images/icons/trash-bin.png";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../../components/Header/Header"
import edit from "../../assets/images/icons/pencil.svg"
const API_BASE_URL = import.meta.env.VITE_API_URL;

const StoryDetailsPage = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);
  const [isLikedAdded, setIsLikeAdded] = useState(true);
  const [editingObj, setEditingObj] = useState(null);

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
      toast.success("Story sucessfully deleted. Returning home.." ,{
        position: "top-center",
        hideProgressBar: true,
      });
      setTimeout(() => navigate("/home"), 2000);
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

  function handleEdit(id){
   return <Link to={`story/${id}/edit`}/>  }


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
          <article key={story.id} className="content__article story__article">
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
                  className="story__img"
                />
              )}
              <div className="content-interactions story-interactions">
                <img
                  src={trashIcon}
                  alt="trash icon"
                  onClick={() => handleDelete(story.id)}
                  className={
                    story.source_name == "Alexandra Lionga"
                      ? "content-deleteIcon story-deleteIcon"
                      : "content-deleteIcon--hidden"
                  }
                />
                <Link to={`/story/${story.id}/edit`} state={{story}}>
             
                <img
                  src={edit}
                  alt="edit icon"
                  className={
                    story.source_name == "Alexandra Lionga"
                      ? "content-deleteIcon story-deleteIcon"
                      : "content-deleteIcon--hidden"
                  }
                />
                </Link>
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

      </main>
      <ToastContainer transition={Slide}
        position="top-right"
        autoClose={2000}
        hideProgressBar={true} // Hide the progress bar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
   
  );
};
export default StoryDetailsPage;
