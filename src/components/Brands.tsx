"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState, useEffect } from "react";
import Image from "next/image";

const Brands = () => {
  const [isOnDesktop, setIsOnDesktop] = useState<Boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsOnDesktop(mediaQuery.matches);

    const handleResize = () => {
      console.log(mediaQuery.matches);
      setIsOnDesktop(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isOnDesktop) {
    return (
      <MaxWidthWrapper className="mt-10">
        <h2 className="text-xl max-w-max mx-auto mb-4 leading-8 font-semibold">
          Trending Brands
        </h2>

        <div className="flex gap-6">
          <Image
            src="/trending_logos/logo 01.png"
            height={64}
            width={167}
            alt="trending_logo"
          />
          <Image
            src="/trending_logos/logo 04.png"
            height={64}
            width={167}
            alt="trending_logo"
          />
          <Image
            src="/trending_logos/logo 01.png"
            height={64}
            width={167}
            alt="trending_logo"
          />
          <Image
            src="/trending_logos/logo 04.png"
            height={64}
            width={167}
            alt="trending_logo"
          />
          <Image
            src="/trending_logos/logo 01.png"
            height={64}
            width={167}
            alt="trending_logo"
          />
          <Image
            src="/trending_logos/logo 04.png"
            height={64}
            width={167}
            alt="trending_logo"
          />
        </div>
      </MaxWidthWrapper>
    );
  } else {
    return (
      <MaxWidthWrapper>
        <h2 className="text-7xl bg-blue-500 lg:hidden">Mobile</h2>
      </MaxWidthWrapper>
    );
  }
};

export default Brands;
