import products from "@/products";
import { NextRequest, NextResponse } from "next/server";
import { getFilteringCriteria } from "./routeUtils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  if (Object.keys(searchParams).length === 0) {
    console.log("initial req, no search param");
  }

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

  return NextResponse.json({ products: filteredProducts, filteringCriteria });
}
