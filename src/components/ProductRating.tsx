"use client";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ProductRating = ({ rating }: { rating?: number }) => {
  return (
    <ReactStars
      count={rating || 5}
      size={13}
      value={5}
      isHalf={true}
      color="#ffd700"
      activeColor={"#000"}
      edit={false}
    />
  );
};

export default ProductRating;
