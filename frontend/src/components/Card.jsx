import React, { useState, useEffect } from "react";
import Cardstyle from "../style/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import Spinner from "./Spinner";
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineRetweet,
  AiFillHeart,
} from "react-icons/ai";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import {
  likepost,
  deleteUserThought,
  getUserlikedThought,
} from "../store/actions/postAction";
import Topic from "./Topic";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
const Card = ({ post, profile }) => {
  const dispatch = useDispatch();
  const [dp, setDp] = useState("");
  const [postDate, setPostDate] = useState("");
  const [evt, setEvt] = useState("");
  const [liked, setLiked] = useState(false);

  const userData = useSelector((state) => state.userLogin);
  const { userInfo } = userData;

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
  }, [post, userInfo]);

  //Delete Thot Selector
  const deletedThought = useSelector((state) => state.deletedThought);
  const { delete_thot_loading, error, delThought } = deletedThought;

  useEffect(() => {
    if (delThought) {
      evt.target.parentElement.parentElement.parentElement.remove();
    }
  }, [dispatch, delThought]);

  //Get Liked Thought
  const likedThought = useSelector((state) => state.likedThought);
  const { check_liked_loading, likedThoughtPayload, check_liked_error } =
    likedThought;

  useEffect(() => {
    dispatch(getUserlikedThought(post._id));
  }, []);

  useEffect(() => {
    if (likedThoughtPayload) {
      setLiked(likedThoughtPayload.data.liked);
    }
  }, [dispatch, likedThoughtPayload]);

  //Like Post Function
  function likePost() {
    dispatch(likepost(post._id));
  }

  //delete thought
  function deleteThot(e) {
    dispatch(deleteUserThought(post._id));
    setEvt(e);
  }
  return (
    <Cardstyle>
      <div onClick={console.log(liked)} className="userDetail">
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
      <div className="post--meta-fill center-sbtw">
        <ul className="center-sbtw">
          <li className="like_button">
            {liked === true ? (
              <button onClick={likePost}>
                <AiFillHeart />
              </button>
            ) : (
              <button onClick={likePost}>
                <AiOutlineHeart />
              </button>
            )}
          </li>
          <li className="rethot_button">
            <button>
              <AiOutlineRetweet />
            </button>
          </li>
        </ul>
        {profile ? (
          <ul className="center-sbtw profileFt">
            <button className="delete center" onClick={deleteThot}>
              {delete_thot_loading ? <Spinner /> : " Delete"}
            </button>
            <Link to={`/write/${post._id}/edit`}>
              <button className="edit center">Edit</button>
            </Link>
          </ul>
        ) : (
          ""
        )}
      </div>
    </Cardstyle>
  );
};

export default Card;
