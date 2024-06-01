"use client";

import useStore from "@/store/store";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper as SwiperInstance } from "swiper";
import { ProductImage } from "@/types";

interface ProductShowcaseProps {
  images: ProductImage[];
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
      setActiveImage(productDisplayImages[productDisplayImages.length - 1].url);
    } else {
      setActiveImage(productDisplayImages[0]?.url);
    }
  }, [productDisplayImages, originialImageArrayLength]);

  const handlePreviewImageClick = (image: ProductImage) => {
    const index = productDisplayImages.indexOf(image);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setActiveImage(image.url);
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
    const imageUrl = productDisplayImages[swiper.activeIndex].url;
    setActiveImage(imageUrl);
    setIsBeginning(swiper.activeIndex === 0);
    setIsEnd(swiper.activeIndex === productDisplayImages.length - 1);
  };

  return (
    <div className="w-full lg:w-[45%] h-[60vh] lg:h-[80vh] space-y-4 ">
      <div className="h-full lg:h-[85%] w-full ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSwiperSlideChange}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="h-full w-full relative"
          ref={swiperRef}
        >
          {productDisplayImages.map((image: ProductImage) => {
            return (
              <SwiperSlide key={image.url} className="h-full w-full relative">
                <Image
                  src={image.url}
                  fill
                  alt={image.alt}
                  className="bg-neutralGray object-contain lg:object-cover "
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
      <div className="w-full hidden lg:block">
        <div className="h-full w-full flex gap-6">
          {productDisplayImages.map((image) => {
            const isActive = activeImage === image.url;
            return (
              <div
                key={image.url}
                className="h-[120px] w-[120px] relative"
                onClick={() => handlePreviewImageClick(image)}
              >
                <Image
                  src={image.url}
                  fill
                  alt={image.alt}
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
