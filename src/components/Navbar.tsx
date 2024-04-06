"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBagIcon,
  SearchIcon,
  UserIcon,
  ChevronDown,
} from "../../public/icons/Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState } from "react";

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between py-4 items-center relative">
        <Link href="/">
          <Image
            src="/glaciergear_logo.png"
            height={40}
            width={180}
            alt="logo"
          />
        </Link>

        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => {
              setIsShopDropdownOpen(!isShopDropdownOpen);
              setIsProductDropdownOpen(false);
            }}
          >
            <div className="flex items-center">
              <span>Shop</span>
              <ChevronDown />
            </div>
            {isShopDropdownOpen && (
              <div className="absolute animate-in duration-300 slide-in-from-top-5  w-[80%] h-[400px] bg-blue-300 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
            )}
          </li>
          <li
            onClick={() => {
              setIsProductDropdownOpen(!isProductDropdownOpen);
              setIsShopDropdownOpen(false);
            }}
          >
            <div className="flex items-center">
              <span>Product</span>
              <ChevronDown />
              {isProductDropdownOpen && (
                <div className="absolute animate-in duration-300 slide-in-from-top-5   w-[80%] h-[400px] bg-green-300 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
              )}
            </div>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <SearchIcon />
          <UserIcon />
          <ShoppingBagIcon />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
