import React from "react";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <div className="mt-12">
      <h2 className="font-poppins text-3xl lg:text-5xl">
        New <br /> Arrivals
      </h2>
      <div className=" mt-10 flex gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewArrivals;
