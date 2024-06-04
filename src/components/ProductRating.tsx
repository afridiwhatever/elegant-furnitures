"use client";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ProductRating = ({
  rating,
  size,
  color,
  activeColor,
}: {
  rating?: number;
  size?: number;
  color?: string;
  activeColor?: string;
}) => {
  return (
    <ReactStars
      count={5}
      size={size || 13}
      value={rating || 5}
      isHalf={true}
      color={color || "black"}
      activeColor={activeColor || "#ffd700"}
      edit={false}
    />
  );
};

export default ProductRating;
