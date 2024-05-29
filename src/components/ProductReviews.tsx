import React from "react";
import ProductRating from "./ProductRating";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Test from "./Test";

const ProductReviews = () => {
  return (
    <div className="w-full">
      <div className="py-6 lg:py-8">
        <h2 className="text-2xl font-poppins">Customer Reviews</h2>
        <div className="flex gap-3 items-center mt-2 mb-5">
          <ProductRating />
          <p>11 Reviews</p>
        </div>
        <div className="relative hover:cursor-pointer">
          <input
            type="text"
            placeholder="Share your thoughts"
            className="py-4 px-6 w-full border border-gray-300 rounded-lg focus:outline-black placeholder:text-sm placeholder:font-poppins"
          />
          <div className="p-1 bg-black rounded-full grid place-content-center absolute top-[50%] -translate-y-[50%] right-4">
            <ArrowRight className="text-white h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between mb-96">
        <span className="text-xl font-[500] font-poppins block">
          11 Reviews
        </span>
        <Test />
      </div>
    </div>
  );
};

export default ProductReviews;
