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
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import DiscountPanel from "./DiscountPanel";

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiscountPanelShowing, setIsDiscountPanelShowing] = useState(true);
  const pathname = usePathname();

  const navRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useOnClickOutside(navRef, () => {
    setIsProductDropdownOpen(false);
    setIsShopDropdownOpen(false);
  });
  return (
    <header className="w-full fixed z-10">
      {isDiscountPanelShowing && (
        <DiscountPanel setIsDiscountPanelShowing={setIsDiscountPanelShowing} />
      )}

      <MaxWidthWrapper className="font-spaceGrotesk">
        <nav
          className="flex justify-between py-4 items-center bg-white"
          ref={navRef}
        >
          <div className="flex items-center gap-3">
            <BurgerIcon
              className="lg:hidden cursor-pointer -mt-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <Link href="/">
              <Image src="/3legant..png" height={24} width={105} alt="logo" />
            </Link>
          </div>

          {/* mobile menu */}
          <div
            className={cn(
              "bg-zinc-100 h-screen w-[45%] lg:hidden absolute inset-0 pt-24 transition-transform transform duration-300 -translate-x-full",
              {
                "translate-x-0": isMenuOpen,
              }
            )}
          >
            <ul className="flex flex-col gap-10 max-w-max mx-auto">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            <X
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 h-6 w-6 border border-zinc-900 rounded-full"
            />
          </div>

          {/* desktop items */}
          <ul className="hidden lg:flex gap-10 pt-3">
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
                <div className="absolute animate-in duration-300 slide-in-from-top-5  w-[80%] h-[400px] bg-zinc-100 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
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
                <div className="absolute animate-in duration-300 slide-in-from-top-5  w-[80%] h-[400px] bg-zinc-100 left-[10%] right-[10%] top-[100%] rounded-lg"></div>
              )}
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>

          {/* right side items */}
          <div className="flex gap-4 pt-2">
            <SearchIcon className="hidden lg:block" />
            <UserIcon className="hidden lg:block" />
            <ShoppingBagIcon />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
