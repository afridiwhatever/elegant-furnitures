import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Brands from "@/components/Brands";

const HomePage = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row">
        <div className="relative min-w-[50%] aspect-square">
          <Image src="/Paste Image.jpg" fill alt="paste image" />
        </div>

        <div className="bg-[#171D28] pl-12 w-full gap-2 flex flex-col justify-center text-white">
          <h1 className="font-while text-7xl pt-8 lg:pt-0">
            Bring the <br /> warmth.
          </h1>
          <p className="font-thin text-lg">
            Everyone needs a good winter jacket. <br /> Find yours with our
            collection and more.
          </p>
          <Button className="px-12 py-3 max-w-max mt-2 mb-8 lg:mb-0">
            Shop Now!
          </Button>
        </div>
      </section>
      <Brands />
    </>
  );
};

export default HomePage;
