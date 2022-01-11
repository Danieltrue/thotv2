import React, { useEffect, useState } from "react";
import Card from "./Card";

const Thot = ({ thot }) => {
  console.log(thot);
  if (thot === []) {
    return "loading";
  }
  return (
    <>
      {thot.map((post) => {
        return <Card key={post._id} post={post} profile={true} />;
      })}
    </>
  );
};

export default Thot;
