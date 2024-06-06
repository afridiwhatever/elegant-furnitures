import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  SlidersHorizontal,
  ChevronDown,
  StretchHorizontal,
  StretchVertical,
  Grip,
  Grid3X3,
  LayoutGrid,
} from "lucide-react";

const Products = () => {
  return (
    <main>
      <section>
        <MaxWidthWrapper className="mb-96">
          {/* hero image */}
          <div
            style={{
              backgroundImage: "url(/shop_page_bg.jpeg)",
            }}
            className="w-full h-[50vh] bg-cover bg-center grid place-content-center"
          >
            <div className="space-y-2 text-center">
              <h1 className="text-4xl md:text-5xl font-[500]">
                Shop All Products
              </h1>
              <p className="md:font-[200] md:text-xl">
                Let&apos;s design the place you always imagined.
              </p>
            </div>
          </div>

          {/* filter and all */}
          <div className="py-8 md:py-12font-[400] space-y-2">
            <div className="flex justify-between items-center py-2 border-y">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" strokeWidth={3} />
                <span className="block">Filter</span>
              </div>
              <div className="flex">
                <div className="py-2 px-3 border">
                  <Grip fill="black" strokeWidth={4} />
                </div>
                <div className="py-2 px-3 border">
                  <LayoutGrid fill="black" />
                </div>
                <div className="py-2 px-3 border bg-neutralGray">
                  <StretchVertical fill="black" />
                </div>
                <div className="py-2 px-3 border">
                  <StretchHorizontal fill="black" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="block font-semibold">All Rooms</span>
              <div className="flex items-center gap-2">
                Sort By
                <ChevronDown />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Products;
