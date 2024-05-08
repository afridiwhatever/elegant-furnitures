import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductRating from "@/components/ProductRating";
import ProductShowcase from "@/components/ProductShowcase";
import SaleCountdown from "@/components/SaleCountdown";
import { convertToSlug } from "@/lib/utils";

const product = {
  id: 1117,
  name: "Tray Table",
  category: "Living Room",
  price: 400,
  stock: [
    {
      color: "Black",
      unitAvailable: 5,
      previewImageUrl: "/products/black-tray-table/colors/black.jpg",
    },
    {
      color: "Beige",
      unitAvailable: 5,
      previewImageUrl: "/products/black-tray-table/colors/beige.jpg",
    },
    {
      color: "Red",
      unitAvailable: 5,
      previewImageUrl: "/products/black-tray-table/colors/red.jpg",
    },
  ],
  showcaseImages: {
    image1: "/products/black-tray-table/black-tray-table.png",
    image2: "/products/black-tray-table/black-tray-table-2.jpg",
    image3: "/products/black-tray-table/black-tray-table-3.jpg",
    image4: "/products/black-tray-table/black-tray-table-4.jpg",
  },
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
        <ProductShowcase
          productImg={product.showcaseImages}
          stock={product.stock}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default ProductPage;

{
  /* <div className="flex gap-12 h-[675px]">
          <div className="w-[50%] flex">
    
          </div>
          <div className="w-[50%]">

          </div>
        </div> */
}
