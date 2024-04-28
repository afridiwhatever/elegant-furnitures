import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div>
      <div className="w-[300px]">
        <Image
          src="/products/loveseat_sofa.png"
          height={360}
          width={265}
          alt="loveseat_sofa_product"
        />
      </div>
      <span>Stars</span>
      <h4>Loveseat Sofa</h4>
      <p>$24.00</p>
    </div>
  );
};

export default ProductCard;
