import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";
import ProductRating from "./ProductRating";
import { Button } from "./ui/button";
import { getRatingAndReviewCount } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  let discountPercent = 0;
  if (product.discounted_price) {
    discountPercent = Math.ceil(
      ((product.price - product.discounted_price) / product.price) * 100
    );
  }

  const { averageRating } = getRatingAndReviewCount(product);

  return (
    <div className="relative hover:cursor-pointer group rounded-md">
      {/* image and button */}
      <div className="relative overflow-hidden rounded-md">
        <div className="relative w-[230px] h-[310px] lg:w-[290px] lg:h-[360px] bg-neutralGray group-hover:border border-black rounded-lg overflow-hidden">
          <Image
            src={product.images[0].url}
            fill
            alt={product.images[0].alt}
            className="object-cover"
          />
          <div className="absolute z-10 w-full h-10 bottom-16">
            <div className="w-[80%] mx-auto transition-all duration-200 opacity-0 translate-y-[100%] group-hover:opacity-100 group-hover:translate-y-0 space-y-2">
              <Button
                className="w-full border border-black rounded-md bg-zinc-100 hover:bg-zinc-200"
                variant={"ghost"}
              >
                <Link href={`/product/${product.id}`}>View Details</Link>
              </Button>
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
          <p className=" bg-purple-700 text-sm text-white rounded-tr-lg font-spaceGrotesk font-thin px-2 absolute bottom-0 z-1 ">
            {product.tag}
          </p>
        )}

        {/* favorite button - absolute */}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-xl transition-all duration-200 hover:cursor-pointer hover:scale-110 opacity-0 -translate-y-[60%] group-hover:opacity-100 group-hover:translate-y-0">
          <AddToWishlistButton useCase="product_card" />
        </div>
      </div>

      {/* details */}
      <Link
        href={`product/${product.id}`}
        className="flex flex-col gap-1 font-semibold mt-3"
      >
        <ProductRating rating={averageRating} />
        <h4>{product.name}</h4>
        {product.discounted_price ? (
          <div className="flex gap-2 text-sm">
            <p>${product.discounted_price}</p>
            <p className="text-muted-foreground line-through font-medium">
              ${product.price}
            </p>
          </div>
        ) : (
          <p className="text-sm font-medium">${product.price}</p>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
