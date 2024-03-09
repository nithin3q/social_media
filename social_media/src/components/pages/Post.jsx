import React, { useState } from "react";
import { Card, Image, Button } from "react-bootstrap";
import "../styles/Post.css";
import { BsThreeDots, BsEyeFill, BsShare } from "react-icons/bs";

function Post({ user, postImage, genre, genreIcon, title, answer, logo }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <Card className="post">
      {postImage && <Card.Img variant="top" src={postImage} />}
      <div className="d-flex align-items-center">
        &nbsp; &nbsp; {genreIcon} &nbsp; &nbsp;
        <h6 className="card-text">{genre}</h6>
      </div>
      <Card.Body className="d-flex justify-content-between">
        <div>
          <h6 className="nithins">{title}</h6>
          <p className="nithins">{answer}</p>
        </div>
        <div style={{ position: "relative" }}>
        <BsThreeDots
        style={{
          fontSize: "35px",
          cursor: "pointer",
          backgroundColor: showOptions ? "gray" : "transparent",
          borderRadius: "5px", 
          padding: "5px" 
        }}
        onClick={toggleOptions}
      />
          {showOptions && (
            <div
              className="options-box d-flex flex-column align-items-center" 
             
            >
              <ul>
              <li>Edit</li>
              <li>Report</li>
              <li>Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </Card.Body>

      <div className="d-flex align-items-center justify-content-between card-body">
        <div className="post__headerAuthor">
          <Image src={logo} roundedCircle />
          &nbsp;&nbsp;{user}
        </div>
        <div className="d-flex align-items-center">
          <span className="">
            1000 views <BsEyeFill /> &nbsp; &nbsp;{" "}
          </span>
          <Button variant="outline-secondary" className="">
            <BsShare />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Post;
