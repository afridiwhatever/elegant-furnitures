"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X, Search } from "lucide-react";
import Image from "next/image";
import { HeartIcon, ShoppingBagIcon } from "../../public/icons/Icons";
import { Button } from "./ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<boolean>;
  isShopDropdownOpen: boolean;
  setIsShopDropdownOpen: React.Dispatch<boolean>;
  isProductDropdownOpen: boolean;
  setIsProductDropdownOpen: React.Dispatch<boolean>;
  pathname: string;
}

const MobileNav = ({
  isMenuOpen,
  setIsMenuOpen,
  isShopDropdownOpen,
  setIsShopDropdownOpen,
  isProductDropdownOpen,
  setIsProductDropdownOpen,
  pathname,
}: MobileNavProps) => {
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <div
      className={cn(
        "bg-white fixed overflow-y-scroll inset-0 min-h-screen w-[90%] lg:hidden top-0 left-0 p-8 transition-transform transform duration-300 -translate-x-full flex flex-col justify-between",
        {
          "translate-x-0": isMenuOpen,
        }
      )}
    >
      {/* menu items */}
      <div className="space-y-6">
        <div className="flex justify-between">
          <Image src={"/3legant..png"} height={24} width={90} alt="logo" />
          {/* @ts-ignore */}
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
          <li className="relative border-b py-4 border-b-[#E8ECEF]">
            <div className="flex justify-between">
              <Link href={"/shop"}>Shop</Link>
              <ChevronDown
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className={cn("transition-all duration-300", {
                  "rotate-180 ": isShopDropdownOpen,
                })}
              />
            </div>

            <div
              className={cn(
                "w-full h-60 transition-all duration-300 max-h-0 overflow-hidden",
                {
                  "max-h-[250px]": isShopDropdownOpen,
                }
              )}
            >
              <div className="h-full w-full border border-black"></div>
            </div>
          </li>
          <li className="relative border-b py-4 border-b-[#E8ECEF]">
            <div className="flex justify-between">
              <Link href={"/products"}>Product</Link>
              <ChevronDown
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className={cn("transition-all duration-300", {
                  "rotate-180 ": isProductDropdownOpen,
                })}
              />
            </div>

            <div
              className={cn(
                "w-full h-60 transition-all duration-300 max-h-0 overflow-hidden",
                {
                  "max-h-[280px]": isProductDropdownOpen,
                }
              )}
            >
              <div className="h-full w-full border border-black"></div>
            </div>
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
