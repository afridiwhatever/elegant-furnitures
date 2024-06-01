export interface ProductReview {
  reviewByUser: string;
  userPicture: string;
  rating: number;
  reviewSummary: string;
  reviewDesc: string;
}

export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  sku: string;
  price: number;
  discounted_price: number;
  currency: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  color_variants: Array<{
    color: string;
    availability_status: string;
    stock_quantity: number;
    preview_image: {
      url: string;
      alt: string;
    };
  }>;
  features: string[];
  images: Array<{
    url: string;
    alt: string;
  }>;
  videos: Array<{
    url: string;
    title: string;
  }>;
  additionalInfo: {
    weight: string;
    materials: string[];
    care_instructions: string;
    shipping_details: {
      shipping_weight: string;
      dimensions: {
        width: string;
        height: string;
        depth: string;
      };
      shipping_cost: number;
      estimated_delivery_time: string;
    };
    return_policy: string;
  };
  questions_answers: Array<{
    question: string;
    answer: string;
    asked_by: string;
    asked_on: string;
    answered_by: string;
    answered_on: string;
  }>;
  reviews: Array<{
    username: string;
    profile_image: string | null;
    rating: number;
    comment: string;
    review: string;
  }>;
  related_products: Array<{
    id: string;
    name: string;
    url: string;
  }>;
};
