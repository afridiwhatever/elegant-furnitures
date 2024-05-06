"use client";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ProductRating = () => {
  return (
    <ReactStars
      count={5}
      size={13}
      value={5}
      isHalf={true}
      color={"#fff"}
      activeColor={"#000"}
      edit={false}
    />
  );
};

export default ProductRating;
