import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  SlidersHorizontal,
  ChevronDown,
  StretchHorizontal,
  StretchVertical,
  Grip,
  LayoutGrid,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const fetchProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  return data;
};

const Products = async () => {
  const products = (await fetchProducts()) as Product[];

  return (
    <main>
      <section>
        <MaxWidthWrapper className="mb-96">
          {/* hero image */}
          <div
            style={{
              backgroundImage: "url(/shop_page_bg.jpeg)",
            }}
            className="w-full h-[30vh] bg-cover bg-center grid place-content-center"
          >
            <div className="space-y-2 text-center">
              <h1 className="text-4xl lg:text-5xl font-[500]">
                Shop All Products
              </h1>
              <p className="lg:font-[200] lg:text-xl">
                Let&apos;s design the place you always imagined.
              </p>
            </div>
          </div>

          {/* page actual content */}
          <div className="flex items-start py-8 gap-4">
            {/* filter column for desktop only */}
            <div className="h-[600px] bg-blue-200 lg:w-[20%] hidden lg:block py-1"></div>

            {/* filter and products */}
            <div className="lg:w-[80%] lg:ml-auto space-y-2 bg-green-50">
              {/* filter options */}
              <div className="space-y-2 lg:space-y-0 flex flex-col lg:flex-row lg:gap-8 lg:text-lg w-full">
                {/* filter button and icons */}
                <div className="flex justify-between items-center border-y lg:border-none lg:order-2 lg:max-w-max py-1 lg:py-0">
                  {/* filter button */}
                  <div className="flex items-center gap-2 lg:hidden">
                    <SlidersHorizontal className="w-4 h-4" strokeWidth={3} />
                    <span className="block">Filter</span>
                  </div>

                  {/* icons */}
                  <div className="flex">
                    <div className="py-2 px-3 border">
                      <Grip className="h-5 w-5" fill="black" strokeWidth={4} />
                    </div>
                    <div className="py-2 px-3 border">
                      <LayoutGrid className="h-5 w-5" fill="black" />
                    </div>
                    <div className="py-2 px-3 border bg-neutralGray">
                      <StretchVertical className="h-5 w-5" fill="black" />
                    </div>
                    <div className="py-2 px-3 border">
                      <StretchHorizontal className="h-5 w-5" fill="black" />
                    </div>
                  </div>
                </div>

                {/* room title and sort */}
                <div className="flex justify-between items-center lg:order-1 lg:flex-grow">
                  <span className="block font-semibold text-2xl ml-3">
                    All Rooms
                  </span>
                  <div className="flex items-center gap-2">
                    Sort By
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* products */}
              <div className="grid grid-cols-2 lg:grid-cols-4 row-gap-2">
                {products.map((prod, index) => {
                  return <ProductCard key={prod.id} product={prod} />;
                })}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Products;
