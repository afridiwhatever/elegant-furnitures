"use client";

import { ChevronRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartIcon, HeartIconFilled } from "../../public/icons/Icons";
import ProductRating from "./ProductRating";
import SaleCountdown from "./SaleCountdown";
import { Button } from "./ui/button";

interface ProductShowcaseProps {
  images: string[];
  colorVariants: {
    color: string;
    unitAvailable: number;
    previewImageUrl: string;
  }[];
}

const ProductShowcase = ({ images, colorVariants }: ProductShowcaseProps) => {
  const swiperRef = useRef<any>(null);
  const [selectedColor, setSelectedColor] = useState(colorVariants[0].color);
  const [productImages, setProductImages] = useState(images);
  const [isFavorite, setIsFavorite] = useState(false);
  // dont want this to change because the side preview of images should be the same (4 images) and not include the preview of color varints
  const productImagesForPreview = [...images];
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleAddedToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const handlePreviewImageClick = (imageUrl: string) => {
    const index = productImages.indexOf(imageUrl);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setActiveImage(imageUrl);
  };

  const handleColorPickerImageClick = (
    color: string,
    previewImageUrl: string
  ) => {
    setSelectedColor(color);
    setProductImages((prev) => {
      if (prev.length > productImagesForPreview.length) {
        prev.splice(-1, 1);
      }
      return [...prev, previewImageUrl];
    });
    setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(
          swiperRef.current.swiper.slides.length - 1
        );
      }
    }, 20);
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
    <div className="flex gap-12 ">
      {/* left section - image */}
      <div className="w-[45%] h-[80vh] space-y-4">
        <div className="h-[85%] w-full ">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              const imageUrl = productImages[swiper.activeIndex];
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
            {productImages.map((imageUrl) => {
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
            {productImages.map((imageUrl) => {
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
      {/* right section - details */}
      <div className="w-[55%] space-y-4 relative">
        {/* reviews */}

        <div className="flex gap-3 items-center">
          <ProductRating />
          <p>11 Reviews</p>
        </div>

        {/* details */}
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
        {/* countdown */}
        <div className=" border-[#E8ECEF] py-6 my-6 absolute md:block left-[65%] top-[35%] -translate-y-[50%]">
          <p className="text-lg text-[#343839] mb-3">Offer expires in:</p>
          <SaleCountdown />
        </div>
        {/* measurements */}
        <div className="space-y-2 py-4">
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
            {colorVariants.map(({ color, unitAvailable, previewImageUrl }) => {
              const isSelected = selectedColor === color;
              return (
                <div className="max-w-max space-y-4" key={color}>
                  <p
                    className={`text-xl font-[400] max-w-max mx-auto ${
                      isSelected ? "" : "invisible"
                    }`}
                  >
                    {color}
                  </p>
                  <div className="h-[96px] w-[96px] relative">
                    <Image
                      onClick={() => {
                        handleColorPickerImageClick(color, previewImageUrl);
                      }}
                      src={previewImageUrl}
                      fill
                      alt="color-black"
                      className={`object-contain border  hover:cursor-pointer ${
                        unitAvailable > 0 ? "" : "opacity-30"
                      }
                        ${isSelected ? "border-black" : ""}
                        `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* quantity, wishlist adding to cart */}
        <div className="py-8 space-y-4 border-b border-neutralGray">
          <div className="flex gap-6">
            <div className="bg-neutralGray rounded-lg max-w-max flex items-center gap-6 px-4 py-3">
              <Minus
                className="h-4 w-4 hover:cursor-pointer"
                onClick={() => {}}
              />
              <p>1</p>
              <Plus
                className="h-4 w-4 hover:cursor-pointer"
                onClick={() => {}}
              />
            </div>
            <Button className="w-full py-6 text-lg font-[400]">
              Add to Cart
            </Button>
          </div>

          <Button
            onClick={handleAddedToFavorites}
            className="flex-grow w-full py-4 border border-black"
            variant="ghost"
          >
            {!isFavorite ? <HeartIcon /> : <HeartIconFilled />}

            <span className="text-lg ml-2">Wishlist</span>
          </Button>
        </div>
        {/* SKU and category */}
        <div className="py-2 space-y-2 font-[400]">
          <div className="flex">
            <p className="min-w-[140px] uppercase text-muted-foreground">SKU</p>
            <p>1117</p>
          </div>
          <div className="flex">
            <p className="min-w-[140px] uppercase text-muted-foreground">
              Category
            </p>
            <p>Living Room, Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
