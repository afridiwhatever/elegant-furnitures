"use client";

import { useState } from "react";
import { HeartIcon, HeartIconFilled } from "../../public/icons/Icons";
import { Button } from "./ui/button";

const AddToWishlistButton = ({
  useCase,
}: {
  useCase: "product_card" | "product_page";
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleAddedToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const isProductPage = useCase === "product_page";

  if (isProductPage) {
    return (
      <Button
        onClick={handleAddedToFavorites}
        className="flex-grow w-full py-4 border border-black"
        variant="ghost"
      >
        {!isFavorite ? <HeartIcon /> : <HeartIconFilled />}
        {isProductPage && <span className="text-lg ml-2">Wishlist</span>}
      </Button>
    );
  }

  return (
    <div onClick={handleAddedToFavorites}>
      {isFavorite ? <HeartIconFilled className="h-6 w-6 " /> : <HeartIcon />}
    </div>
  );
};

export default AddToWishlistButton;
