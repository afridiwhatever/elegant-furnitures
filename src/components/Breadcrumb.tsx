import React from "react";
import Link from "next/link";
import { ChevronRight, Slash } from "lucide-react";

interface BreadcrumbElement {
  name: string;
  href: string;
}

const Breadcrumb = ({
  BreadcrumbElements,
}: {
  BreadcrumbElements: BreadcrumbElement[];
}) => {
  return (
    <ol className="flex gap-2 pb-0 font-light text-sm">
      {BreadcrumbElements.map((item, index) => {
        const isLastItem =
          index !== BreadcrumbElements.length - 1 ? false : true;
        return (
          <li
            key={item.href}
            className="flex items-center gap-1 text-[#605F5F]"
          >
            <Link href={item.href}>{item.name}</Link>
            {/* will need to update this to suit contexts like product and category page */}
            {/* {!isLastItem ? (
              <Slash
                strokeWidth={0.5}
                className="h-4 w-4 pt-1"
                limitingConeAngle={1}
              />
            ) : null} */}

            <Slash
              strokeWidth={0.65}
              className="h-4 w-4 py-0.5 mt-[1px]"
              limitingConeAngle={1}
            />
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumb;
