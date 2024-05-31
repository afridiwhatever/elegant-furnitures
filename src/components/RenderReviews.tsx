import React from "react";
import ReviewCard from "./ReviewCard";
import { ProductReview } from "@/types";

const RenderReviews = ({
  productReviews,
}: {
  productReviews: ProductReview[];
}) => {
  return (
    <div className="w-full space-y-6">
      {productReviews.map((review, index) => {
        return <ReviewCard key={review.reviewByUser + index} review={review} />;
      })}
    </div>
  );
};

export default RenderReviews;
