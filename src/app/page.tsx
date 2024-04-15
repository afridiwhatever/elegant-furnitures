import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section className="w-full flex ">
      <div className="relative min-w-[50%] aspect-square">
        <Image src="/Paste Image.jpg" fill alt="paste image" />
      </div>

      <div className="bg-[#171D28] pl-12 min-w-[50%] gap-2 flex flex-col justify-center text-white">
        <h1 className="font-while text-5xl">Bring the warmth.</h1>
        <p className="font-thin">
          Everyone needs a good winter jacket. Find yours with our collection
          and more.
        </p>
        <Button className="px-12 py-3 max-w-max mt-2">Shop Now!</Button>
      </div>
    </section>
  );
};

export default HomePage;
