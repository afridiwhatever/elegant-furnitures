import { Product, ProductTag } from "@/types";
import ProductCard from "./ProductCard";
import ShopNowButton from "./ShopNowButton";

type ProductResponse = {
  products: Product[];
};

const ProductReel = async ({ tag }: { tag: ProductTag }) => {
  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:3000/api/products/?tag=${tag}`);
    const data: ProductResponse = await res.json();
    return data;
  };

  const { products } = await fetchProducts();

  const renderHeaderText = (tag: ProductTag) => {
    switch (tag) {
      case "new":
        return (
          <>
            New <br /> Arrivals
          </>
        );
      case "sale":
        return "On Sale";
      case "bestseller":
        return "Best Sellers";
      default:
        return "";
    }
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl lg:text-5xl ml-1">{renderHeaderText(tag)}</h2>
        <div className="hidden md:block">
          <ShopNowButton
            to={"/products"}
            buttonText="More Products"
            color="black"
          />
        </div>
      </div>
      <div className="overflow-x-auto mt-4 flex gap-2 pb-6">
        {products.map((prod) => {
          return <ProductCard key={prod.name} product={prod} context="list" />;
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

export default ProductReel;
