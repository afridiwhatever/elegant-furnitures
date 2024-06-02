import { Product, ProductReview } from "@/types";
import { ArrowRight, ChevronDown } from "lucide-react";
import PaginatedReviews from "./PaginatedReviews";
import ProductRating from "./ProductRating";

import Test from "./Test";

const ProductReviews = ({
  productReviews,
}: {
  productReviews: ProductReview[];
}) => {
  return (
    <>
      <div className="w-full pt-4 lg:pt-0 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-poppins">Customer Reviews</h2>
          <div className="flex gap-2 items-center pb-4">
            <ProductRating />
            <p>11 Reviews</p>
          </div>
          <div className="relative hover:cursor-pointer">
            <textarea
              placeholder="Share your thoughts"
              className="resize-none py-4 px-6 w-full border border-gray-300 rounded-lg focus:outline-black placeholder:text-sm placeholder:font-poppins"
            />
            <div className="p-1 bg-black rounded-full grid place-content-center absolute top-[50%] -translate-y-[55%] right-4 lg:hidden">
              <ArrowRight className="text-white h-5 w-5" />
            </div>
            <div className="px-6 py-2 bg-zinc-900 text-white text-sm rounded-3xl hidden lg:block absolute top-[50%] -translate-y-[55%] right-4">
              Post Review
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-center md:flex-row gap-3 justify-between">
          <span className="text-xl font-[500] font-poppins block">
            11 Reviews
          </span>
          <div>
            <Test />
          </div>
        </div>
        <PaginatedReviews productReviews={productReviews} />
      </div>
    </>
  );
};

export default ProductReviews;
