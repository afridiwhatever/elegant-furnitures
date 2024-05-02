import React from "react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = [
  {
    page: "Home",
    to: "/home",
  },
  {
    page: "Shop",
    to: "/shop",
  },
  {
    page: "Product",
    to: "/product",
  },

  {
    page: "Blog",
    to: "/blog",
  },
  {
    page: "Contact Us",
    to: "/contact-is",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#232627] text-[#FEFEFE] font-[200] w-full py-8">
      <MaxWidthWrapper>
        <div className="border-b border-b-[#6C7275]">
          <div className="flex flex-col gap-4 items-center">
            <Image src="/logo-white.png" height={24} width={105} alt="logo" />
            <div aria-hidden className="w-[24px] h-[2px] bg-[#6C7275]"></div>
            <p>Gift & Decoration Store</p>
          </div>
          <ul className="flex flex-col gap-8 py-10 lg:py-0 items-center">
            {footerLinks.map(({ page, to }) => {
              return (
                <li key={to}>
                  <Link href={to}>{page}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center py-6 gap-8">
          <div className="flex gap-6">
            <Instagram className="h-6 w-6" />
            <Facebook className="h-6 w-6" />
            <Youtube className="h-6 w-6" />
          </div>
          <div className="font-semibold text-sm">
            <Link className="mr-7" href={"/privacy-policy"}>
              Privacy Policy
            </Link>
            <Link href={"/terms-of-use"}>Terms of Use</Link>
          </div>
          <p>Copyright © 2024 3legant. All rights reserved</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
