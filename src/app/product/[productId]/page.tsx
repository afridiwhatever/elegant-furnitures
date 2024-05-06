import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductRating from "@/components/ProductRating";
import ProductShowcase from "@/components/ProductShowcase";
import SaleCountdown from "@/components/SaleCountdown";
import { convertToSlug } from "@/lib/utils";

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
        <div className="flex gap-12 h-[675px]">
          <div className="w-[50%] flex">
            <ProductShowcase productImages={productImages} />
          </div>
          <div className="w-[50%]">
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <ProductRating />
                <p>11 Reviews</p>
              </div>
              <h1 className="font-poppins text-5xl">Tray Table</h1>
              <p className="text-lg text-blackishGray font-[400]">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <p className="font-poppins text-3xl">
                $199.00{" "}
                <span className="text-xl line-through text-blackishGray">
                  $400.00
                </span>
              </p>
            </div>
            <div className="border-y border-[#E8ECEF] py-6 my-6">
              <p className="text-lg text-[#343839] mb-3">Offer expires in:</p>
              <SaleCountdown />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductPage;
