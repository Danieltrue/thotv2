import React, { useState, useEffect } from "react";
import Cardstyle from "../style/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineRetweet,
} from "react-icons/ai";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { likepost } from "../store/actions/postAction";
import Topic from "./Topic";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
const Card = ({ post }) => {
  const dispatch = useDispatch();
  const [dp, setDp] = useState("");
  const [postDate, setPostDate] = useState("");

  useEffect(() => {
    const one = post.user.firstname.split("")[0];
    const two = post.user.lastname.split("")[0];
    if (post) {
      setDp(one + two);
      const d = new Date(post.dateposted).getUTCDate();
      const m = new Date(post.dateposted).getUTCMonth() + 1;
      const y = new Date(post.dateposted).getUTCFullYear();
      setPostDate(`${d}/${m}/${y}`);
    }
  }, [post]);

  //Like Post Function
  function likePost() {
    dispatch(likepost(post._id));
  }
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
              <h5>{post.user.firstname + " " + post.user.lastname}</h5>
              <p>{post.user.username.replace("@thot", "@")}</p>
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
          return <Topic topicname={topic.name} />;
        })}
      </div>
      <div className="post__features center-sbtw">
        <ul className="center-sbtw">
          <li>
            <button>
              <span>{post.wholiked.length}</span> Likes
            </button>
          </li>
          <li>
            <button>
              <span>0</span> Rethot
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
          .<p>{postDate}</p>
        </div>
      </div>
      <div className="post--meta-fill">
        <ul className="center-sbtw">
          <li className="like_button">
            <button onClick={likePost}>
              <AiOutlineHeart />
            </button>
          </li>
          <li className="rethot_button">
            <button>
              <AiOutlineRetweet />
            </button>
          </li>
        </ul>
      </div>
    </Cardstyle>
  );
};

export default Card;
