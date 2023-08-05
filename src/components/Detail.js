import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Parent from "./ParentBody";
import NavbarDetails from "./NavbarDetails";

const Detail = () => {

  const { id } = useParams();
  const { posts } = useSelector((state) => state);
  const post = posts.find((p) => p.id === parseInt(id, 10));

  const [selectedContent, setSelectedContent] = useState(null);

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleButtonClick = (contentType) => {
    setSelectedContent(contentType === selectedContent ? null : contentType);
  };

  return (
    <div className="body">
      <NavbarDetails/>
      <h1>Post Number {post.id}</h1>
      <div className="detailsBody">
        <img
          className="imageContainerDetails"
          src={`https://picsum.photos/200?random=${post.id}`}
          alt={`${post.title}`}
        />
        <div className="buttonBody">
          <div className="button-container">
            <button
              className="btn"
              onClick={() => handleButtonClick("details")}
            >
              Details
            </button>
            <button
              className="btn"
              onClick={() => handleButtonClick("userInfo")}
            >
              User Info
            </button>
          </div>
          {selectedContent === "details" && (
            <div className="print">
              <p>{post.body}</p>
            </div>
          )}
          {selectedContent === "userInfo" && (
            <div className="print">
              <p>
                <b>Post Was Posted By User ID:</b> {post.userId}
              </p>
            </div>
          )}
        </div>
      </div>
      <h1>More Posts</h1>
      <Parent />
    </div>
  );
};

export default Detail;
