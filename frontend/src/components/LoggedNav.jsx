import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoggedNav = (props) => {
  const [data, setData] = useState(props.userInfo.data);
  const [dp, setDp] = useState("");

  useEffect(() => {
    const user = data.username.split(" ");
    const one = user[0].split("")[0];
    const two = user[1].split("")[0];
    if (data) {
      setDp(one + two);
      console.log(one);
    }
  }, [props]);
  return (
    <ul className="logged_style center-sbtw">
      <div className="username">
        <li>{data.username}</li>
      </div>
      <div className="profileimage center">
        {data.profileimage !== "" ? (
          <Link to="/">
            <img src={data.profileimage} />
          </Link>
        ) : (
          <Link to="/">
            <li>{dp}</li>
          </Link>
        )}
      </div>
      <div>
        {!props.btn ? (
          ""
        ) : (
          <li>
            <Link to="/write">
              <button>Share</button>
            </Link>
          </li>
        )}
      </div>
    </ul>
  );
};

export default LoggedNav;
