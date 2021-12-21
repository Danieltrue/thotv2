import React, { useEffect, useState } from "react";
import CategoryBox from "../components/CategoryBox";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import Homestyle from "../style/components/Home";
import { logged } from "../store/actions/userAction";
import { getAllThought } from "../store/actions/postAction";
import CardBox from "../components/CardBox";

const Home = () => {
  const [postsData, setPostsData] = useState({});
  const dispatch = useDispatch();

  const userLoged = useSelector((state) => state.userLoged);
  let { loading, error, userInfo } = userLoged;

  //Search for the post
  const allThought = useSelector((state) => state.allThought);

  console.log(allThought);

  useEffect(() => {
    dispatch(getAllThought());
    if (allThought.posts) {
      setPostsData(allThought.posts);
    }
  }, [dispatch]);

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
        <main className="card__nav">
          {loading ? "loading" : <CardBox props={allThought.posts} />}
        </main>
      </div>
    </Homestyle>
  );
};

export default Home;
