"use client";
import useStore from "@/store/store";
import { ProductImage } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ProductColorVariant } from "@/types";

const ColorPicker = ({
  colorVariants,
}: {
  colorVariants: ProductColorVariant[];
}) => {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]?.color);

  // bring in state imagesForProductCarousel array and setter function to update as required, also the swiper div to change slide
  const imagesForProductCarousel = useStore(
    (state) => state.imagesForProductCarousel
  );
  const setImagesForProductCarousel = useStore(
    (state) => state.setImagesForProductCarousel
  );
  const swiperRef = useStore((state) => state.swiperRef);

  const handleColorPickerImageClick = (
    color: string,
    preview_image: ProductImage
  ) => {
    setSelectedColor(color);
    setImagesForProductCarousel([...imagesForProductCarousel, preview_image]);
    if (swiperRef?.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(
        swiperRef.current.swiper.slides.length - 1
      );
    }
  };
  return (
    <div className="space-y-2">
      <div className="flex gap-1 items-center text-blackishGray">
        <p className="font-semibold text-lg ">Choose Color</p>
        <ChevronRight className="h-5 w-5" />
      </div>
      <div className="flex gap-4">
        {colorVariants.map(({ color, stock_quantity, preview_image }) => {
          const isSelected = selectedColor === color;
          return (
            <div className="max-w-max space-y-1" key={color}>
              <p
                className={`text-sm font-[400] max-w-max mx-auto ${
                  isSelected ? "" : "invisible"
                }`}
              >
                {color}
              </p>
              <div className="h-[96px] w-[96px] relative">
                <Image
                  onClick={() => {
                    handleColorPickerImageClick(color, preview_image);
                  }}
                  src={preview_image.url}
                  fill
                  alt={preview_image.alt}
                  className={`object-contain border  hover:cursor-pointer ${
                    stock_quantity > 0 ? "" : "opacity-30"
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
  );
};

export default ColorPicker;
