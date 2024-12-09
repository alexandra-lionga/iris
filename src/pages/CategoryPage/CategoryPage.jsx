import "./CategoryPage.scss";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";


const API_BASE_URL = import.meta.env.VITE_API_URL;
const CategoryPage = ({ contentList }) => {
  const { categoryId } = useParams();

  // Filter content based on the current category
  const categoryContent = contentList.filter(
    (content) => content.category === categoryId
  );

  return (
    <>
      <Header />
      <h2 className="category__heading">{categoryId}</h2>
      <div className="content-list category">
        {categoryContent.length > 0 ? (
          categoryContent.map((post) => {
            // Define the source URL for each post
            const source_url = post.source.startsWith("/r/")
              ? `https://www.reddit.com${post.source}`
              : post.source === ""
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
                    "Unknown"
                  )}
                </p>

                <div className="content-media">
                  {post.media.endsWith("fallback") || post.media.endsWith(".mp4") ? (
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
          })
        ) : (
          <p>No content found for this category.</p>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
