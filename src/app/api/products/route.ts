import { NextRequest, NextResponse } from "next/server";
import products from "@/products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag");

  // if (!tag) {
  //   return NextResponse.json(
  //     { error: "Tag query parameter is required" },
  //     { status: 400 }
  //   );
  // }

  if (tag) {
    const filteredProducts = products.filter((product) => product.tag === tag);
    return NextResponse.json(filteredProducts);
  }

  return NextResponse.json(products);
}
