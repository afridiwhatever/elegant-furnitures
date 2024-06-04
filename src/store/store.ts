import { create } from "zustand";
import { ProductImage } from "@/types";

interface Store {
  imagesForProductCarousel: (ProductImage | null)[];
  setImagesForProductCarousel: (
    newProductDisplayImages: (ProductImage | null)[]
  ) => void;
  originalImagesArrayLength: number;
  swiperRef: any;
  setOriginalImagesArrayLength: (length: number) => void;
  setSwiperRef: (swiperRef: any) => void;
}

const useStore = create<Store>((set) => ({
  imagesForProductCarousel: [],
  originalImagesArrayLength: 0,
  swiperRef: null,
  setImagesForProductCarousel: (newProductDisplayImages) =>
    set((state) => {
      if (
        newProductDisplayImages.length - state.originalImagesArrayLength >
        1
      ) {
        newProductDisplayImages.splice(state.originalImagesArrayLength, 1);
      }
      return {
        imagesForProductCarousel: newProductDisplayImages,
      };
    }),
  setOriginalImagesArrayLength: (length: number) =>
    set(() => {
      return { originalImagesArrayLength: length };
    }),
  setSwiperRef: (swiperRef) =>
    set(() => {
      return {
        swiperRef: swiperRef,
      };
    }),
}));

export default useStore;
