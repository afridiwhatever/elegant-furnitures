import React from "react";
import { TicketIcon } from "../../public/icons/Icons";
import Link from "next/link";
import { ArrowRight } from "../../public/icons/Icons";
import { X } from "lucide-react";
const DiscountPanel = ({ setIsDiscountPanelShowing }: any) => {
  return (
    <div className="w-full h-10 bg-neutralGray flex gap-3 items-center justify-center  text-sm">
      <TicketIcon />
      <span>30% off storewide — Limited time! </span>
      <Link
        className="flex items-center border-b border-customBlue gap-1 text-customBlue"
        href="/shop"
      >
        Shop now
        <ArrowRight />
      </Link>
      <div className="absolute top-2.5 right-10">
        <X
          onClick={() => setIsDiscountPanelShowing(false)}
          className="h-5 w-5"
        />
      </div>
    </div>
  );
};

export default DiscountPanel;
