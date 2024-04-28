import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

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
  );
};

export default MobileNav;
