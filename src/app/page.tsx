import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import ShopNowButton from "@/components/ShopNowButton";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSectionSlider />
        <About />
        <Categories />
        <NewArrivals />
        <Features />
      </MaxWidthWrapper>
      {/* Sale section */}
      <div className="flex flex-col md:flex-row mt-10 ">
        <div className="w-full lg:w-[50%] relative aspect-square">
          <Image src="/sale.jpg" fill alt="sale" />
        </div>
        <div className="flex flex-col pl-8 lg:pl-16 min-w-[50%] justify-center pt-16 pb-16 lg:pb-0 lg:pt-0 bg-neutralGray">
          <div className="max-w-[310px] lg:max-w-[420px] space-y-4">
            <p className="font-bold text-base leading-4 text-customBlue">
              SALE UP TO 35% OFF
            </p>
            <p className="text-3xl lg:text-5xl font-poppins">
              HUNDREDS of New lower prices!
            </p>
            <p className="text-base lg:text-xl font[300] lg:font-[200] leading-8 mb-6">
              Its more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <ShopNowButton to="/shop" color="black" />
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        <Articles />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
