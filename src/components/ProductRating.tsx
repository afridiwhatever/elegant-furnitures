"use client";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ProductRating = ({ rating = 5 }: { rating?: number }) => {
  return (
    <ReactStars
      count={5}
      size={13}
      value={rating || 5}
      isHalf={true}
      color={"black"}
      activeColor={"#ffd700"}
      edit={false}
    />
  );
};

export default ProductRating;
