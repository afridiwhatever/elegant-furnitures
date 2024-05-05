"use client";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BurgerIcon,
  ChevronDown,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "../../public/icons/Icons";
import DiscountPanel from "./DiscountPanel";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";

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
    <header className="w-full fixed top-0 z-10 bg-white">
      {isDiscountPanelShowing && (
        <DiscountPanel setIsDiscountPanelShowing={setIsDiscountPanelShowing} />
      )}

      <MaxWidthWrapper className="font-spaceGrotesk ">
        <nav className="flex justify-between py-4 items-center " ref={navRef}>
          <div className="flex items-center gap-3">
            <BurgerIcon
              className="lg:hidden cursor-pointer -mt-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <Link href="/">
              <Image src="/3legant..png" height={24} width={105} alt="logo" />
            </Link>
          </div>
          <MobileNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isShopDropdownOpen={isShopDropdownOpen}
            setIsShopDropdownOpen={setIsShopDropdownOpen}
            isProductDropdownOpen={isProductDropdownOpen}
            setIsProductDropdownOpen={setIsProductDropdownOpen}
            pathname={pathname}
          />
          <ul className="hidden lg:flex gap-10 pt-3 font-medium">
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
