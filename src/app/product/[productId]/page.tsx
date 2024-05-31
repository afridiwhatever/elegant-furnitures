import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductDetails from "@/components/ProductDetails";
import ProductShowcase from "@/components/ProductShowcase";
import ProductAuxiliaryInfo from "@/components/ProductAuxiliraryInfo";
import NewsLetter from "@/components/NewsLetter";
import { convertToSlug } from "@/lib/utils";

const product = {
  id: 1117,
  name: "Tray Table",
  category: "Living Room",
  originalPrice: 400,
  discountedPrice: 199,
  colorVariants: [
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
  productImages: [
    "/products/black-tray-table/black-tray-table.png",
    "/products/black-tray-table/black-tray-table-2.jpg",
    "/products/black-tray-table/black-tray-table-3.jpg",
    "/products/black-tray-table/black-tray-table-4.jpg",
  ],
  productReviews: [
    {
      reviewByUser: "Sofia Harvetz",
      userPicture: "/reviews/sofia.jpeg",
      rating: 4,
      reviewSummary: "It was decent",
      reviewDesc:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    },
    {
      reviewByUser: "Gary Nelson",
      userPicture: "/reviews/gary.png",
      rating: 5,
      reviewSummary: "The perfect table!",
      reviewDesc:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    },
    {
      reviewByUser: "Neil Cavannaugh",
      userPicture: "/reviews/neil.png",
      rating: 3.5,
      reviewSummary: "The material could be better!",
      reviewDesc:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    },
  ],
  productAdditionalInfo: [],
  productQuestions: [],
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <ProductShowcase images={product.productImages} />
          <ProductDetails colorVariants={product.colorVariants} />
        </div>
        <ProductAuxiliaryInfo
          productReviews={product.productReviews}
          productQuestions={product.productQuestions}
          productAdditionalInfo={product.productAdditionalInfo}
        />
      </MaxWidthWrapper>
      <NewsLetter />
      <div className="h-40 w-full bg-blue-300"></div>
    </>
  );
};

export default ProductPage;
