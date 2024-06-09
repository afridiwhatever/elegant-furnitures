// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// import { ProductCategory } from "@/types";

// interface FilterCriteria {
//   category?: string;
//   price?: string;
// }

// const Filter = ({
//   categories,
//   priceRange,
//   colors,
// }: {
//   categories: ProductCategory[];
//   priceRange: {
//     minPrice: number;
//     maxPrice: number;
//   };
//   colors: string[];
// }) => {
//   const router = useRouter();

//   const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({});

//   const handleCategoryChange = (label: string) => {};

//   useEffect(() => {
//     const queryParams = new URLSearchParams(
//       filterCriteria as Record<string, string>
//     );
//     const queryString = queryParams.toString();
//     const url = `/products?${queryString}`;
//     router.push(url);
//   }, [filterCriteria]);

//   return (
//     <div className="lg:w-[20%] hidden lg:block space-y-8 rounded-lg pt-0 ">
//       {/* desktop filter button */}
//       {/* <div className="flex items-center gap-2">
//         <SlidersHorizontal className="w-5 h-5" strokeWidth={3} />
//         <span className="block text-xl font-[600]">Filter</span>
//       </div> */}

//       {/* category selector */}
//       <div className="rounded-md border border-zinc-300 p-3">
//         <h4 className="uppercase font-[600]">Categories</h4>
//         <div className="space-y-2 mt-2">
//           {categories.map((category) => (
//             <div key={category.label} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id={category.label}
//                 checked={filterCriteria.category?.includes(category.label)}
//                 onChange={() => handleCategoryChange(category.label)}
//               />
//               <label
//                 htmlFor={category.label}
//                 className={`text-sm text-muted-foreground ${
//                   filterCriteria.category?.includes(category.label)
//                     ? "font-semibold"
//                     : ""
//                 }`}
//               >
//                 {category.value}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* price selector */}
//       <div className="rounded-md border border-zinc-300 p-3">
//         <h4 className="uppercase font-[600]">Price</h4>
//         {/* render a range selector for price here based on min and max price received as prop */}
//       </div>

//       <div className="rounded-md border border-zinc-300 p-3">
//         <h4 className="uppercase font-[600]">Colors</h4>
//         <div className="space-y-2 mt-2">
//           {colors.map((color, index) => (
//             <div key={color + index} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id={color}
//                 checked={filterCriteria.category?.includes(color)}
//                 onChange={() => handleCategoryChange(color)}
//               />
//               <label
//                 htmlFor={color}
//                 className={`text-sm text-muted-foreground ${
//                   filterCriteria.category?.includes(color)
//                     ? "font-semibold"
//                     : ""
//                 }`}
//               >
//                 {color}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;

"use client";

import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { ProductCategory } from "@/types";

interface FilterCriteria {
  category?: string[];
  price?: string;
  colors?: string[];
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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
    category: searchParams.get("category")?.split(",") || [],
    colors: searchParams.get("colors")?.split(",") || [],
    price: searchParams.get("price") || "",
  });

  // const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
  //   category: [],
  //   colors: [],
  //   price: "",
  // });

  console.log(filterCriteria);

  const handleCategoryChange = (label: string) => {
    setFilterCriteria((prevCriteria) => {
      const newCategories = prevCriteria.category?.includes(label)
        ? prevCriteria.category?.filter((category) => category !== label)
        : [...(prevCriteria.category || []), label];

      return { ...prevCriteria, category: newCategories };
    });
  };

  const handleColorChange = (color: string) => {
    setFilterCriteria((prevCriteria) => {
      const newColors = prevCriteria.colors?.includes(color)
        ? prevCriteria.colors?.filter((c) => c !== color)
        : [...(prevCriteria.colors || []), color];

      return { ...prevCriteria, colors: newColors };
    });
  };

  useEffect(() => {
    setFilterCriteria({
      category: searchParams.get("category")?.split(",") || [],
      colors: searchParams.get("colors")?.split(",") || [],
    });
  }, [searchParams]);

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
    router.push(url);
  }, [filterCriteria, router]);

  return (
    <div className="lg:w-[20%] hidden lg:block space-y-8 rounded-lg pt-0 ">
      {/* category selector */}
      <div className="rounded-md border border-zinc-300 p-3">
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
      <div className="rounded-md border border-zinc-300 p-3">
        <h4 className="uppercase font-[600]">Price</h4>
        {/* render a range selector for price here based on min and max price received as prop */}
      </div>

      <div className="rounded-md border border-zinc-300 p-3">
        <h4 className="uppercase font-[600]">Colors</h4>
        <div className="space-y-2 mt-2">
          {colors.map((color, index) => (
            <div key={color + index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={color}
                checked={filterCriteria.colors?.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <label
                htmlFor={color}
                className={`text-sm text-muted-foreground ${
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
