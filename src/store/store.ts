import { create } from "zustand";
import { ProductImage } from "@/types";

interface Store {
  productDisplayImages: (ProductImage | null)[];
  imagesArrayLength: number;
  swiperRef: any;
  updateProductDisplayImages: (
    newProductDisplayImages: (ProductImage | null)[]
  ) => void;
  updateImagesArrayLength: (length: number) => void;
  setSwiperRef: (swiperRef: any) => void;
}

const useStore = create<Store>((set) => ({
  productDisplayImages: [],
  imagesArrayLength: 0,
  swiperRef: null,
  updateProductDisplayImages: (newProductDisplayImages) =>
    set((state) => {
      if (newProductDisplayImages.length - state.imagesArrayLength > 1) {
        newProductDisplayImages.splice(state.imagesArrayLength, 1);
      }
      return {
        productDisplayImages: newProductDisplayImages,
      };
    }),
  updateImagesArrayLength: (length: number) =>
    set(() => {
      return { imagesArrayLength: length };
    }),
  setSwiperRef: (swiperRef) =>
    set(() => {
      return {
        swiperRef: swiperRef,
      };
    }),
}));

export default useStore;
