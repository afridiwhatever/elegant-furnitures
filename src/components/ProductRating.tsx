"use client";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ProductRating = ({
  rating,
  size,
}: {
  rating?: number;
  size?: number;
}) => {
  return (
    <ReactStars
      count={5}
      size={size || 13}
      value={rating || 5}
      isHalf={true}
      color={"black"}
      activeColor={"#ffd700"}
      edit={false}
    />
  );
};

export default ProductRating;
