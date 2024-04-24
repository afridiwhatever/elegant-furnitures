"use client";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroSectionSlider = () => {
  const swiperRef = useRef<any>(null);

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
    <div className="relative rounded-lg overflow-hidden">
      <Swiper
        ref={swiperRef}
        className="w-full"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative h-[700px] w-full ">
            <Image
              src="/slideshow-1.jpg"
              alt="slideshow-1"
              fill
              className="object-center lg:object-left-top"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[700px] w-full ">
            <Image
              src="/slideshow-2.jpg"
              alt="slideshow-1"
              fill
              className="object-center lg:object-left-top"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[700px] w-full ">
            <Image
              src="/slideshow-3.jpeg"
              alt="slideshow-1"
              fill
              className="object-center lg:object-left-top"
            />
          </div>
        </SwiperSlide>
        <div className="absolute z-[1] inset-x-0 top-[50%] -translate-y-[50%] w-full flex justify-between px-6">
          <button
            className="h-10 w-10 rounded-full bg-white grid place-content-center p-2.5"
            onClick={handlePrev}
          >
            <ArrowLeft className="text-muted-foreground" />
          </button>

          <button
            className="h-10 w-10 rounded-full bg-white grid place-content-center p-2.5"
            onClick={handleNext}
          >
            <ArrowRight className="text-muted-foreground" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSectionSlider;
