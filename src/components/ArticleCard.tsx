import React from "react";
import Image from "next/image";
import ShopNowButton from "./ShopNowButton";

const ArticleCard = ({
  title,
  link,
  imageUrl,
}: {
  title: string;
  link: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex-grow">
      <div className="relative aspect-square ">
        <Image
          src={imageUrl}
          fill
          alt="featured-image"
          className="object-cover"
        />
      </div>
      <div className="w-[300px]">
        <p className="mt-4 mb-2">{title}</p>
        <ShopNowButton
          to={link}
          buttonText="Read More"
          color="black"
          className="text-sm"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
