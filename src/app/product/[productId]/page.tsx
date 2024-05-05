import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Breadcrumb from "@/components/Breadcrumb";
import { convertToSlug } from "@/lib/utils";

const product = {
  id: 1117,
  name: "Black table",
  category: "Living Room",
  price: 400,
};

const BreadcrumbElements = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: product.category, href: `/shop/${convertToSlug(product.category)}` },
  {
    name: "Product",
    href: `/product/${convertToSlug(product.id + " " + product.name)}`,
  },
];

const ProductPage = () => {
  return (
    <>
      <div
        className="w-full h-[1px] border-t border-neutralGray"
        aria-hidden
      ></div>
      <MaxWidthWrapper>
        <Breadcrumb BreadcrumbElements={BreadcrumbElements} />
      </MaxWidthWrapper>
    </>
  );
};

export default ProductPage;
