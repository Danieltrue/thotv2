import React from "react";
import Masonry from "react-masonry-css";
import CardBoxstyle from "../style/components/CardBox";
import Card from "./Card";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 1,
  500: 1,
};

const CardBox = ({ props }) => {
  if (!props) return <>loading</>;
  return (
    <CardBoxstyle>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.data.map((post) => {
          return <Card post={post} />;
        })}
      </Masonry>
    </CardBoxstyle>
  );
};

export default CardBox;
