"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState, useEffect } from "react";

const Brands = () => {
  const [isOnDesktop, setIsOnDesktop] = useState(false);
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
      <MaxWidthWrapper>
        <h2 className="text-7xl bg-red-500">Desktop</h2>
      </MaxWidthWrapper>
    );
  } else {
    return (
      <MaxWidthWrapper>
        <h2 className="text-7xl bg-blue-500">Mobile</h2>
      </MaxWidthWrapper>
    );
  }
};

export default Brands;
