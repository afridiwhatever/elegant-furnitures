import type { Product } from "@/types";

export async function GET(request: Request) {
  return new Response("specific product");
}
