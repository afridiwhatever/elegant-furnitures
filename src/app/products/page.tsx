import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { Product, ProductCategory } from "@/types";
import {
  ChevronDown,
  Grip,
  LayoutGrid,
  SlidersHorizontal,
  StretchHorizontal,
  StretchVertical,
} from "lucide-react";
import { Suspense } from "react";
type ProductResponse = {
  products: Product[];
  filteringCriteria: {
    categories: ProductCategory[];
    priceRange: {
      minPrice: number;
      maxPrice: number;
    };
    colors: string[];
  };
};

const fetchProducts = async (queryParams?: any) => {
  let url = "http://localhost:3000/api/products";

  if (queryParams && Object.keys(queryParams).length > 0) {
    const queryString = new URLSearchParams(queryParams);
    url += `?${queryString}`;
  }

  const res = await fetch(url, { cache: "no-store" });
  const data: ProductResponse = await res.json();
  return data;
};

const Products = async ({ searchParams }: any) => {
  const { products, filteringCriteria } = await fetchProducts(searchParams);

  return (
    <main>
      <section>
        <MaxWidthWrapper>
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
            <Suspense>
              <Filter
                categories={filteringCriteria.categories}
                priceRange={filteringCriteria.priceRange}
                colors={filteringCriteria.colors}
              />
            </Suspense>

            {/* filter and products */}
            <div className="w-full lg:w-[85%] lg:ml-auto space-y-2 border border-zinc-300 rounded-lg p-2">
              {/* filter options */}
              <div className="space-y-2 lg:space-y-0 flex flex-col lg:flex-row lg:gap-8 lg:text-lg w-full">
                {/* filter button and icons */}
                <div className="flex justify-between items-center border-y lg:border-none lg:order-2 lg:max-w-max py-1 lg:py-0">
                  {/* mobile filter button */}
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
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4">
                {products.map((prod) => {
                  return (
                    <ProductCard key={prod.id} product={prod} context="grid" />
                  );
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
