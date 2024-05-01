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
    <div className="flex-grow bg-red-200">
      <div className=" relative aspect-square  bg-blue-300">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt="featured-image"
        />
      </div>
      <div>
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
