import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/Features";
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
      <div className="flex">
        <div className="h-[530px] w-[50%] relative">
          <Image src="/sale.jpg" fill alt="sale" />
        </div>
        <div>
          <p>SALE UP TO 35% OFF</p>
          <p>HUNDREDS of New lower prices!</p>
          <p>
            Its more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <ShopNowButton to="/shop" color="black" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
