import React, { useState } from "react";
import FooterStyle from "../style/components/Footer";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <FooterStyle>
      <div className="footer__inner center-sbtw">
        <p>Simply Made For Sharing Thot</p>{" "}
        <ul className="center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {props.login ? (
              <Link to="/register">Sign up</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
};

export default Footer;
