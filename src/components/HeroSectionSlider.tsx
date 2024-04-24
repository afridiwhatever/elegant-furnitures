"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSectionSlider = () => {
  return (
    <Swiper
      className="w-full"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="relative h-[700px] w-full rounded-sm overflow-hidden">
          <Image
            src="/slideshow-1.jpeg"
            alt="slideshow-1"
            fill
            className="object-center lg:object-left-top"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[700px] w-full rounded-sm overflow-hidden">
          <Image
            src="/slideshow-1.jpeg"
            alt="slideshow-1"
            fill
            className="object-center lg:object-left-top"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[700px] w-full rounded-sm overflow-hidden">
          <Image
            src="/slideshow-1.jpeg"
            alt="slideshow-1"
            fill
            className="object-center lg:object-left-top"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSectionSlider;
