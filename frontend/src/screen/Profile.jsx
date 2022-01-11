import React, { useEffect, useState } from "react";
import Profilestyle from "../style/components/Profile";
import Container from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams, NavLink } from "react-router-dom";
import Thot from "../components/Thot";
import Spinner from "../components/Spinner";
import { getUserThought } from "../store/actions/postAction";

const Profile = () => {
  const [dp, setDp] = useState("");
  const [thot, setThot] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const params = useParams();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    const one = userInfo.data.firstname.split("")[0];
    const two = userInfo.data.lastname.split("")[0];
    if (userInfo.data) {
      setDp(one + two);
    }
  }, []);

  //User Thought

  const userThoughts = useSelector((state) => state.userThought);
  const { user_thot_loading, user_thot_error, userThought } = userThoughts;

  useEffect(() => {
    if (!userThought) {
      dispatch(getUserThought(params.id));
    }
    if (userThought) {
      setThot(userThought.data.findThought);
    }
    console.log(user_thot_loading);
  }, [dispatch, userThought]);

  return (
    <Profilestyle>
      <div className="large_photo">
        {userInfo.data.profileimage !== "" ? (
          <img src={userInfo.data.profileimage} alt="" />
        ) : (
          ""
        )}
      </div>
      <Container>
        <div className="user_info_page">
          <div className="image_detail">
            <div className="image center">
              {userInfo.data.profileimage !== "" ? (
                <img src={userInfo.data.profileimage} />
              ) : (
                dp
              )}
            </div>
            <div className="user_detail">
              <div className="name">
                <h4>
                  {userInfo.data.firstname + " " + userInfo.data.lastname}
                </h4>
                <p>{userInfo.data.username.replace("@thot", "@")}</p>
              </div>
              <div className="meta">
                <p>
                  <span>{userInfo.data.following.length}</span> Following
                </p>
                <p>
                  <span>{userInfo.data.followers.length}</span> Followers
                </p>
              </div>
            </div>
          </div>
          <div className="user__ft">
            <ul>
              <li>
                <button>
                  <Link to="/login">Edit Profile</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <main className="user__data">
          <nav>
            <ul>
              <NavLink
                to="thot"
                className={({ isActive }) =>
                  isActive ? "activeBar" : undefined
                }
              >
                <button>Thots</button>
              </NavLink>
              <Link to="/">
                <button>Liked & Rethot</button>
              </Link>
            </ul>
          </nav>
          <menu>
            <div className="thots">
              {user_thot_loading ? <Spinner /> : <Thot thot={thot} />}
            </div>
          </menu>
        </main>
      </Container>
    </Profilestyle>
  );
};

export default Profile;
