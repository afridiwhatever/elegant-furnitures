import { Product } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSlug(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export const getRatingAndReviewCount = (product: Product) => {
  const numberOfReviews = product.reviews.length;
  const averageRating =
    product.reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0) / numberOfReviews;

  return {
    averageRating,
    numberOfReviews,
  };
};
