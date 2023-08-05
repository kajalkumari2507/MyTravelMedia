import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/actions";
import next from "../image/next.svg";

const Parent = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="parent-container">
      {posts.map((post) => (
        <div className="parent">
          <div key={post.id} className="content">
            <img
              className="imageContainer"
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={`${post.title}`}
            />
            <div>
              <h2 className="heading">{post.title.slice(0, 40)}...</h2>
              <div className="cont">
                <p className="description">
                  {post.body.slice(0, 100)},
                  <Link className="read" to={`/item/${post.id}`}>
                    {" "}
                    Read More...
                  </Link>
                </p>
                <img className="nextButton" src={next} alt="nextButton"></img>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parent;
