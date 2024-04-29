import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/Features";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper className="">
        <HeroSectionSlider />
        <About />
        <Categories />
        <NewArrivals />
        <Features />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
