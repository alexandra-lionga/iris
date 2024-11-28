import ContentCard from "../ContentCard/ContentCard";
import "./ContentList.scss";
import { useEffect, useState } from "react";
import highlights from "../../data/highlights";

const ContentList = ({ contentList }) => {
  return (
    <div className="content-list">
      {highlights.map((post) => {
        return (
          <article key={post.id} className="content__article">
            <p>{post.category}</p>
            <h2>{post.title}</h2>
            <p>From {post.source_name}</p>
            {post.media.endsWith("fallback") ? (
              <video width="320" height="240" controls className="article__video">
                <source src={post.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={post.media} alt="article image" className="article__img"/>
            )}
            <p>{post.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ContentList;
