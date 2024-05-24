import { create } from "zustand";
import { SwiperRef } from "swiper/react";

interface Store {
  productDisplayImages: string[];
  swiperRef: any;
  updateProductDisplayImages: (newProductDisplayImages: string[]) => void;
  setSwiperRef: (swiperRef: any) => void;
}

const useStore = create<Store>((set) => ({
  productDisplayImages: [],
  swiperRef: null,
  updateProductDisplayImages: (newProductDisplayImages) =>
    set(() => {
      if (newProductDisplayImages.length > 5) {
        newProductDisplayImages.splice(4, 1);
      }
      return {
        productDisplayImages: newProductDisplayImages,
      };
    }),
  setSwiperRef: (swiperRef) =>
    set(() => {
      return {
        swiperRef: swiperRef,
      };
    }),
}));

export default useStore;
