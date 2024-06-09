// import products from "@/products";
// import { ProductCategory, ProductColorVariant } from "@/types";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   console.log(searchParams);
//   const getCategories = (): ProductCategory[] => {
//     const categoryMap = new Map<string, ProductCategory>();
//     products.forEach((product) => {
//       if (product.category && !categoryMap.has(product.category.label)) {
//         categoryMap.set(product.category.label, product.category);
//       }
//     });
//     return Array.from(categoryMap.values());
//   };
//   const categories = getCategories();

//   const getPriceRange = () => {
//     const minPrice = Math.min(...products.map((product) => product.price));
//     const maxPrice = Math.max(...products.map((product) => product.price));
//     return {
//       minPrice,
//       maxPrice,
//     };
//   };
//   const priceRange = getPriceRange();

//   const getColors = () => {
//     const colorVariantArray: ProductColorVariant[] = products.flatMap(
//       (product) => {
//         return product.color_variants;
//       }
//     );

//     const colorMap = new Map<string, string>();
//     colorVariantArray.forEach((variant) => {
//       if (!colorMap.has(variant.color)) {
//         colorMap.set(variant.color, variant.color);
//       }
//     });
//     return Array.from(colorMap.values()).sort();
//   };

//   const colors = getColors();

//   const filteringCriteria = {
//     categories,
//     priceRange,
//     colors,
//   };

//   return NextResponse.json({ products, filteringCriteria });
// }

import products from "@/products";
import { ProductCategory, ProductColorVariant } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);

  // Parse categories and colors from searchParams
  const categoriesParam = searchParams.get("category");
  const colorsParam = searchParams.get("colors");

  const selectedCategories = categoriesParam ? categoriesParam.split(",") : [];
  const selectedColors = colorsParam ? colorsParam.split(",") : [];

  // Function to get all unique categories
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

  // Function to get the price range
  const getPriceRange = () => {
    const minPrice = Math.min(...products.map((product) => product.price));
    const maxPrice = Math.max(...products.map((product) => product.price));
    return {
      minPrice,
      maxPrice,
    };
  };
  const priceRange = getPriceRange();

  // Function to get all unique colors
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
    return Array.from(colorMap.values()).sort();
  };
  const colors = getColors();

  // Filter products based on the selected categories and colors
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      (product.category && selectedCategories.includes(product.category.label));
    const colorMatch =
      selectedColors.length === 0 ||
      product.color_variants.some((variant) =>
        selectedColors.includes(variant.color)
      );
    return categoryMatch && colorMatch;
  });

  const filteringCriteria = {
    categories,
    priceRange,
    colors,
  };

  return NextResponse.json({ products: filteredProducts, filteringCriteria });
}
