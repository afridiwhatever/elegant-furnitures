import { NextRequest, NextResponse } from "next/server";
import products from "@/products";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productId = parseInt(params.productId);

  const product = products.find((product) => product.id === productId);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json(
      { product: null, message: "Product not found" },
      { status: 404 }
    );
  }
}
