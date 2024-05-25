"use client";

import useStore from "@/store/store";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper as SwiperInstance } from "swiper";

interface ProductShowcaseProps {
  images: string[];
}

const ProductShowcase = ({ images }: ProductShowcaseProps) => {
  const swiperRef = useRef<any>(null);

  const originialImageArrayLength: number = images.length;

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeImage, setActiveImage] = useState<undefined | string>(undefined);

  const productDisplayImages = useStore((state) => state.productDisplayImages);
  const updateProductDisplayImages = useStore(
    (state) => state.updateProductDisplayImages
  );
  const setSwiperRef = useStore((state) => state.setSwiperRef);

  useEffect(() => {
    setSwiperRef(swiperRef);
    updateProductDisplayImages(images);
  }, []);

  useEffect(() => {
    if (productDisplayImages.length > originialImageArrayLength) {
      setActiveImage(productDisplayImages[productDisplayImages.length - 1]);
    } else {
      setActiveImage(productDisplayImages[0]);
    }
  }, [productDisplayImages, originialImageArrayLength]);

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

  const handleSwiperSlideChange = (swiper: SwiperInstance) => {
    const imageUrl = productDisplayImages[swiper.activeIndex];
    setActiveImage(imageUrl);
    setIsBeginning(swiper.activeIndex === 0);
    setIsEnd(swiper.activeIndex === productDisplayImages.length - 1);
  };

  return (
    <div className="w-[45%] h-[80vh] space-y-4">
      <div className="h-[85%] w-full ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSwiperSlideChange}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="h-full w-full relative"
          ref={swiperRef}
        >
          {productDisplayImages.map((imageUrl: string) => {
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
          <button
            onClick={handleNext}
            className={`absolute top-[50%] -translate-y-[50%] z-10 right-5 bg-white rounded-full p-2 ${
              isEnd ? "opacity-50" : ""
            }`}
          >
            <ArrowRight className="h-7 w-7" />
          </button>
          <button
            onClick={handlePrev}
            className={`absolute top-[50%] -translate-y-[50%] z-10 left-5 bg-white rounded-full p-2 ${
              isBeginning ? "opacity-50" : ""
            }`}
          >
            <ArrowLeft className="h-7 w-7" />
          </button>
        </Swiper>
      </div>
      <div className="w-full">
        <div className="h-full w-full flex gap-6">
          {productDisplayImages.map((imageUrl: string) => {
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
