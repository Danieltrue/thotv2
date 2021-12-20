import React, { useState, useEffect } from "react";
import Cardstyle from "../style/components/Card";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const [dp, setDp] = useState("");

  useEffect(() => {
    const user = post.user.username.split(" ");
    const one = user[0].split("")[0];
    const two = user[1].split("")[0];
    if (post) {
      setDp(one + two);
    }
  }, [post]);
  console.log(post);
  return (
    <Cardstyle>
      <div className="userDetail">
        <div className="detail">
          <ul>
            <li>
              <div className="profileimage center">
                {post.user.profileimage !== "" ? (
                  <Link to="/">
                    <img src={post.user.profileimage} />
                  </Link>
                ) : (
                  <Link to="/">
                    <li>{dp}</li>
                  </Link>
                )}
              </div>
            </li>
            <li>
              <h5>{post.user.username}</h5>
            </li>
          </ul>
          <div className="author__ft"></div>
        </div>
      </div>
      <div className="thot">{post.body}</div>
      <div className="topic"></div>
      <div className="post__features">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Cardstyle>
  );
};

export default Card;
