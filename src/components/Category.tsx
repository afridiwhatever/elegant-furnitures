import React from "react";

const Category = ({ className, bgUrl }: any) => {
  return (
    <div className={className + ' bg-[url("/categories/bedroom.png")]'}>
      Categories
    </div>
  );
};

export default Category;
