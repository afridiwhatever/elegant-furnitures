import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  // Mock product data (replace with your actual data fetching logic)
  const products = [
    { id: "1", name: "Product 1", description: "Description of Product 1" },
    { id: "2", name: "Product 2", description: "Description of Product 2" },
  ];

  const product = products.find((product) => product.id === productId);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
