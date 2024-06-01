import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductDetails from "@/components/ProductDetails";
import ProductShowcase from "@/components/ProductShowcase";
import ProductAuxiliaryInfo from "@/components/ProductAuxiliraryInfo";
import NewsLetter from "@/components/NewsLetter";
import { convertToSlug } from "@/lib/utils";
import { Product } from "@/types";

// const BreadcrumbElements = [
//   { name: "Home", href: "/" },
//   { name: "Shop", href: "/shop" },
//   { name: product.category, href: `/shop/${convertToSlug(product.category)}` },
//   {
//     name: "Product",
//     href: `/product/${convertToSlug(product.id + " " + product.name)}`,
//   },
// ];

async function fetchProduct(productId: number) {
  const res = await fetch(`http://localhost:3000/api/products/${productId}`);
  const data = await res.json();
  return data;
}
const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = (await fetchProduct(parseInt(params.productId))) as Product;

  const BreadcrumbElements = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    {
      name: product.category,
      href: `/shop/${convertToSlug(product.category)}`,
    },
    {
      name: "Product",
      href: `/product/${convertToSlug(product.id + " " + product.name)}`,
    },
  ];

  return (
    <>
      <div
        className="w-full h-[1px] border-t border-neutralGray"
        aria-hidden
      ></div>
      <MaxWidthWrapper>
        <Breadcrumb BreadcrumbElements={BreadcrumbElements} />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <ProductShowcase images={product.images} />
          <ProductDetails colorVariants={product.color_variants} />
        </div>
        <ProductAuxiliaryInfo
          productReviews={product.reviews}
          productQuestions={product.questions_answers}
          productAdditionalInfo={product.additionalInfo}
        />
      </MaxWidthWrapper>
      <NewsLetter />
      <div className="h-40 w-full bg-blue-300"></div>
    </>
  );
};

export default ProductPage;
