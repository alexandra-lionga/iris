import ContentList from "../../components/ContentList/ContentList";
import "./StoryDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const StoryDetailsPage = () => {
  const { storyId } = useParams();
  const [story, setStory] = useState(null);

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

  if(!story) return <div className='loading'></div>

  return (
    <main>
      <ContentList contentList={[story]}/>
      <section className="comments">
        <h2 className="comments__heading">Join the Conversation</h2>
        <form className="comments__form">
          <div className="comments__avatar">
            <img
              className="comments__avatar-img"
              src="/assets/images/Mohan-muruge.jpg"
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
                <p className="posted-comment__username">Victor Pinto</p>
                <p className="posted-comment__timestamp">2/17/2021</p>
              </div>
              <div className="posted-comment__body">
                <p>
                  This is art. This is inexplicable magic expressed in the
                  purest way, everything that makes up this majestic work
                  deserves reverence. Let us appreciate this for what it is and
                  what it contains.
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
                <p className="posted-comment__username">Christina Cabrera</p>
                <p className="posted-comment__timestamp">1/9/2021</p>
              </div>
              <div className="posted-comment__body">
                <p>
                  I feel blessed to have seen them in person. What a show! They
                  were just perfection. If there was one day of my life I could
                  relive, this would be it. What an incredible day.
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
                <p className="posted-comment__username">Isaac Tadesse</p>
                <p className="posted-comment__timestamp">12/20/2020</p>
              </div>
              <div className="posted-comment__body">
                <p>
                  I can't stop listening. Every time I hear one of their songs -
                  the vocals - it gives me goosebumps. Shivers straight down my
                  spine. What a beautiful expression of creativity. Can't get
                  enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default StoryDetailsPage;
