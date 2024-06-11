import { ProductReview } from "@/types";
import { ArrowRight, ChevronDown } from "lucide-react";
import PaginatedReviews from "./PaginatedReviews";
import ProductRating from "./ProductRating";
import { getRatingAndReviewCount } from "@/lib/utils";
import Test from "./Test";

const ProductReviews = ({
  productReviews,
}: {
  productReviews: ProductReview[];
}) => {
  const { averageRating, numberOfReviews } =
    getRatingAndReviewCount(productReviews);
  return (
    <>
      <div className="w-full pt-4 lg:pt-0 space-y-3">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-poppins">Customer Reviews</h2>
            <div className="flex gap-2 items-center pb-4">
              <ProductRating rating={averageRating} />
              <p>{numberOfReviews} Reviews</p>
            </div>
          </div>
          <div className="mr-1">
            {/* <select
              defaultValue={"newest"}
              name="review-sort"
              id="review-sort"
              className="border border-gray-400 rounded-md py-2.5 px-4 font-[400] w-full md:w-48"
              style={{
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                backgroundImage: "none",
                background: "none",
              }}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="positive">Positive</option>
              <option value="critical">Critical</option>
            </select>
            <ChevronDown className="h-5 w-5 absolute right-2 top-[50%] transform -translate-y-[50%] " /> */}
            <Test />
          </div>
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

        <PaginatedReviews productReviews={productReviews} />
      </div>
    </>
  );
};

export default ProductReviews;
