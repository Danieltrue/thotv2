import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserThought } from "../store/actions/postAction";
import Spinner from "./Spinner";
import Card from "./Card";

const Thot = ({ params }) => {
  const [thot, setThot] = useState([]);
  const dispatch = useDispatch();

  const userThoughts = useSelector((state) => state.userThought);

  const { loading, error, userThought } = userThoughts;

  useEffect(() => {
    dispatch(getUserThought(params.id));
    if (userThought) {
      setThot(userThought.data.findThought);
    }
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        thot.map((post) => {
          return <Card key={post._id} post={post} profile={true} />;
        })
      )}
    </>
  );
};

export default Thot;
