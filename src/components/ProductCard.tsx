import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";
import ProductRating from "./ProductRating";
import { Button } from "./ui/button";
import { getRatingAndReviewCount } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  context: "list" | "grid";
}
const ProductCard = ({ product, context }: ProductCardProps) => {
  let discountPercent = 0;
  if (product.discounted_price) {
    discountPercent = Math.ceil(
      ((product.price - product.discounted_price) / product.price) * 100
    );
  }

  const { averageRating, numberOfReviews } = getRatingAndReviewCount(
    product.reviews
  );

  return (
    <div className="relative hover:cursor-pointer group rounded-md p-2 border border-transparent transition-all duration-150 hover:border-black hover:bg-slate-100 hover:shadow-lg">
      {/* image and button */}
      <div className="relative overflow-hidden rounded-md w-full">
        <div
          className={`relative ${
            context === "grid"
              ? "pb-[115%]"
              : "w-[230px] h-[310px] lg:w-[320px] lg:h-[400px]"
          }  bg-neutralGray rounded-lg overflow-hidden`}
        >
          <Image
            src={product.images[0].url}
            fill
            alt={product.images[0].alt}
            className="object-cover"
          />
          <Image
            src={product.images[1].url}
            fill
            alt={product.images[1].alt}
            className="opacity-0 invisible group-hover:opacity-100 group-hover:visible object-cover transition-all duration-300"
          />
          <div className="absolute z-10 w-full h-10 bottom-16">
            <div className="w-[80%] mx-auto transition-all duration-200 opacity-0 translate-y-[100%] group-hover:opacity-100 group-hover:translate-y-0 space-y-2">
              <Link href={`/product/${product.id}`}>
                <Button
                  className="w-full border border-black rounded-md bg-zinc-100 hover:bg-zinc-200"
                  variant={"ghost"}
                >
                  View Details
                </Button>
              </Link>
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* discount panel - absolute */}
        {product.discounted_price && (
          <p className="bg-orange-500 rounded-sm px-2 py-1 text-white text-xs font-thin font-spaceGrotesk absolute top-2 left-2 tracking-wider">
            -{discountPercent}%
          </p>
        )}

        {/* tag panel - absolute */}
        {product.tag && (
          <p className=" bg-purple-700 text-sm text-white rounded-tr-lg font-spaceGrotesk font-thin px-2 absolute bottom-0 z-1">
            {product.tag}
          </p>
        )}

        {/* favorite button - absolute */}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-xl transition-all duration-200 hover:cursor-pointer hover:scale-110 opacity-0 -translate-y-[60%] group-hover:opacity-100 group-hover:translate-y-0">
          <AddToWishlistButton useCase="product_card" />
        </div>
      </div>

      <Link
        href={`/product/${product.id}`}
        className="text-xs text-muted-foreground hover:underline"
      >
        +More Options
      </Link>
      {/* details */}
      <Link
        href={`/product/${product.id}`}
        className="flex flex-col gap-1 mt-1 "
      >
        <h4 className="text-base lg:text-lg tracking-tight">{product.name}</h4>
        {product.discounted_price ? (
          <div className="flex gap-2 items-center ">
            <p>${product.discounted_price}</p>
            <p className="text-muted-foreground text-sm  line-through font-medium">
              ${product.price}
            </p>
          </div>
        ) : (
          <p className="text-lg ">${product.price}</p>
        )}
        <div className="flex gap-1 items-center">
          <ProductRating
            rating={averageRating}
            size={12}
            color="lightgray"
            activeColor="black"
          />
          <span className="block font-[300] text-sm tracking-wider">
            ({numberOfReviews})
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
