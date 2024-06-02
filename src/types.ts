export type ProductDimensions = {
  width: string;
  height: string;
  depth: string;
};

export type ProductColorVariant = {
  color: string;
  availability_status: string;
  stock_quantity: number;
  preview_image: {
    url: string;
    alt: string;
  };
};

export type ProductImage = {
  url: string;
  alt: string;
};

export type ProductVideo = {
  url: string;
  title: string;
};

export type ProductShippingDetails = {
  shipping_weight: string;
  dimensions: ProductDimensions;
  shipping_cost: number;
  estimated_delivery_time: string;
};

export type ProductAdditionalInfo = {
  weight: string;
  materials: string[];
  care_instructions: string;
  shipping_details: ProductShippingDetails;
  return_policy: string;
};

export type ProductQuestionAnswer = {
  question: string;
  answer: string;
  asked_by: string;
  asked_on: string;
  answered_by: string;
  answered_on: string;
};

export type ProductReview = {
  username: string;
  profile_image: string | null;
  rating: number;
  comment: string;
  review: string;
};

export type ProductRelatedProduct = {
  id: string;
  name: string;
  url: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  tag?: string;
  category: string;
  sale_end_date?: string;
  subcategory: string;
  brand: string;
  sku: string;
  price: number;
  discounted_price: number;
  currency: string;
  dimensions: ProductDimensions;
  color_variants: ProductColorVariant[];
  features: string[];
  images: ProductImage[];
  videos: ProductVideo[];
  additionalInfo: ProductAdditionalInfo;
  questions_answers: ProductQuestionAnswer[];
  reviews: ProductReview[];
  related_products: ProductRelatedProduct[];
};
