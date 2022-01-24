import React, { useEffect, useState } from "react";
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
        <main className="card__nav">
          {loading ? "loading" : <CardBox props={allThought.posts} />}
        </main>
      </div>
    </Homestyle>
  );
};

export default Home;
