import { Minus, Plus } from "lucide-react";
import AddToWishlistButton from "./AddToWishlistButton";
import ColorPicker from "./ColorPicker";
import ProductRating from "./ProductRating";
import SaleCountdown from "./SaleCountdown";
import { Button } from "./ui/button";
import { Product } from "@/types";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="w-full lg:w-[55%] space-y-4 relative ">
      {/* reviews */}
      <div className="flex gap-3 items-center">
        <ProductRating />
        <p>11 Reviews</p>
      </div>

      {/* details */}
      <h1 className="font-poppins text-4xl lg:text-5xl">{product.name}</h1>
      <p className="text-base lg:text-lg text-blackishGray font-[400] ">
        {product.description}
      </p>
      <p className="font-poppins text-2xl lg:text-3xl">
        ${product.discounted_price}{" "}
        <span className="text-lg lg:text-xl line-through text-blackishGray">
          ${product.price}
        </span>
      </p>

      {/* countdown */}
      {product.sale_end_date && (
        <div className="border-y lg:border-none border-[#E8ECEF] py-6 my-6 lg:absolute right-1 top-[35%] lg:-translate-y-[50%] ">
          <p className="text-lg text-[#343839] mb-3">Offer expires in:</p>
          <SaleCountdown saleEndDate={product.sale_end_date} />
        </div>
      )}

      {/* measurements */}
      <div className="space-y-2 py-4">
        <h4 className="font-semibold text-lg text-blackishGray">
          Measurements
        </h4>
        {/* <p className="text-xl font-[400] flex">
          {product.dimensions.height} * {product.dimensions.width} *{" "}
          {product.dimensions.depth}
        </p> */}
      </div>

      {/* color picker */}
      <ColorPicker colorVariants={product.color_variants} />

      {/* quantity, wishlist adding to cart */}
      <div className="py-8 space-y-4 border-b border-neutralGray">
        <div className="flex gap-6">
          <div className="bg-neutralGray rounded-lg max-w-max flex items-center gap-6 px-4 py-3">
            <Minus className="h-4 w-4 hover:cursor-pointer" />
            <p>1</p>
            <Plus className="h-4 w-4 hover:cursor-pointer" />
          </div>
          <Button className="w-full py-6 text-lg font-[400]">
            Add to Cart
          </Button>
        </div>
        <AddToWishlistButton />
      </div>

      {/* SKU and category */}
      <div className="py-2 space-y-2 font-[400]">
        <div className="flex">
          <p className="min-w-[140px] uppercase text-muted-foreground">SKU</p>
          <p>{product.sku}</p>
        </div>
        <div className="flex">
          <p className="min-w-[140px] uppercase text-muted-foreground">
            Category
          </p>
          <p>
            {product.category}, {product.subcategory}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
