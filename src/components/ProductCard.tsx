"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { HeartIconFilled } from "../../public/icons/Icons";
import { Button } from "./ui/button";

const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddedToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative hover:cursor-pointer group">
      {/* image and button */}
      <div className="relative w-[230px] h-[310px]  lg:w-[265px] lg:h-[360px]">
        <Image
          src="/products/loveseat_sofa.png"
          fill
          alt="loveseat_sofa_product"
        />
        <div className="absolute w-full h-10 bottom-6">
          <div className="w-[80%] mx-auto transition-all duration-200 opacity-0 translate-y-[100%] group-hover:opacity-100 group-hover:translate-y-0">
            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
      {/* details */}
      <Link
        href="/products/loveseat-sofa"
        className="flex flex-col gap-1 font-semibold mt-3"
      >
        <div>
          <ReactStars
            count={5}
            size={13}
            value={3.5}
            isHalf={true}
            color={"black"}
            activeColor={"#ffd700"}
            edit={false}
          />
        </div>
        <h4>Loveseat Sofa</h4>
        <div className="flex gap-2 text-sm">
          <p>$24.00</p>
          <p className="text-muted-foreground line-through font-medium">
            $400.00
          </p>
        </div>
      </Link>
      {/* discount panel */}
      <div className="absolute top-2 left-2 font-semibold ">
        <p className="uppercase rounded-lg bg-white px-5 py-1 mb-2">New</p>
        <p className="bg-[#38CB89] rounded-lg px-5 py-1 text-white">-50%</p>
      </div>
      {/* favorite button */}
      <div
        onClick={handleAddedToFavorites}
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-xl transition-all duration-200 hover:cursor-pointer hover:scale-110 opacity-0 -translate-y-[60%] group-hover:opacity-100 group-hover:translate-y-0"
      >
        {isFavorite ? (
          <HeartIconFilled className="h-6 w-6 " />
        ) : (
          <Heart className="h-6 w-6 " />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
