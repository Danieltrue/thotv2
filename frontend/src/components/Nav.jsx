import React from "react";
import Navstyle from "../style/components/Nav";
import { useSelector } from "react-redux";
import UnLoggedNav from "./UnLoggedNav";
import LoggedNav from "./LoggedNav";

const Nav = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  return (
    <Navstyle>
      <div>
        <h3 className="logo">thot</h3>
      </div>
      <div>
        {userInfo ? <LoggedNav userInfo={userInfo} /> : <UnLoggedNav />}
      </div>
    </Navstyle>
  );
};

export default Nav;
