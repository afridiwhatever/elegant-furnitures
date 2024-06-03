import { ProductReview } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSlug(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export const getRatingAndReviewCount = (productReviews: ProductReview[]) => {
  const numberOfReviews = productReviews.length;
  const averageRating =
    productReviews.reduce((total, review) => {
      return total + review.rating;
    }, 0) / numberOfReviews;

  return {
    averageRating,
    numberOfReviews,
  };
};
