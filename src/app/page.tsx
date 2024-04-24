import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSectionSlider />
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
