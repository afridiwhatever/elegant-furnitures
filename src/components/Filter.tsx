"use client";

import { SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import PriceSlider from "./ui/PriceSlider";

import { ProductCategory } from "@/types";
import ReactSlider from "react-slider";

interface FilterCriteria {
  category?: string;
  price?: string;
}

const Filter = ({
  categories,
  priceRange,
}: {
  categories: ProductCategory[];
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
}) => {
  console.log(priceRange);
  const router = useRouter();

  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});

  const handleCategoryChange = (label: string) => {
    // setFilterCriteria((prev) => {
    //   const newCategories = prev.category?.includes(label)
    //     ? prev.category.filter((cat) => cat !== label)
    //     : [...(prev.category || []), label];
    //   return {
    //     ...prev,
    //     category: newCategories,
    //   };
    // });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(
      filterCriteria as Record<string, string>
    );
    const queryString = queryParams.toString();
    const url = `/products?${queryString}`;
    router.push(url);
  }, [filterCriteria]);

  return (
    <div className="h-[600px] lg:w-[20%] hidden lg:block py-1 space-y-8">
      {/* desktop filter button */}
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="w-5 h-5" strokeWidth={3} />
        <span className="block text-xl font-[600]">Filter</span>
      </div>

      {/* category selector */}
      <div>
        <h4 className="uppercase font-[600]">Categories</h4>
        <div className="space-y-2 mt-2">
          {categories.map((cat) => (
            <div key={cat.label} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={cat.label}
                checked={filterCriteria.category?.includes(cat.label)}
                onChange={() => handleCategoryChange(cat.label)}
              />
              <label
                htmlFor={cat.label}
                className={`text-sm text-muted-foreground ${
                  filterCriteria.category?.includes(cat.label)
                    ? "font-semibold"
                    : ""
                }`}
              >
                {cat.value}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* price selector */}
      <div>
        <h4 className="uppercase font-[600]">Price</h4>
        {/* render a range selector for price here based on min and max price received as prop */}
        {/* <ReactSlider
          className="horizontal-slider bg-red-200"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[priceRange.minPrice, priceRange.maxPrice]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        /> */}
        {/* <PriceSlider /> */}
      </div>
    </div>
  );
};

export default Filter;
