"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBagIcon,
  SearchIcon,
  UserIcon,
  ChevronDown,
  BurgerIcon,
} from "../../public/icons/Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Cross } from "lucide-react";

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <MaxWidthWrapper className="font-spaceGrotesk">
      <nav className="flex justify-between py-4 items-center relative">
        <div className="flex items-center">
          <BurgerIcon
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link href="/">
            <Image
              src="/glaciergear_logo.png"
              height={40}
              width={180}
              alt="logo"
            />
          </Link>
        </div>
        {/* mobile items */}
        {isMenuOpen && (
          <div
            className={cn(
              "bg-blue-400 h-screen w-[50%] absolute -top-[5%] transition-all duration-300 animate-in -left-[12%] slide-in-from-left-[100%]"
            )}
          >
            <ul className="flex flex-col gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li
                className="flex items-center"
                onClick={() => {
                  setIsShopDropdownOpen(!isShopDropdownOpen);
                  setIsProductDropdownOpen(false);
                }}
              >
                <span>Shop</span>
                <ChevronDown
                  className={cn("transition-all duration-300", {
                    "rotate-180 ": isShopDropdownOpen,
                  })}
                />
                {isShopDropdownOpen && (
                  <div className="absolute animate-in duration-300 slide-in-from-top-5  w-[80%] h-[400px] bg-blue-300 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
                )}
              </li>
              <li
                className="flex items-center"
                onClick={() => {
                  setIsProductDropdownOpen(!isProductDropdownOpen);
                  setIsShopDropdownOpen(false);
                }}
              >
                <span>Product</span>
                <ChevronDown
                  className={cn("transition-all duration-300", {
                    "rotate-180 ": isProductDropdownOpen,
                  })}
                />
                {isProductDropdownOpen && (
                  <div className="absolute animate-in duration-300 slide-in-from-top-5  w-[80%] h-[400px] bg-green-300 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
                )}
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            <Cross
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 h-7 w-7 border border-zinc-900 rounded-full"
            />
          </div>
        )}

        {/* desktop items */}
        <ul className="hidden lg:flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li
            className="flex items-center"
            onClick={() => {
              setIsShopDropdownOpen(!isShopDropdownOpen);
              setIsProductDropdownOpen(false);
            }}
          >
            <span>Shop</span>
            <ChevronDown
              className={cn("transition-all duration-300", {
                "rotate-180 ": isShopDropdownOpen,
              })}
            />
            {isShopDropdownOpen && (
              <div className="absolute animate-in duration-300 slide-in-from-top-5  w-[80%] h-[400px] bg-blue-300 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
            )}
          </li>
          <li
            className="flex items-center"
            onClick={() => {
              setIsProductDropdownOpen(!isProductDropdownOpen);
              setIsShopDropdownOpen(false);
            }}
          >
            <span>Product</span>
            <ChevronDown
              className={cn("transition-all duration-300", {
                "rotate-180 ": isProductDropdownOpen,
              })}
            />
            {isProductDropdownOpen && (
              <div className="absolute animate-in duration-300 slide-in-from-top-5   w-[80%] h-[400px] bg-green-300 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
            )}
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        {/* right side items */}
        <div className="flex gap-4">
          <SearchIcon className="hidden lg:block" />
          <UserIcon className="hidden lg:block" />
          <ShoppingBagIcon />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
