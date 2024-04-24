import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Brands from "@/components/Brands";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="relative h-[700px] w-full rounded-sm overflow-hidden">
          <Image
            src="/slideshow-1.jpeg"
            alt="slideshow-1"
            fill
            className="object-center lg:object-left-top"
          />
        </div>
      </MaxWidthWrapper>
      <Brands />
    </>
  );
};

export default HomePage;
