import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Registerstyle from "../style/components/Register";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/userAction";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.userRegister);
  let { loading, error, userInfo } = userDetail;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(register(username, email, password));
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [dispatch, userInfo]);

  return (
    <Registerstyle>
      <div className="register center">
        <div className="register__inner center">
          <div className={`error__block center ${error ? " error" : ""}`}>
            <p>{error ? error.data.error : ""}</p>
          </div>
          <div className="logo__block">
            <h3 className="logo">thot</h3>
          </div>
          <form className="register__form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter a Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter a Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button className="submitBtn">
                {loading ? <Spinner /> : "Create Account"}
              </button>
            </div>
            <p>
              Already Have an Account? <Link to="/login">Sign in</Link>
            </p>
          </form>
          <div className="line"></div>
          <div className="account_register"></div>
        </div>
      </div>

      <Footer login={false} />
    </Registerstyle>
  );
};

export default Register;
