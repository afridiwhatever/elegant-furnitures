/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useStore from "@/store/store";
import { ProductImage } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductShowcaseCarousel = ({
  productImages,
}: {
  productImages: ProductImage[];
}) => {
  const swiperRef = useRef<any>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeImage, setActiveImage] = useState<undefined | string>(undefined);

  // bring values and setter functions from store
  const imagesForProductCarousel = useStore(
    (state) => state.imagesForProductCarousel
  );
  const setImagesForProductCarousel = useStore(
    (state) => state.setImagesForProductCarousel
  );
  const setOriginalImagesArrayLength = useStore(
    (state) => state.setOriginalImagesArrayLength
  );
  const setSwiperRef = useStore((state) => state.setSwiperRef);
  const originalImagesArrayLength = useStore(
    (state) => state.originalImagesArrayLength
  );

  // event handler functions
  const handlePreviewImageClick = (image: ProductImage) => {
    const index = imagesForProductCarousel.indexOf(image);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setActiveImage(image.url);
  };

  const handlePreviewImageKeyboardNavigation = (event: KeyboardEvent) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      switch (event.key) {
        case "ArrowLeft":
          swiperRef.current.swiper.slidePrev();
          break;
        case "ArrowRight":
          swiperRef.current.swiper.slideNext();
          break;
        default:
          // Do nothing for other keys
          break;
      }
    }
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
    const imageUrl = imagesForProductCarousel[swiper.activeIndex]?.url;
    setActiveImage(imageUrl);
    setIsBeginning(swiper.activeIndex === 0);
    setIsEnd(swiper.activeIndex === imagesForProductCarousel.length - 1);
  };

  // useEffect to update the images, imagesarraylength and swiper right away, also handle keyboard navigation
  useEffect(() => {
    setSwiperRef(swiperRef);
    // the length has to be set before updating the productImages bcoz of the way the logic is written in the store
    setOriginalImagesArrayLength(productImages.length);
    setImagesForProductCarousel(productImages);

    // to handle keyboard navigation
    document.addEventListener("keydown", handlePreviewImageKeyboardNavigation);
    return () => {
      document.removeEventListener(
        "keydown",
        handlePreviewImageKeyboardNavigation
      );
    };
  }, []);

  // this useeffect carries active image (border around image) logic
  useEffect(() => {
    if (imagesForProductCarousel.length > originalImagesArrayLength) {
      setActiveImage(
        imagesForProductCarousel[imagesForProductCarousel.length - 1]?.url
      );
    } else {
      setActiveImage(imagesForProductCarousel[0]?.url);
    }
  }, [imagesForProductCarousel]);

  return (
    <div className="w-full lg:w-[45%] h-[60vh] lg:h-[80vh] space-y-4 ">
      {/* main product image carousel */}
      <div className="h-full lg:h-[85%] w-full ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSwiperSlideChange}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          className="h-full w-full relative"
          ref={swiperRef}
        >
          {imagesForProductCarousel.map((image, index) => {
            return (
              <SwiperSlide
                key={image?.url! + index}
                className="h-full w-full relative"
              >
                <Image
                  src={image?.url || ""}
                  fill
                  alt={image?.alt || ""}
                  className="bg-neutralGray object-contain lg:object-cover"
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

      {/* preview image */}
      <div className="w-full hidden lg:block">
        <div className="h-full w-full flex gap-6">
          {imagesForProductCarousel.map((image, index) => {
            const isActive = activeImage === image?.url;
            return (
              <div
                key={image?.url! + index}
                className="h-[120px] w-[120px] relative"
                onClick={() => {
                  if (image) handlePreviewImageClick(image);
                }}
              >
                <Image
                  src={image?.url || ""}
                  fill
                  alt={image?.alt || ""}
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

export default ProductShowcaseCarousel;
