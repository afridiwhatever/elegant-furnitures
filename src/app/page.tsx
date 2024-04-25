import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSectionSlider />
        <About />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
