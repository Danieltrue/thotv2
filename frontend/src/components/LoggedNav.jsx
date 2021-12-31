import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoggedNav = (props) => {
  const [data, setData] = useState(props.userInfo.data);
  const [dp, setDp] = useState("");

  useEffect(() => {
    const user = data.username.split(" ");
    const one = data.firstname.split("")[0];
    const two = data.lastname.split("")[0];

    if (data) {
      setDp(one + two);
    }
  }, [props]);
  return (
    <div className="nav__container">
      <ul className="logged_style center-sbtw">
        <div className="search__bar">
          <input type="text" placeholder="Search For Author" />
        </div>
        <div className="profileimage center">
          {data.profileimage !== "" ? (
            <Link to={`/profile/++/${data.id}/++`}>
              <img src={data.profileimage} />
            </Link>
          ) : (
            <Link to={`/profile/++/${data.id}/++`}>
              <li>{dp}</li>
            </Link>
          )}
        </div>
        <Link to={`/profile/++/${data.id}/++`}>
          <div className="username">
            <li>{data.username.replace("@thot", "")}</li>
          </div>
        </Link>
      </ul>
      <div className="floating__btn">
        {!props.btn ? (
          ""
        ) : (
          <Link to="/write">
            <button>Share</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoggedNav;
