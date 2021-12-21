import React, { useState, useEffect } from "react";
import Cardstyle from "../style/components/Card";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
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
        <div className="detail center-sbtw">
          <ul className="detail__inner center-sbtw">
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
            <li className="profileName">
              <h5>{post.user.username}</h5>
            </li>
          </ul>
          <div className="author__ft"></div>
        </div>
      </div>
      <div className="thot">
        <Markup content={post.body} />
      </div>
      <div className="topic">
        {post.category.map((topic) => {
          return <button>{"#" + topic.name}</button>;
        })}
      </div>
      <div className="post__features center-sbtw">
        <ul className="center-sbtw">
          <li>
            <button>
              <span>0</span> likes
            </button>
          </li>
          <li>
            <button>
              <span>0</span> rethot
            </button>
          </li>
        </ul>
        <div className="time">
          <p>
            <ReactTimeAgo
              date={new Date(post.dateposted).getTime()}
              locale="en-US"
            />
          </p>
        </div>
      </div>
    </Cardstyle>
  );
};

export default Card;
