import React from "react";
import Image from "next/image";
import ProductRating from "./ProductRating";
import { ProductReview } from "@/types";

const ReviewCard = ({ review }: { review: ProductReview }) => {
  return (
    <div className="flex gap-4 border-b pb-3 ">
      <div className="h-16 w-16 relative rounded-full overflow-hidden  min-w-16">
        <Image src={review.userPicture} fill alt="sofia" />
      </div>
      <div className="h-full w-full space-y-2">
        <div className="space-y-2">
          <h6 className="font-[500] text-lg">{review.reviewByUser}</h6>
          <div className="flex gap-2 items-center">
            <div className="flex-shrink-0">
              <ProductRating rating={review.rating} />
            </div>

            <div className="text-muted-foreground text-sm ">|</div>
            <p className="font-[500] ">{review.reviewSummary}</p>
          </div>
        </div>
        <p>{review.reviewDesc}</p>
        <div className="flex flex-row items-center gap-4 text-sm mt-4 h-full">
          <div
            className="px-5 py-1.5 border border-zinc-300 hover:bg-zinc-100 transition-all duration-200 rounded-md hover:cursor-pointer shadow-md"
            aria-hidden
          >
            Helpful
          </div>
          <div className="text-zinc-500">|</div>
          <span className="block hover:cursor-pointer text-muted-foreground">
            Report
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
