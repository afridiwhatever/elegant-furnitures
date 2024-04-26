import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";
import Categories from "@/components/Categories";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSectionSlider />
        <About />
        <Categories />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
