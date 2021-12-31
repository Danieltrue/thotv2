import React, { useEffect, useState } from "react";
import Profilestyle from "../style/components/Profile";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const [dp, setDp] = useState("");
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    const user = userInfo.data.username.split(" ");
    const one = userInfo.data.firstname.split("")[0];
    const two = userInfo.data.lastname.split("")[0];
    if (userInfo.data) {
      setDp(one + two);
    }
  }, []);

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
        <main className="user__data"></main>
      </Container>
    </Profilestyle>
  );
};

export default Profile;
