"use client";
import useStore from "@/store/store";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ColorPicker = ({
  colorVariants,
}: {
  colorVariants: {
    color: string;
    availability_status: string;
    stock_quantity: number;
    preview_image: {
      url: string;
      alt: string;
    };
  }[];
}) => {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0].color);

  const productDisplayImages = useStore((state) => state.productDisplayImages);

  const updateProductDisplayImages = useStore(
    (state) => state.updateProductDisplayImages
  );
  const swiperRef = useStore((state) => state.swiperRef);

  const handleColorPickerImageClick = (
    color: string,
    preview_image: {
      url: string;
      alt: string;
    }
  ) => {
    setSelectedColor(color);
    updateProductDisplayImages([...productDisplayImages, preview_image]);

    setTimeout(() => {
      if (swiperRef?.current && swiperRef.current.swiper) {
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
        {colorVariants.map(({ color, stock_quantity, preview_image }) => {
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
                    handleColorPickerImageClick(color, preview_image);
                  }}
                  src={preview_image.url}
                  fill
                  alt="color-black"
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
