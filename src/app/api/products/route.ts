import { NextRequest, NextResponse } from "next/server";
import products from "@/products";
import { Product, ProductCategory } from "@/types";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag");
  // const category = searchParams.get("category");

  if (tag) {
    const filteredProducts = products.filter((product) => product.tag === tag);
    return NextResponse.json(filteredProducts);
  }

  // if (category) {
  //   const filteredProducts = products.filter(
  //     (product) => product.category.label === category
  //   );
  //   return NextResponse.json(filteredProducts);
  // }

  const getCategories = (): ProductCategory[] => {
    const categoryMap = new Map<string, ProductCategory>();
    products.forEach((product) => {
      if (product.category && !categoryMap.has(product.category.label)) {
        categoryMap.set(product.category.label, product.category);
      }
    });
    return Array.from(categoryMap.values());
  };

  const allCategories = getCategories();

  return NextResponse.json({ products, allCategories });
}
