import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductDetails from "@/components/ProductDetails";
import ProductShowcase from "@/components/ProductShowcaseCarousel";
import ProductAuxiliaryInfo from "@/components/ProductAuxiliraryInfo";
import NewsLetter from "@/components/NewsLetter";
import { convertToSlug } from "@/lib/utils";
import { Product } from "@/types";
import { notFound } from "next/navigation";
import ProductReel from "@/components/ProductReel";

async function fetchProduct(productId: string) {
  const res = await fetch(`http://localhost:3000/api/products/${productId}`);
  const data = await res.json();
  return data;
}
const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = (await fetchProduct(params.productId)) as Product;

  // @ts-expect-error
  if (product.message) {
    return notFound();
  }

  const BreadcrumbElements = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    {
      name: product.category.value,
      href: `/shop/${convertToSlug(product.category.label)}`,
    },
    {
      name: "Product",
      href: `/product/${convertToSlug(product.id + " " + product.name)}`,
    },
  ];

  return (
    <main>
      <div
        className="w-full h-[1px] border-t border-neutralGray"
        aria-hidden
      ></div>
      <MaxWidthWrapper>
        {/* <Breadcrumb BreadcrumbElements={BreadcrumbElements} /> */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
          <ProductShowcase productImages={product.images} />
          <ProductDetails product={product} />
        </div>
        <ProductAuxiliaryInfo
          productReviews={product.reviews}
          productQuestionAnswers={product.questions_answers}
          productAdditionalInfo={product.additionalInfo}
        />
        <ProductReel tag="new" />
      </MaxWidthWrapper>
      <NewsLetter />
    </main>
  );
};

export default ProductPage;
