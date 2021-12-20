import React from "react";
import Cardstyle from "../style/components/Card";

const Card = () => {
  return (
    <Cardstyle>
      <div className="userDetail"></div>
      <div className="thot"></div>
      <div className="topic"></div>
      <div className="post__features"></div>
    </Cardstyle>
  );
};

export default Card;
