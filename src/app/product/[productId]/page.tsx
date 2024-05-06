import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Breadcrumb from "@/components/Breadcrumb";
import { convertToSlug } from "@/lib/utils";
import ProductShowcase from "@/components/ProductShowcase";

const product = {
  id: 1117,
  name: "Black table",
  category: "Living Room",
  price: 400,
};

const productImages = {
  image1: "/products/black-tray-table/black-tray-table.png",
  image2: "/products/black-tray-table/black-tray-table-2.jpg",
  image3: "/products/black-tray-table/black-tray-table-3.jpg",
  image4: "/products/black-tray-table/black-tray-table-4.jpg",
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
        <ProductShowcase productImages={productImages} />
      </MaxWidthWrapper>
    </>
  );
};

export default ProductPage;
