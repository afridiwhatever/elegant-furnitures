"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useStore from "@/store/store";

interface ProductShowcaseProps {
  images: string[];
}

const ProductShowcase = ({ images }: ProductShowcaseProps) => {
  const swiperRef = useRef<any>(null);
  // @ts-expect-error
  const { productDisplayImages, updateProductDisplayImages, setSwiper } =
    useStore();

  useEffect(() => {
    setSwiper(swiperRef);
    updateProductDisplayImages(images);
  }, []);

  const [activeImage, setActiveImage] = useState(productDisplayImages[0]);

  const handlePreviewImageClick = (imageUrl: string) => {
    const index = productDisplayImages.indexOf(imageUrl);
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
    <div className="w-[45%] h-[80vh] space-y-4">
      <div className="h-[85%] w-full ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const imageUrl = productDisplayImages[swiper.activeIndex];
            setActiveImage(imageUrl);
          }}
          navigation
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="h-full w-full relative"
          ref={swiperRef}
        >
          {productDisplayImages.map((imageUrl: any) => {
            return (
              <SwiperSlide key={imageUrl} className="h-full w-full relative">
                <Image
                  src={imageUrl}
                  fill
                  alt="preview-image"
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
      <div className="w-full">
        <div className="h-full w-full flex gap-6">
          {productDisplayImages.map((imageUrl: any) => {
            const isActive = activeImage === imageUrl;
            return (
              <div
                key={imageUrl}
                className="h-[120px] w-[120px] relative"
                onClick={() => handlePreviewImageClick(imageUrl)}
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
      </div>
    </div>
  );
};

export default ProductShowcase;
