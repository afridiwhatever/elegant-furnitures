"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import SaleCountdown from "./SaleCountdown";

const ProductShowcase = ({
  productImages,
}: {
  productImages: {
    image1: string;
    image2?: string;
    image3?: string;
    image4?: string;
  };
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
      {/* left side - images */}
      <div className="w-[55%] flex">
        <div className="h-full w-[20%] flex flex-col gap-4">
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
        <div className="w-[80%]">
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

      {/* right side = details */}
      <div className="w-[45%] ">
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <ReactStars
              count={5}
              size={13}
              value={5}
              isHalf={true}
              color={"#fff"}
              activeColor={"#000"}
              edit={false}
            />
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
        </div>
        <div className="border-y border-[#E8ECEF] py-6 my-6">
          <p className="text-lg text-[#343839] mb-3">Offer expires in:</p>
          <SaleCountdown />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
