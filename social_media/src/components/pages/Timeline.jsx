import React from "react";
import Post from "./Post";
import Suggestions from "./Suggestions";
import '../styles/Timeline.css';
function Timeline({ posts , genreIcons }) {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
        <div className="timeline__post-wrapper">
            {posts.map((post, index) => (
              <Post
                key={index}
                user={post.user}
                postImage={post.postImage}
                genre={post.genre}
                title={post.title}
                answer={post.answer}
                logo={post.logo}
                genreIcon={genreIcons[post.genre]} // Pass the icon based on genre
              />
            ))}
          </div>
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
