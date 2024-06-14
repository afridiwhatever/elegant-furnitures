"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCategory } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface FilterCriteria {
  category?: string[];
  price?: string;
  colors?: string[];
}

interface FilterProps {
  categoryOptions: ProductCategory[];
  priceRangeOptions: {
    minPrice: number;
    maxPrice: number;
  };
  colorOptions: string[];
}

// receive the filtercriteria prop based on I'll render the checkboxes on so to let the user filter
const Filter = ({
  categoryOptions,
  priceRangeOptions,
  colorOptions,
}: FilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  /*when the user selects a criteria and clicks back button, the state will not be declared empty, 
 rather with the states from URL so that the filters doesn't reset*/
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
    category: searchParams.get("category")?.split(",") || [],
    colors: searchParams.get("colors")?.split(",") || [],
    price: searchParams.get("price") || "",
  });

  // check if the selected category is already in the category array. If so, remove it. Otherwise, add.
  const handleCategoryChange = (label: string) => {
    setFilterCriteria((prevCriteria) => {
      const newCategories = prevCriteria.category?.includes(label)
        ? prevCriteria.category?.filter((category) => category !== label)
        : [...(prevCriteria.category || []), label];

      return { ...prevCriteria, category: newCategories };
    });
  };

  // check if the selected color is already in the colors array. If so, remove it. Otherwise, add.
  const handleColorChange = (color: string) => {
    setFilterCriteria((prevCriteria) => {
      const newColors = prevCriteria.colors?.includes(color)
        ? prevCriteria.colors?.filter((c) => c !== color)
        : [...(prevCriteria.colors || []), color];

      return { ...prevCriteria, colors: newColors };
    });
  };

  // this effect will update the url(searchParams) based on filtercriteria state
  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (filterCriteria.category && filterCriteria.category.length > 0) {
      queryParams.append("category", filterCriteria.category.join(","));
    }

    if (filterCriteria.colors && filterCriteria.colors.length > 0) {
      queryParams.append("colors", filterCriteria.colors.join(","));
    }

    if (filterCriteria.price) {
      queryParams.append("price", filterCriteria.price);
    }

    const queryString = queryParams.toString();
    const url = `/products?${queryString}`;
    router.push(url, { scroll: false });
  }, [filterCriteria, router]);

  /*this effect will update the filtercriteria state based on URL searchParams state, when the user clicks back button
   Had nextjs caused a full page refresh in case of back navigation, this wouldn't be required. But since next doesnt do that,
   we have to keep track of the searchparams. Also, this makes searchParams the single source of truth. Everything depends on the state of searchParams. */
  useEffect(() => {
    setFilterCriteria({
      category: searchParams.get("category")?.split(",") || [],
      colors: searchParams.get("colors")?.split(",") || [],
    });
  }, [searchParams]);

  return (
    <div className="lg:w-[20%] hidden lg:block space-y-8 rounded-lg pt-0 ">
      {/* sorting options */}
      <div className="relative text-2xl">
        <Select>
          <SelectTrigger className="w-full py-6 border-zinc-300">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-2xl">
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className="text-xs absolute -top-[7px] right-4 bg-white block px-1 text-gray-600 t">
          Sort By
        </span>
      </div>

      {/* category selector */}
      <div className="rounded-md font-[600] border border-zinc-300 p-3">
        <h4 className="text-2xl tracking-wide font-semibold">Categories</h4>
        <div className="space-y-2 mt-2">
          {categoryOptions.map((category) => (
            <div
              key={category.label}
              className="flex items-center gap-1.5  ml-1"
            >
              <input
                type="checkbox"
                id={category.label}
                checked={filterCriteria.category?.includes(category.label)}
                onClick={() => handleCategoryChange(category.label)}
              />
              <label
                htmlFor={category.label}
                className={`text-[15px] text-zinc-700 font-light hover:underline ${
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
      <div className="rounded-md border border-zinc-300 p-3">
        <h4 className="text-2xl font-semibold">Price</h4>
        {/* render a range selector for price here based on min and max price received as prop */}
      </div>

      {/* color selector */}
      <div className="rounded-md border border-zinc-300 p-3">
        <h4 className="text-2xl">Colors</h4>
        <div className="space-y-2 mt-2">
          {colorOptions.map((color, index) => (
            <div key={color + index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={color}
                checked={filterCriteria.colors?.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <label
                htmlFor={color}
                className={`text-[15px] text-zinc-700 font-light hover:underline ${
                  filterCriteria.colors?.includes(color) ? "font-semibold" : ""
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
