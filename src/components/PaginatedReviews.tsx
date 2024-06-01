"use client";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { ProductReview } from "@/types";
import Pagination from "./ui/pagination";

const PaginatedReviews = ({
  productReviews,
}: {
  productReviews: Array<{
    username: string;
    profile_image: string | null;
    rating: number;
    comment: string;
    review: string;
  }>;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 3;
  const lastReviewIndex = currentPage * reviewsPerPage;
  const firstReviewIndex = lastReviewIndex - reviewsPerPage;

  const currentReviews = productReviews.slice(
    firstReviewIndex,
    lastReviewIndex
  );

  return (
    <>
      <div className="w-full space-y-6">
        {currentReviews.map((review, index) => {
          return <ReviewCard key={review.username + index} review={review} />;
        })}
      </div>
      <Pagination
        totalElements={productReviews.length}
        elementPerPage={reviewsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default PaginatedReviews;
