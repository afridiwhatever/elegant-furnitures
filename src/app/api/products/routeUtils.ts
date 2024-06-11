import { Product, ProductCategory, ProductColorVariant } from "@/types";

export const getFilteringCriteria = (products: Product[]) => {
  // categories
  const categoryMap = new Map<string, ProductCategory>();
  products.forEach((product) => {
    if (product.category && !categoryMap.has(product.category.label)) {
      categoryMap.set(product.category.label, product.category);
    }
  });
  const categories = Array.from(categoryMap.values());

  // price range
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));
  const priceRange = {
    minPrice,
    maxPrice,
  };

  // colors
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
  const colors = Array.from(colorMap.values()).sort();

  return {
    categories,
    priceRange,
    colors,
  };
};
