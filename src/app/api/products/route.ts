import { NextRequest, NextResponse } from "next/server";
import { getFilteringCriteria } from "./routeUtils";
import { fetchProducts } from "@/products";

const cache = new Map();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const cacheKey = searchParams.toString();

  if (cache.has(cacheKey)) {
    console.log("returning cache response");
    const response = cache.get(cacheKey);
    return NextResponse.json(response);
  }

  const products = await fetchProducts();

  // Parse categories and colors from searchParams
  const categoriesParam = searchParams.get("category");
  const colorsParam = searchParams.get("colors");

  const selectedCategories = categoriesParam ? categoriesParam.split(",") : [];
  const selectedColors = colorsParam ? colorsParam.split(",") : [];

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

  const filteringCriteria = getFilteringCriteria(products);
  const response = { products: filteredProducts, filteringCriteria };

  cache.set(cacheKey, response);

  return NextResponse.json(response);
}
