import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
          <div className="py-8 md:py-48"></div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Products;
