"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SaleCountdown from "./SaleCountdown";
import ProductRating from "./ProductRating";
import { ChevronRight } from "lucide-react";

const ProductShowcase = ({
  productImages,
  stock,
}: {
  productImages: {
    image1: string;
    image2?: string;
    image3?: string;
    image4?: string;
  };
  stock: any;
}) => {
  const swiperRef = useRef<any>(null);

  const [activeImage, setActiveImage] = useState(productImages.image1);

  const handleImageClick = (imageUrl: string) => {
    const index = Object.values(productImages).indexOf(imageUrl);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setActiveImage(imageUrl);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="flex gap-12 h-[675px]">
      <div className="w-[50%] flex">
        <div className="h-full w-[20%] flex flex-col gap-4 mr-auto ">
          {Object.entries(productImages).map(([imageName, imageUrl]) => {
            const isActive = activeImage === imageUrl;
            return (
              <div
                key={imageName}
                className="h-[155px] w-[155px] relative"
                onClick={() => handleImageClick(imageUrl)}
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
        <div className="w-[78%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              const imageUrl = Object.values(productImages)[swiper.activeIndex];
              setActiveImage(imageUrl);
            }}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            className="h-full w-full relative"
            ref={swiperRef}
          >
            {Object.entries(productImages).map(([imageName, imageUrl]) => {
              return (
                <SwiperSlide key={imageUrl} className="h-full w-full relative">
                  <Image
                    src={imageUrl}
                    fill
                    alt={imageName}
                    className="bg-neutralGray"
                  />
                </SwiperSlide>
              );
            })}
            {/* <button
              onClick={handleNext}
              className="absolute top-0 z-10 right-0"
            >
              Next
            </button>
            <button onClick={handlePrev} className="absolute top-0 z-10 left-0">
              Back
            </button> */}
          </Swiper>
        </div>
      </div>
      <div className="w-[50%] space-y-4">
        <div className="flex gap-3 items-center">
          <ProductRating />
          <p>11 Reviews</p>
        </div>
        <h1 className="font-poppins text-5xl">Tray Table</h1>
        <p className="text-lg text-blackishGray font-[400]">
          Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.
        </p>
        <p className="font-poppins text-3xl">
          $199.00{" "}
          <span className="text-xl line-through text-blackishGray">
            $400.00
          </span>
        </p>
        <div className="border-y border-[#E8ECEF] py-6 my-6">
          <p className="text-lg text-[#343839] mb-3">Offer expires in:</p>
          <SaleCountdown />
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-lg text-blackishGray">
            Measurements
          </h4>
          <p className="text-xl font-[400]">17 1/2x20 5/8 &apos;&apos;</p>
        </div>
        {/* color picker */}
        <div className="space-y-2">
          <div className="flex gap-1 items-center text-blackishGray">
            <p className="font-semibold text-lg ">Choose Color</p>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex gap-4">
            {
              // @ts-ignore
              stock.map(({ color, unitAvailable, previewImageUrl }) => {
                return (
                  <div className="max-w-max space-y-4" key={color}>
                    <p className="text-xl font-[400] max-w-max mx-auto">
                      {color}
                    </p>
                    <div className="h-[96px] w-[96px] relative">
                      <Image
                        src={previewImageUrl}
                        fill
                        alt="color-black"
                        className={`object-contain border ${
                          unitAvailable > 0 ? "" : "opacity-30"
                        }`}
                      />
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
