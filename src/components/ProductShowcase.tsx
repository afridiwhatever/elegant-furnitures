"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductShowcase = ({
  productImages,
}: {
  productImages: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
}) => {
  const [activeImage, setActiveImage] = useState(productImages.image1);
  return (
    <div className="flex gap-12 h-[680px]">
      {/* left side - images */}
      <div className="w-[55%] flex">
        <div className="h-full w-[20%] flex flex-col justify-between">
          {Object.entries(productImages).map(([imageName, imageUrl]) => {
            const isActive = activeImage === imageUrl;
            return (
              <div
                key={imageName}
                className="h-[155px] w-[155px] relative"
                onClick={() => setActiveImage(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  fill
                  alt="product image 1"
                  className={`bg-neutralGray hover:cursor-pointer ${
                    isActive ? "border border-black" : null
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[80%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            className="h-full w-full"
          >
            {Object.entries(productImages).map(([imageName, imageUrl]) => {
              return (
                <SwiperSlide key={imageUrl} className="h-full w-full relative">
                  <Image src={imageUrl} fill alt={imageName} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* right side = details */}
      <div className="w-[45%] bg-red-200"></div>
    </div>
  );
};

export default ProductShowcase;
