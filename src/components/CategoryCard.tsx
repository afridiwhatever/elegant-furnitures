import React from "react";
import { cn } from "@/lib/utils";
import ShopNowButton from "./ShopNowButton";
import Link from "next/link";

interface CategoryCardProps {
  bgImageUrl: string;
  isTall?: boolean;
  category: string;
  link: string;
}

const CategoryCard = ({
  bgImageUrl,
  category,
  isTall,
  link,
}: CategoryCardProps) => {
  let bgImageClass;
  if (category === "Living Room") {
    bgImageClass = "livingroom-bg";
  } else if (category === "Bedroom") {
    bgImageClass = "bedroom-bg";
  } else if (category === "Kitchen") {
    bgImageClass = "kitchen-bg";
  }

  return (
    <div
      className={cn(
        "font-poppins p-12 bg-neutralGray bg-no-repeat bg-right min-h-[290px] lg:min-h-0",
        bgImageClass,
        {
          "row-span-2 bg-center": isTall,
        }
      )}
    >
      <h2 className="text-4xl font-thin">{category}</h2>
      <ShopNowButton color="black" to={link} />
    </div>
  );
};

export default CategoryCard;

// this needs to be kept here. it's working sometimes, sometimes ain't
// return (
//   <div
//     className={cn(
//       `font-poppins p-12 bg-neutralGray bg-no-repeat bg-right bg-[url\("${bgImageUrl}")\]`,
//       {
//         "row-span-2 bg-center": isTall,
//       }
//     )}
//   >
//     <h2 className="text-4xl font-thin">{category}</h2>
//     <ShopNowButton color="black" to={link} />
//   </div>
// );
