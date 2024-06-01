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
      reviewByUser: "Emily Johnson",
      userPicture: "/reviews/sofia.jpeg",
      rating: 4.5,
      reviewSummary: "Really good product",
      reviewDesc:
        "I've been using this product for a month now, and I'm quite satisfied with its performance. It exceeded my expectations in terms of quality and durability. Highly recommend it!",
    },
    {
      reviewByUser: "James Smith",
      userPicture: "/reviews/gary.png",
      rating: 2,
      reviewSummary: "Not worth the money",
      reviewDesc:
        "The product did not meet my expectations. It feels cheaply made and did not work as advertised. Would not recommend to others.",
    },
    {
      reviewByUser: "Laura Anderson",
      userPicture: "/reviews/neil.png",
      rating: 3.8,
      reviewSummary: "Decent but has flaws",
      reviewDesc:
        "The product is decent for its price, but there are some issues with the build quality. The material could be better, and the design has some flaws. However, it works fine overall.",
    },
    {
      reviewByUser: "Michael Brown",
      userPicture: "/reviews/sofia.jpeg",
      rating: 5,
      reviewSummary: "Absolutely fantastic!",
      reviewDesc:
        "This product is amazing! It works perfectly and has made my life so much easier. The quality is top-notch and it looks great. Will definitely buy again.",
    },
    {
      reviewByUser: "Rachel Davis",
      userPicture: "/reviews/gary.png",
      rating: 4,
      reviewSummary: "Very satisfied",
      reviewDesc:
        "I'm very satisfied with this purchase. The product works as described and is of good quality. It's been very useful for my needs.",
    },
    {
      reviewByUser: "Daniel Thompson",
      userPicture: "/reviews/neil.png",
      rating: 3.2,
      reviewSummary: "Average product",
      reviewDesc:
        "The product is average. It works, but there are better alternatives available. The material feels a bit cheap, but it gets the job done.",
    },
    {
      reviewByUser: "Sophia Martinez",
      userPicture: "/reviews/sofia.jpeg",
      rating: 4.7,
      reviewSummary: "Exceeded expectations",
      reviewDesc:
        "I didn't expect much at this price point, but this product really exceeded my expectations. It's well made and performs very well. Highly recommend!",
    },
    {
      reviewByUser: "William Johnson",
      userPicture: "/reviews/gary.png",
      rating: 4.3,
      reviewSummary: "Good value for money",
      reviewDesc:
        "This product offers great value for money. It's not perfect, but it's very good for the price. I'm happy with my purchase.",
    },
    {
      reviewByUser: "Emma Wilson",
      userPicture: "/reviews/neil.png",
      rating: 3.5,
      reviewSummary: "Could be better",
      reviewDesc:
        "The product is okay, but there are some issues with the design. It could be improved in several areas. It's functional, but not great.",
    },
    {
      reviewByUser: "David Garcia",
      userPicture: "/reviews/sofia.jpeg",
      rating: 4.1,
      reviewSummary: "Quite good",
      reviewDesc:
        "The product is quite good. It does what it's supposed to and feels solid. There are minor issues, but overall, I'm satisfied.",
    },
    {
      reviewByUser: "Olivia Lee",
      userPicture: "/reviews/gary.png",
      rating: 5,
      reviewSummary: "Best purchase ever!",
      reviewDesc:
        "This is the best purchase I've made in a long time. The product is of excellent quality and works flawlessly. I couldn't be happier with it.",
    },
    {
      reviewByUser: "Ethan Harris",
      userPicture: "/reviews/neil.png",
      rating: 2.8,
      reviewSummary: "Below expectations",
      reviewDesc:
        "The product did not live up to my expectations. The quality is not great, and it feels flimsy. I would not buy this again.",
    },
    {
      reviewByUser: "Mia Clark",
      userPicture: "/reviews/sofia.jpeg",
      rating: 4.6,
      reviewSummary: "Very happy with this product",
      reviewDesc:
        "I'm very happy with this product. It works well and is of high quality. I've had no issues with it so far. Highly recommend!",
    },
    {
      reviewByUser: "Noah Lewis",
      userPicture: "/reviews/gary.png",
      rating: 4.8,
      reviewSummary: "Excellent product",
      reviewDesc:
        "This product is excellent. It's well-made and works perfectly. I've been using it for a while now and have had no issues. Highly recommend to others.",
    },
    {
      reviewByUser: "Ava Walker",
      userPicture: "/reviews/neil.png",
      rating: 3.7,
      reviewSummary: "Good but not great",
      reviewDesc:
        "The product is good, but there are a few areas that could be improved. Overall, it works well and is a decent purchase for the price.",
    },
    {
      reviewByUser: "Alexander Robinson",
      userPicture: "/reviews/sofia.jpeg",
      rating: 3,
      reviewSummary: "It's okay",
      reviewDesc:
        "The product is just okay. It works, but there are better options out there. The quality is not great, and it feels a bit cheap.",
    },
    {
      reviewByUser: "Isabella King",
      userPicture: "/reviews/gary.png",
      rating: 4.2,
      reviewSummary: "Pretty good",
      reviewDesc:
        "This product is pretty good. It meets my needs and works as expected. There are a few minor issues, but overall, I'm happy with it.",
    },
    {
      reviewByUser: "Lucas Scott",
      userPicture: "/reviews/neil.png",
      rating: 3.3,
      reviewSummary: "Average quality",
      reviewDesc:
        "The product is of average quality. It works, but there are better options available. It feels a bit cheap and could be improved.",
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

async function fetchProduct(productId: number) {
  const res = await fetch(`http://localhost:3000/api/products/${productId}`);
  const data = await res.json();
  return data;
}
const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const products = await fetchProduct(parseInt(params.productId));
  console.log(products);
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
