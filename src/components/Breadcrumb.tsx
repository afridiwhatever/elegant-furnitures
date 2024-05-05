import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/shop" },
  { id: 3, name: "Living Room", href: "/shop/living-room" },
  { id: 4, name: "Product", href: "/product/1117-black-table" },
];

const Breadcrumb = () => {
  return (
    <ol className="flex gap-4 py-4">
      {BREADCRUMBS.map((item, index) => {
        const isLastItem = index !== BREADCRUMBS.length - 1 ? false : true;
        return (
          <li
            key={item.href}
            className="flex items-center gap-2 text-[#605F5F]"
          >
            <Link
              href={item.href}
              className={`${isLastItem ? "font-semibold" : ""}`}
            >
              {item.name}
            </Link>
            {!isLastItem ? (
              <ChevronRight strokeWidth={1} className="h-4 w-4" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumb;

// Home - Shop - Living - Product
// Home - Shop - Kitchen - Product
// Home - Shop - Bedroom - Product

// Home - Shop

// Home - blog - how to do something
