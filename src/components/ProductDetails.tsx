import { Minus, Plus } from "lucide-react";
import AddToWishlistButton from "./AddToWishlistButton";
import ColorPicker from "./ColorPicker";
import ProductRating from "./ProductRating";
import SaleCountdown from "./SaleCountdown";
import { Button } from "./ui/button";

const ProductDetails = ({
  colorVariants,
}: {
  colorVariants: {
    color: string;
    unitAvailable: number;
    previewImageUrl: string;
  }[];
}) => {
  return (
    <div className="w-[55%] space-y-4 relative">
      {/* reviews */}
      <div className="flex gap-3 items-center">
        <ProductRating />
        <p>11 Reviews</p>
      </div>

      {/* details */}
      <h1 className="font-poppins text-5xl">Tray Table</h1>
      <p className="text-lg text-blackishGray font-[400]">
        Buy one or buy a few and make every space where you sit more convenient.
        Light and easy to move around with removable tray top, handy for serving
        snacks.
      </p>
      <p className="font-poppins text-3xl">
        $199.00{" "}
        <span className="text-xl line-through text-blackishGray">$400.00</span>
      </p>

      {/* countdown */}
      <div className=" border-[#E8ECEF] py-6 my-6 absolute md:block left-[65%] top-[35%] -translate-y-[50%]">
        <p className="text-lg text-[#343839] mb-3">Offer expires in:</p>
        <SaleCountdown />
      </div>

      {/* measurements */}
      <div className="space-y-2 py-4">
        <h4 className="font-semibold text-lg text-blackishGray">
          Measurements
        </h4>
        <p className="text-xl font-[400]">17 1/2x20 5/8 &apos;&apos;</p>
      </div>

      {/* color picker */}
      <ColorPicker colorVariants={colorVariants} />

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
          <p>1117</p>
        </div>
        <div className="flex">
          <p className="min-w-[140px] uppercase text-muted-foreground">
            Category
          </p>
          <p>Living Room, Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
