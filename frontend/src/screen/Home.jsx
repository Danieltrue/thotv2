import React, { useEffect } from "react";
import CategoryBox from "../components/CategoryBox";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import Homestyle from "../style/components/Home";
import { logged } from "../store/actions/userAction";

const Home = () => {
  const dispatch = useDispatch();

  const userLoged = useSelector((state) => state.userLoged);
  const { loading, error, userInfo } = userLoged;

  useEffect(() => {
    dispatch(logged());
  }, [dispatch]);
  return (
    <Homestyle>
      <Nav btn={true} />
      <div className="main__home__inner center-sbtw">
        <nav className="inner__nav">
          <div className="category__box">
            <CategoryBox />
          </div>
        </nav>
        <main className="card__nav"></main>
      </div>
    </Homestyle>
  );
};

export default Home;
