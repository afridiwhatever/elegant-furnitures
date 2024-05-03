import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X, Search } from "lucide-react";
import Image from "next/image";

const MobileNav = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<boolean>;
}) => {
  return (
    <div
      className={cn(
        "bg-white h-screen w-[95%] lg:hidden absolute inset-0 p-8 transition-transform transform duration-300 -translate-x-full",
        {
          "translate-x-0": isMenuOpen,
        }
      )}
    >
      {/* menu items */}
      <div className="space-y-4">
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
        <ul className="space-y-4">
          <li className="border-b py-4 border-b-[#E8ECEF]">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b py-4 border-b-[#E8ECEF]">
            <Link href="/">Shop</Link>
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
      <div></div>
    </div>
  );
};

export default MobileNav;

{
}
