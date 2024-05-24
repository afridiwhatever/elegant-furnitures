"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { HeartIcon, HeartIconFilled } from "../../public/icons/Icons";

const AddToWishlistButton = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleAddedToFavorites = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Button
      onClick={handleAddedToFavorites}
      className="flex-grow w-full py-4 border border-black"
      variant="ghost"
    >
      {!isFavorite ? <HeartIcon /> : <HeartIconFilled />}

      <span className="text-lg ml-2">Wishlist</span>
    </Button>
  );
};

export default AddToWishlistButton;
