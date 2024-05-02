import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import About from "@/components/About";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import ShopNowButton from "@/components/ShopNowButton";
import Image from "next/image";
import { MailIcon } from "../../public/icons/Icons";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSectionSlider />
        <About />
        <Categories />
        <NewArrivals />
        <Features />
      </MaxWidthWrapper>
      {/* Sale section */}
      <div className="flex flex-col md:flex-row mt-10 ">
        <div className="w-full lg:w-[50%] relative aspect-square">
          <Image src="/sale.jpg" fill alt="sale" />
        </div>
        <div className="flex flex-col pl-8 lg:pl-16 min-w-[50%] justify-center pt-16 pb-16 lg:pb-0 lg:pt-0 bg-neutralGray">
          <div className="max-w-[310px] lg:max-w-[420px] space-y-4">
            <p className="font-bold text-base leading-4 text-customBlue">
              SALE UP TO 35% OFF
            </p>
            <p className="text-3xl lg:text-5xl font-poppins">
              HUNDREDS of New lower prices!
            </p>
            <p className="text-base lg:text-xl font[300] lg:font-[200] leading-8 mb-6">
              Its more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <ShopNowButton to="/shop" color="black" />
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        <Articles />
      </MaxWidthWrapper>
      {/* NewsLetter section */}
      <div className="relative mt-10 lg:mt-20 py-36 px-8 bg-neutralGray overflow-hidden">
        <h3 className="font-poppins text-3xl lg:text-5xl max-w-max mx-auto ">
          Join Our Newsletter
        </h3>
        <p className="max-w-max mx-auto mt-2 mb-8  lg:text-lg">
          Sign up for deals, new products and promotions
        </p>

        {/*TODO: make this a server action */}
        <form className="relative max-w-max mx-auto py-2.5 border-b border-zinc-400">
          <input
            type="email"
            className="placeholder-gray-500 pl-8 bg-transparent outline-none"
            placeholder="Email address"
          />
          <button type="button">Signup</button>
          <div className="absolute left-0 top-[50%] -translate-y-[50%]">
            <MailIcon />
          </div>
        </form>
        <div className="hidden lg:block absolute -left-[12%] -top-5 bottom-0 bg-[url('/bg/left-bg.png')] w-[25%] bg-center scale-110"></div>
        <div className="hidden lg:block absolute -right-[12%] -top-5 bottom-0 bg-[url('/bg/right-bg.png')] w-[25%] bg-left bg-cover scale-125"></div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
