import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X, Search } from "lucide-react";
import Image from "next/image";
import { HeartIcon, ShoppingBagIcon } from "../../public/icons/Icons";
import { Button } from "./ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { ChevronDown } from "lucide-react";

const MobileNav = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<boolean>;
}) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div
      className={cn(
        "bg-white h-screen w-[95%] lg:hidden absolute inset-0 p-8 transition-transform transform duration-300 -translate-x-full flex flex-col justify-between",
        {
          "translate-x-0": isMenuOpen,
        }
      )}
    >
      {/* menu items */}
      <div className="space-y-6">
        <div className="flex justify-between">
          <Image src={"/3legant..png"} height={24} width={90} alt="logo" />
          <X onClick={() => setIsMenuOpen(false)} className="h-6 w-6 " />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 py-4 outline-none border border-black rounded-lg bg-transparent w-full"
          />
          <Search
            className="h-7 w-7 absolute top-[50%] left-2 -translate-y-[50%]"
            strokeWidth={1}
          />
        </div>
        <ul className="space-y-4 font-medium">
          <li className="border-b py-4 border-b-[#E8ECEF]">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b py-4 border-b-[#E8ECEF]">
            <div className="flex justify-between">
              <Link href={"/shop"}>Shop</Link>
              <ChevronDown
                onClick={() => setisOpen(!isOpen)}
                className={cn("transition-all duration-300", {
                  "rotate-180 ": false,
                })}
              />
            </div>

            {/* <div
              className={cn(
                "w-full h-60 bg-blue-300 transition-all duration-300 opacity-0 invisible  hidden",
                {
                  "translate-y-0 visible opacity-100 block": isOpen,
                },
                {
                  "translate-y-[40%]": !isOpen,
                }
              )}
            ></div> */}
            <div
              className={cn(
                "w-full h-60 bg-blue-300 transition-opacity transition-transform duration-400 hidden",

                {
                  "opacity-100 block translate-y-0": isOpen,
                  "opacity-0 hidden -translate-y-[2%]": !isOpen,
                }
              )}
            >
              {/* Dropdown content goes here */}
            </div>
          </li>
          <li className="border-b py-4 border-b-[#E8ECEF]">
            <Link href="/">Product</Link>
          </li>
          <li className="border-b py-4 border-b-[#E8ECEF]">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* cart and stuff */}
      <div className="space-y-4 text-lg">
        <Link href={"/cart"} className="flex justify-between border-b py-2">
          <p>Cart</p>
          <ShoppingBagIcon />
        </Link>
        <Link href={"/wishlist"} className="flex justify-between border-b py-2">
          <p>Wishlist</p>
          <HeartIcon />
        </Link>
        <Button className="w-full py-6 text-lg">Sign In</Button>
        <div className="flex gap-6 lg:order-3 lg:ml-auto">
          <Link href={"https://www.instagram.com"}>
            <Instagram className="h-6 w-6 " />
          </Link>
          <Link href={"https://www.facebook.com"}>
            <Facebook className="h-6 w-6 " />
          </Link>
          <Link href={"https://www.youtube.com"}>
            <Youtube className="h-6 w-6 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

{
}
