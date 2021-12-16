import React from "react";
import { Link } from "react-router-dom";

const UnLoggedNav = () => {
  return (
    <ul className="unloggednav__style center">
      <div>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
      </div>
      <div>
        <li>
          <button>
            <Link to="/register">Share thot</Link>
          </button>
        </li>
      </div>
    </ul>
  );
};

export default UnLoggedNav;
