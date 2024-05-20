"use client";
import React, { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import Image from "next/image";
import useStore from "@/store/store";

const ColorPicker = ({
  colorVariants,
}: {
  colorVariants: {
    color: string;
    unitAvailable: number;
    previewImageUrl: string;
  }[];
}) => {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0].color);
  // @ts-expect-error
  const { swiperRef, productDisplayImages, updateProductDisplayImages } =
    useStore();

  const handleColorPickerImageClick = (
    color: string,
    previewImageUrl: string
  ) => {
    setSelectedColor(color);
    updateProductDisplayImages([...productDisplayImages, previewImageUrl]);

    setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(
          swiperRef.current.swiper.slides.length - 1
        );
      }
    }, 20);
  };
  return (
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
  );
};

export default ColorPicker;
