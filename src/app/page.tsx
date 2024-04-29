import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper className="">
        <HeroSectionSlider />
        <About />
        <Categories />
        <NewArrivals />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
