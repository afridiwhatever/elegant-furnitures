import React from "react";
import ProductCard from "./ProductCard";
import ShopNowButton from "./ShopNowButton";

const NewArrivals = () => {
  const products = [
    {
      name: "Loveseat Sofa",
      imageUrl: "/products/loveseat_sofa.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Table Lamp",
      imageUrl: "/products/lamp.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Beige Table Lamp",
      imageUrl: "/products/beige_table_lamp.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Bamboo Basket",
      imageUrl: "/products/bamboo_basket.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Toaster",
      imageUrl: "/products/toaster_nobg.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Loveseat Sofa",
      imageUrl: "/products/loveseat_sofa.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Table Lamp",
      imageUrl: "/products/lamp.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Beige Table Lamp",
      imageUrl: "/products/beige_table_lamp.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Bamboo Basket",
      imageUrl: "/products/bamboo_basket.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
    {
      name: "Toaster",
      imageUrl: "/products/toaster_nobg.png",
      originalPrice: 400,
      discountedPrice: 24,
      discountPercent: 50,
      isNew: true,
    },
  ];

  return (
    <div className="mt-12 ">
      <div className="flex justify-between items-end">
        <h2 className="font-poppins text-3xl lg:text-5xl">
          New <br /> Arrivals
        </h2>
        <div className="hidden md:block">
          <ShopNowButton
            to={"/products"}
            buttonText="More Products"
            color="black"
          />
        </div>
      </div>
      <div className="overflow-x-auto mt-10 flex gap-8 pb-6">
        {products.map((prod) => {
          return (
            <ProductCard
              key={prod.name}
              name={prod.name}
              imageUrl={prod.imageUrl}
              originalPrice={prod.originalPrice}
              discountedPrice={prod.discountedPrice}
              discountPercent={prod.discountPercent}
              isNew={prod.isNew}
            />
          );
        })}
      </div>
      <div className="mt-6 mb-6 block md:hidden">
        <ShopNowButton
          to={"/products"}
          buttonText="More Products"
          color="black"
        />
      </div>
    </div>
  );
};

export default NewArrivals;
