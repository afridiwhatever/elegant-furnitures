"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState, useEffect } from "react";

const Brands = () => {
  const [isOnDesktop, setIsOnDesktop] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsOnDesktop(true);

    const handleResize = () => {
      setIsOnDesktop(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
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
