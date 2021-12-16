import React from "react";
import CategoryBoxstyle from "../style/components/CategoryBox";

const CategoryBox = () => {
  return (
    <CategoryBoxstyle>
      <form action="#">
        <input type="text" placeholder="Search your taste" />
      </form>
      <div className="cat__box"></div>
    </CategoryBoxstyle>
  );
};

export default CategoryBox;
