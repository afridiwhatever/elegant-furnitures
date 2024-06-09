"use client";

import { SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ProductCategory } from "@/types";

interface FilterCriteria {
  category?: string;
  price?: string;
}

const Filter = ({
  categories,
  priceRange,
  colors,
}: {
  categories: ProductCategory[];
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  colors: string[];
}) => {
  console.log(priceRange);
  const router = useRouter();

  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});

  const handleCategoryChange = (label: string) => {
    // setFilterCriteria((prev) => {
    //   const newCategories = prev.category?.includes(label)
    //     ? prev.category.filter((category) => category !== label)
    //     : [...(prev.category || []), label];
    //   return {
    //     ...prev,
    //     category: newCategories,
    //   };
    // });`
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
          {categories.map((category) => (
            <div key={category.label} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={category.label}
                checked={filterCriteria.category?.includes(category.label)}
                onChange={() => handleCategoryChange(category.label)}
              />
              <label
                htmlFor={category.label}
                className={`text-sm text-muted-foreground ${
                  filterCriteria.category?.includes(category.label)
                    ? "font-semibold"
                    : ""
                }`}
              >
                {category.value}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* price selector */}
      <div>
        <h4 className="uppercase font-[600]">Price</h4>
        {/* render a range selector for price here based on min and max price received as prop */}
      </div>
      <div>
        <h4 className="uppercase font-[600]">Colors</h4>
        <div className="space-y-2 mt-2">
          {colors.map((color, index) => (
            <div key={color + index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={color}
                checked={filterCriteria.category?.includes(color)}
                onChange={() => handleCategoryChange(color)}
              />
              <label
                htmlFor={color}
                className={`text-sm text-muted-foreground ${
                  filterCriteria.category?.includes(color)
                    ? "font-semibold"
                    : ""
                }`}
              >
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
