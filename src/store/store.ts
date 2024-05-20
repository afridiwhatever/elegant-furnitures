import { create } from "zustand";

const useStore = create((set) => ({
  productDisplayImages: [],
  swiperRef: null,
  setSwiper: (swiperRef: any) =>
    set(() => {
      return {
        swiperRef: swiperRef,
      };
    }),
  updateProductDisplayImages: (newProductDisplayImaages: any) =>
    set(() => {
      if (newProductDisplayImaages.length > 5) {
        newProductDisplayImaages.splice(4, 1);
      }
      return {
        productDisplayImages: newProductDisplayImaages,
      };
    }),
}));

export default useStore;
