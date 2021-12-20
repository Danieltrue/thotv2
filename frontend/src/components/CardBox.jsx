import React from "react";
import Masonry from "react-masonry-css";
import CardBoxstyle from "../style/components/CardBox";
import Card from "./Card";

const CardBox = ({ props }) => {
  if (!props) return <>loading</>;
  return (
    <CardBoxstyle>
      {props.data.map((post) => {
        return <Card post={post} />;
      })}
    </CardBoxstyle>
  );
};

export default CardBox;
