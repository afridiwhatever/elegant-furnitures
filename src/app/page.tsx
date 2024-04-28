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
        <div className="overflow-x-auto pb-5">
          <NewArrivals />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
