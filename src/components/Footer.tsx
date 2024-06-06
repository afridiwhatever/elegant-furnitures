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
    <footer className="bg-[#232627] text-[#FEFEFE] font-[200] w-full py-8">
      <MaxWidthWrapper>
        <div className="border-b border-b-[#6C7275] lg:flex lg:justify-between lg:py-16">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
            <Link href={"/"}>
              <Image src="/logo-white.png" height={24} width={105} alt="logo" />
            </Link>

            <div
              aria-hidden
              className="w-[24px] h-[2px] lg:w-[1px] lg:h-[28px] bg-[#6C7275] "
            ></div>
            <p className="lg:-mt-1">Gift & Decoration Store</p>
          </div>
          <ul className="flex flex-col lg:flex-row gap-8 py-10 lg:py-0 items-center lg:-mt-1">
            {footerLinks.map(({ page, to }) => {
              return (
                <li key={to}>
                  <Link href={to}>{page}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row items-center py-6 gap-8">
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
          <div className="font-semibold text-sm lg:order-2">
            <Link className="mr-7" href={"/privacy-policy"}>
              Privacy Policy
            </Link>
            <Link href={"/terms-of-use"}>Terms of Use</Link>
          </div>
          <p className="lg:order-1">
            Copyright © 2024 3legant. All rights reserved
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
