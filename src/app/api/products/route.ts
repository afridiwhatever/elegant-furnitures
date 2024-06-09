import products from "@/products";
import { ProductCategory, ProductColorVariant } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const getCategories = (): ProductCategory[] => {
    const categoryMap = new Map<string, ProductCategory>();
    products.forEach((product) => {
      if (product.category && !categoryMap.has(product.category.label)) {
        categoryMap.set(product.category.label, product.category);
      }
    });
    return Array.from(categoryMap.values());
  };
  const categories = getCategories();

  const getPriceRange = () => {
    const minPrice = Math.min(...products.map((product) => product.price));
    const maxPrice = Math.max(...products.map((product) => product.price));
    return {
      minPrice,
      maxPrice,
    };
  };
  const priceRange = getPriceRange();

  const getColors = () => {
    const colorVariantArray: ProductColorVariant[] = products.flatMap(
      (product) => {
        return product.color_variants;
      }
    );

    const colorMap = new Map<string, string>();
    colorVariantArray.forEach((variant) => {
      if (!colorMap.has(variant.color)) {
        colorMap.set(variant.color, variant.color);
      }
    });
    return Array.from(colorMap.values());
  };

  const colors = getColors();

  const filteringCriteria = {
    categories,
    priceRange,
    colors,
  };

  return NextResponse.json({ products, filteringCriteria });
}

// const { searchParams } = new URL(req.url);
// const tag = searchParams.get("tag");
// const category = searchParams.get("category");

// if (tag) {
//   const filteredProducts = products.filter((product) => product.tag === tag);
//   return NextResponse.json(filteredProducts);
// }

// if (category) {
//   const filteredProducts = products.filter(
//     (product) => product.category.label === category
//   );
//   return NextResponse.json({
//     product: filteredProducts,
//     allCategory: allCategories,
//   });
// }
