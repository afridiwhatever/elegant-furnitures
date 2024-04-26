import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="bg-blue-300 grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:h-[700px]">
      <Category className="row-span-2" />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;
