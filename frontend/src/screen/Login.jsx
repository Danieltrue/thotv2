import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import Loginstyle from "../style/components/Login.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.userLogin);
  let { loading, error, userInfo } = userDetail;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password));
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo]);

  return (
    <Loginstyle>
      <div className="login center">
        <div className="login__inner center">
          <div className={`error__block center ${error ? " error" : ""}`}>
            <p>{error ? error.data.error : ""}</p>
          </div>
          <div className="logo__block">
            <h3 className="logo">thot</h3>
          </div>
          <form className="login__form" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button className="submitBtn">
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
            <p>
              Don't Have an Account? <Link to="/register">Sign up</Link>
            </p>
          </form>
          <div className="line"></div>
          <div className="account_login"></div>
        </div>
      </div>

      <Footer login={true} />
    </Loginstyle>
  );
};

export default Login;
