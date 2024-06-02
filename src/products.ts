import type { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "Modern Tray Table",
    description:
      "A versatile modern tray table with a sleek design and durable materials.",
    category: "Living Room",
    subcategory: "Tables",
    tag: "New",
    brand: "FurnitureCo",
    sku: "TTB-MOD-2024-001",
    price: 129.99,
    discounted_price: 99.99,
    sale_end_date: new Date("2024-12-31T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "60 cm",
      height: "45 cm",
      depth: "40 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "In Stock",
        stock_quantity: 30,
        preview_image: {
          url: "/products/black-tray-table/colors/black.jpg",
          alt: "Modern Tray Table in Black",
        },
      },
      {
        color: "Beige",
        availability_status: "Limited Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/black-tray-table/colors/beige.jpg",
          alt: "Modern Tray Table in Beige",
        },
      },
      {
        color: "Red",
        availability_status: "In Stock",
        stock_quantity: 25,
        preview_image: {
          url: "/products/black-tray-table/colors/red.jpg",
          alt: "Modern Tray Table in Red",
        },
      },
    ],
    features: [
      "Foldable design",
      "Easy to clean surface",
      "Lightweight and portable",
    ],
    images: [
      {
        url: "/products/black-tray-table/black-tray-table.png",
        alt: "Modern Tray Table front view",
      },
      {
        url: "/products/black-tray-table/black-tray-table-2.jpg",
        alt: "Modern Tray Table side view",
      },
      {
        url: "/products/black-tray-table/black-tray-table-3.jpg",
        alt: "Modern Tray Table wide view",
      },
      {
        url: "/products/black-tray-table/black-tray-table-4.jpg",
        alt: "Modern Tray Table close view",
      },
    ],
    videos: [
      {
        url: "/products/black-tray-table/black-tray-table-2.jpg",
        title: "Modern Tray Table Features and Setup",
      },
    ],
    additionalInfo: {
      weight: "7 kg",
      materials: ["Wood", "Metal"],
      care_instructions:
        "Wipe clean with a damp cloth. Avoid using abrasive cleaners.",
      shipping_details: {
        shipping_weight: "8 kg",
        dimensions: {
          width: "65 cm",
          height: "50 cm",
          depth: "45 cm",
        },
        shipping_cost: 15.0,
        estimated_delivery_time: "3-5 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "What is the weight capacity of this tray table?",
        answer: "The tray table can hold up to 15 kg.",
        asked_by: "user123",
        asked_on: "2024-05-15",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-16",
      },
      {
        question: "Is the table foldable?",
        answer: "Yes, the table features a foldable design for easy storage.",
        asked_by: "sarah_jones",
        asked_on: "2024-05-18",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-19",
      },
    ],
    reviews: [
      {
        username: "Emily Johnson",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4.5,
        comment: "Really good product",
        review:
          "I've been using this product for a month now, and I'm quite satisfied with its performance. It exceeded my expectations in terms of quality and durability. Highly recommend it!",
      },
      {
        username: "John Doe",
        profile_image: "/reviews/gary.png",
        rating: 5,
        comment: "Very practical and looks great in my living room!",
        review:
          "This tray table is exactly what I needed. It's sturdy, looks good, and fits perfectly in my living room. Highly recommend!",
      },
      {
        username: "Jane Doe",
        profile_image: null,
        rating: 4,
        comment: "Good value for the price. Easy to set up.",
        review:
          "The tray table was easy to assemble and is of decent quality for the price. Would recommend for anyone needing a simple, functional table.",
      },
      {
        username: "Alice Smith",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Fantastic tray table! High quality and stylish.",
        review:
          "I am very impressed with the quality of this tray table. It looks very stylish and fits perfectly in my space. Great purchase!",
      },
      {
        username: "Bob Brown",
        profile_image: null,
        rating: 3,
        comment: "It's okay, but I expected better quality for the price.",
        review:
          "The table is functional, but I was hoping for a bit higher quality given the price. It's decent, but not outstanding.",
      },
      {
        username: "Charlie Davis",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4,
        comment: "Versatile and modern design. Happy with my purchase.",
        review:
          "The tray table has a modern look and is quite versatile. I use it in various rooms and it fits well everywhere. Good buy!",
      },
      {
        username: "Daniel Lee",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Sturdy and looks good. Perfect for my needs.",
        review:
          "This tray table is very sturdy and looks great. It's exactly what I was looking for and works perfectly for my needs.",
      },
      {
        username: "Emily Clark",
        profile_image: null,
        rating: 4,
        comment: "Nice table, but the assembly instructions could be clearer.",
        review:
          "The table is nice once assembled, but the instructions were a bit confusing. Took a bit longer to set up than expected.",
      },
      {
        username: "Frank Wright",
        profile_image: "/reviews/gary.png",
        rating: 4,
        comment: "Good quality for the price. I use it every day.",
        review:
          "This tray table is good quality for the price. I use it daily and it has held up well so far. Would recommend.",
      },
      {
        username: "Grace Hall",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Excellent product! Highly recommend.",
        review:
          "The tray table is excellent in both quality and design. Very happy with this purchase and would highly recommend it.",
      },
      {
        username: "Harry Young",
        profile_image: null,
        rating: 3,
        comment: "It's okay, but it wobbles a bit.",
        review:
          "The table looks nice, but it wobbles a bit which is a bit disappointing. Otherwise, it's an okay product.",
      },
      {
        username: "Irene King",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4,
        comment: "Pretty good table, fits well in my apartment.",
        review:
          "The table fits well in my apartment and is quite functional. Pretty good overall, though a bit pricey.",
      },
    ],
    related_products: [
      {
        id: "TTB-2024-002",
        name: "Modern Coffee Table",
        url: "https://example.com/products/TTB-2024-002",
      },
      {
        id: "TTB-2024-003",
        name: "Modern End Table",
        url: "https://example.com/products/TTB-2024-003",
      },
    ],
  },
  {
    id: 2,
    name: "Contemporary Coffee Table",
    description: "A sleek contemporary coffee table with a minimalist design.",
    category: "Living Room",
    subcategory: "Tables",
    brand: "FurnitureCo",
    sku: "CTB-MOD-2024-002",
    price: 199.99,
    discounted_price: 159.99,
    tag: "New",
    currency: "USD",
    dimensions: {
      width: "90 cm",
      height: "40 cm",
      depth: "50 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "In Stock",
        stock_quantity: 25,
        preview_image: {
          url: "/products/coffee_table/colors/coffee_table_black.webp",
          alt: "Contemporary Coffee Table in White",
        },
      },
      {
        color: "Vintage Brown",
        availability_status: "In Stock",
        stock_quantity: 30,
        preview_image: {
          url: "/products/coffee_table/colors/coffee_table_vintage_brown.webp",
          alt: "Contemporary Coffee Table in Vintage Brown",
        },
      },
      {
        color: "White Marbel",
        availability_status: "Limited Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/coffee_table/colors/coffee_table_white_marbel.webp",
          alt: "Contemporary Coffee Table in White Marbel",
        },
      },
    ],
    features: ["Minimalist design", "Durable materials", "Easy to clean"],
    images: [
      {
        url: "/products/coffee_table/coffee_table_1.webp",
        alt: "Contemporary Coffee Table front view",
      },
      {
        url: "/products/coffee_table/coffee_table_2.webp",
        alt: "Contemporary Coffee Table side view",
      },
      {
        url: "/products/coffee_table/coffee_table_3.webp",
        alt: "Contemporary Coffee Table top view",
      },
      {
        url: "/products/coffee_table/coffee_table_4.webp",
        alt: "Contemporary Coffee Table angled view",
      },
    ],
    videos: [
      {
        url: "/products/coffee-table/coffee-table-setup.mp4",
        title: "Contemporary Coffee Table Setup",
      },
    ],
    additionalInfo: {
      weight: "12 kg",
      materials: ["Wood", "Metal"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "14 kg",
        dimensions: {
          width: "95 cm",
          height: "45 cm",
          depth: "55 cm",
        },
        shipping_cost: 20.0,
        estimated_delivery_time: "4-6 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is assembly required?",
        answer: "Yes, simple assembly is required.",
        asked_by: "user456",
        asked_on: "2024-05-20",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-21",
      },
      {
        question: "Can this table hold heavy items?",
        answer: "Yes, it can hold up to 20 kg.",
        asked_by: "mike_r",
        asked_on: "2024-05-22",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-23",
      },
    ],
    reviews: [
      {
        username: "Sophia Wilson",
        profile_image: "/reviews/sophia.jpg",
        rating: 5,
        comment: "Great coffee table!",
        review:
          "This coffee table is perfect for my living room. Sturdy and stylish.",
      },
      {
        username: "Oliver Brown",
        profile_image: "/reviews/oliver.jpg",
        rating: 4,
        comment: "Good value",
        review: "Nice table for the price. Assembly was straightforward.",
      },
    ],
    related_products: [
      {
        id: "CTB-2024-003",
        name: "Modern Console Table",
        url: "https://example.com/products/CTB-2024-003",
      },
      {
        id: "CTB-2024-004",
        name: "Contemporary Side Table",
        url: "https://example.com/products/CTB-2024-004",
      },
    ],
  },
  {
    id: 3,
    name: "Rustic End Table",
    description: "A charming rustic end table made from reclaimed wood.",
    category: "Living Room",
    subcategory: "Tables",
    brand: "FurnitureCo",
    sku: "RTB-MOD-2024-003",
    tag: "New",
    price: 89.99,
    discounted_price: 69.99,
    sale_end_date: new Date("2024-07-31T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "50 cm",
      height: "55 cm",
      depth: "45 cm",
    },
    color_variants: [
      {
        color: "Natural",
        availability_status: "In Stock",
        stock_quantity: 40,
        preview_image: {
          url: "/products/rustic-end-table/colors/natural.jpg",
          alt: "Rustic End Table in Natural",
        },
      },
      {
        color: "Walnut",
        availability_status: "In Stock",
        stock_quantity: 25,
        preview_image: {
          url: "/products/rustic-end-table/colors/walnut.jpg",
          alt: "Rustic End Table in Walnut",
        },
      },
    ],
    features: ["Reclaimed wood", "Rustic design", "Durable construction"],
    images: [
      {
        url: "/products/rustic-end-table/rustic-end-table-front.jpg",
        alt: "Rustic End Table front view",
      },
      {
        url: "/products/rustic-end-table/rustic-end-table-side.jpg",
        alt: "Rustic End Table side view",
      },
    ],
    videos: [
      {
        url: "/products/rustic-end-table/rustic-end-table-setup.mp4",
        title: "Rustic End Table Assembly",
      },
    ],
    additionalInfo: {
      weight: "8 kg",
      materials: ["Reclaimed Wood"],
      care_instructions: "Wipe with a dry cloth. Avoid moisture.",
      shipping_details: {
        shipping_weight: "10 kg",
        dimensions: {
          width: "55 cm",
          height: "60 cm",
          depth: "50 cm",
        },
        shipping_cost: 12.0,
        estimated_delivery_time: "3-5 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is the wood treated?",
        answer: "Yes, the wood is treated for durability.",
        asked_by: "user789",
        asked_on: "2024-05-25",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-26",
      },
      {
        question: "Is it suitable for outdoor use?",
        answer: "No, it's designed for indoor use.",
        asked_by: "anna_m",
        asked_on: "2024-05-27",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-28",
      },
    ],
    reviews: [
      {
        username: "Liam Harris",
        profile_image: "/reviews/liam.jpg",
        rating: 4.5,
        comment: "Beautiful and sturdy",
        review:
          "This end table looks beautiful and is very sturdy. Great addition to my living room.",
      },
      {
        username: "Emma Green",
        profile_image: "/reviews/emma.jpg",
        rating: 5,
        comment: "Perfect rustic touch",
        review:
          "Exactly what I wanted. Adds a perfect rustic touch to my decor.",
      },
    ],
    related_products: [
      {
        id: "RTB-2024-005",
        name: "Rustic Coffee Table",
        url: "https://example.com/products/RTB-2024-005",
      },
      {
        id: "RTB-2024-006",
        name: "Rustic Console Table",
        url: "https://example.com/products/RTB-2024-006",
      },
    ],
  },
  {
    id: 4,
    name: "Vintage Nightstand",
    description: "A vintage nightstand with classic details and ample storage.",
    category: "Bedroom",
    subcategory: "Nightstands",
    tag: "New",
    brand: "FurnitureCo",
    sku: "NTB-MOD-2024-004",
    price: 149.99,
    discounted_price: 119.99,
    currency: "USD",
    dimensions: {
      width: "55 cm",
      height: "60 cm",
      depth: "45 cm",
    },
    color_variants: [
      {
        color: "Mahogany",
        availability_status: "In Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/nightstand/colors/mahogany.jpg",
          alt: "Vintage Nightstand in Mahogany",
        },
      },
      {
        color: "Oak",
        availability_status: "In Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/nightstand/colors/oak.jpg",
          alt: "Vintage Nightstand in Oak",
        },
      },
    ],
    features: ["Classic design", "Two drawers", "High-quality wood"],
    images: [
      {
        url: "/products/nightstand/nightstand-front.jpg",
        alt: "Vintage Nightstand front view",
      },
      {
        url: "/products/nightstand/nightstand-side.jpg",
        alt: "Vintage Nightstand side view",
      },
      {
        url: "/products/nightstand/nightstand-open.jpg",
        alt: "Vintage Nightstand with drawers open",
      },
    ],
    videos: [
      {
        url: "/products/nightstand/nightstand-setup.mp4",
        title: "Vintage Nightstand Setup",
      },
    ],
    additionalInfo: {
      weight: "10 kg",
      materials: ["Wood"],
      care_instructions: "Wipe with a dry cloth.",
      shipping_details: {
        shipping_weight: "12 kg",
        dimensions: {
          width: "60 cm",
          height: "65 cm",
          depth: "50 cm",
        },
        shipping_cost: 18.0,
        estimated_delivery_time: "4-6 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "How many drawers does it have?",
        answer: "It has two drawers.",
        asked_by: "user987",
        asked_on: "2024-05-29",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-30",
      },
      {
        question: "Is it made from solid wood?",
        answer: "Yes, it's made from high-quality solid wood.",
        asked_by: "laura_s",
        asked_on: "2024-05-31",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-01",
      },
    ],
    reviews: [
      {
        username: "Ava Moore",
        profile_image: "/reviews/ava.jpg",
        rating: 5,
        comment: "Beautiful nightstand",
        review:
          "The nightstand is beautiful and very well made. Perfect for my bedroom.",
      },
      {
        username: "Mason White",
        profile_image: "/reviews/mason.jpg",
        rating: 4,
        comment: "Nice quality",
        review: "Good quality nightstand. The drawers slide smoothly.",
      },
    ],
    related_products: [
      {
        id: "NTB-2024-005",
        name: "Vintage Dresser",
        url: "https://example.com/products/NTB-2024-005",
      },
      {
        id: "NTB-2024-006",
        name: "Vintage Bed Frame",
        url: "https://example.com/products/NTB-2024-006",
      },
    ],
  },
  {
    id: 5,
    name: "Modern Desk",
    description: "A modern desk with a spacious work surface and clean lines.",
    category: "Office",
    subcategory: "Desks",
    brand: "FurnitureCo",
    sku: "DSK-MOD-2024-005",
    price: 249.99,
    discounted_price: 199.99,
    currency: "USD",
    dimensions: {
      width: "120 cm",
      height: "75 cm",
      depth: "60 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "In Stock",
        stock_quantity: 50,
        preview_image: {
          url: "/products/desk/colors/black.jpg",
          alt: "Modern Desk in Black",
        },
      },
      {
        color: "White",
        availability_status: "In Stock",
        stock_quantity: 45,
        preview_image: {
          url: "/products/desk/colors/white.jpg",
          alt: "Modern Desk in White",
        },
      },
    ],
    features: ["Spacious work surface", "Clean lines", "Durable construction"],
    images: [
      {
        url: "/products/desk/desk-front.jpg",
        alt: "Modern Desk front view",
      },
      {
        url: "/products/desk/desk-side.jpg",
        alt: "Modern Desk side view",
      },
    ],
    videos: [
      {
        url: "/products/desk/desk-setup.mp4",
        title: "Modern Desk Assembly",
      },
    ],
    additionalInfo: {
      weight: "20 kg",
      materials: ["Metal", "Wood"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "22 kg",
        dimensions: {
          width: "125 cm",
          height: "80 cm",
          depth: "65 cm",
        },
        shipping_cost: 25.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is the desk height adjustable?",
        answer: "No, the desk height is fixed.",
        asked_by: "user654",
        asked_on: "2024-06-01",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-02",
      },
      {
        question: "Does it have cable management?",
        answer: "Yes, it includes cable management features.",
        asked_by: "james_k",
        asked_on: "2024-06-03",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-04",
      },
    ],
    reviews: [
      {
        username: "Isabella Martinez",
        profile_image: "/reviews/isabella.jpg",
        rating: 4.5,
        comment: "Great desk",
        review:
          "The desk is spacious and well-made. Perfect for my home office.",
      },
      {
        username: "Liam Thompson",
        profile_image: "/reviews/liam.jpg",
        rating: 5,
        comment: "Very functional",
        review: "This desk is very functional and looks great in my office.",
      },
    ],
    related_products: [
      {
        id: "DSK-2024-006",
        name: "Modern Office Chair",
        url: "https://example.com/products/DSK-2024-006",
      },
      {
        id: "DSK-2024-007",
        name: "Modern Bookshelf",
        url: "https://example.com/products/DSK-2024-007",
      },
    ],
  },
  {
    id: 6,
    name: "Elegant Dining Table",
    description: "An elegant dining table with a glass top and sturdy legs.",
    category: "Dining Room",
    tag: "New",
    subcategory: "Tables",
    brand: "FurnitureCo",
    sku: "DTB-MOD-2024-006",
    price: 299.99,
    discounted_price: 249.99,
    currency: "USD",
    dimensions: {
      width: "150 cm",
      height: "75 cm",
      depth: "90 cm",
    },
    color_variants: [
      {
        color: "Glass",
        availability_status: "In Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/dining-table/colors/glass.jpg",
          alt: "Elegant Dining Table with Glass Top",
        },
      },
    ],
    features: ["Glass top", "Sturdy legs", "Elegant design"],
    images: [
      {
        url: "/products/dining-table/dining-table-front.jpg",
        alt: "Elegant Dining Table front view",
      },
      {
        url: "/products/dining-table/dining-table-side.jpg",
        alt: "Elegant Dining Table side view",
      },
    ],
    videos: [
      {
        url: "/products/dining-table/dining-table-setup.mp4",
        title: "Elegant Dining Table Setup",
      },
    ],
    additionalInfo: {
      weight: "25 kg",
      materials: ["Glass", "Metal"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "28 kg",
        dimensions: {
          width: "155 cm",
          height: "80 cm",
          depth: "95 cm",
        },
        shipping_cost: 30.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is the glass tempered?",
        answer: "Yes, the glass is tempered for safety.",
        asked_by: "user321",
        asked_on: "2024-06-05",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-06",
      },
      {
        question: "Can it seat six people?",
        answer: "Yes, it comfortably seats six people.",
        asked_by: "julia_b",
        asked_on: "2024-06-07",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-08",
      },
    ],
    reviews: [
      {
        username: "Charlotte Taylor",
        profile_image: "/reviews/charlotte.jpg",
        rating: 5,
        comment: "Beautiful table",
        review: "The table is beautiful and fits perfectly in my dining room.",
      },
      {
        username: "Ethan Anderson",
        profile_image: "/reviews/ethan.jpg",
        rating: 4,
        comment: "Sturdy and elegant",
        review: "Very sturdy and elegant design. Happy with my purchase.",
      },
    ],
    related_products: [
      {
        id: "DTB-2024-007",
        name: "Elegant Dining Chairs",
        url: "https://example.com/products/DTB-2024-007",
      },
      {
        id: "DTB-2024-008",
        name: "Elegant Sideboard",
        url: "https://example.com/products/DTB-2024-008",
      },
    ],
  },
  {
    id: 7,
    name: "Comfort Recliner",
    description: "A plush recliner offering maximum comfort and relaxation.",
    category: "Living Room",
    tag: "New",
    subcategory: "Seating",
    brand: "FurnitureCo",
    sku: "REC-COM-2024-007",
    price: 399.99,
    discounted_price: 349.99,
    currency: "USD",
    dimensions: {
      width: "90 cm",
      height: "100 cm",
      depth: "80 cm",
    },
    color_variants: [
      {
        color: "Gray",
        availability_status: "In Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/recliner/colors/gray.jpg",
          alt: "Comfort Recliner in Gray",
        },
      },
      {
        color: "Blue",
        availability_status: "In Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/recliner/colors/blue.jpg",
          alt: "Comfort Recliner in Blue",
        },
      },
    ],
    features: ["Plush padding", "Reclining mechanism", "Durable upholstery"],
    images: [
      {
        url: "/products/recliner/recliner-front.jpg",
        alt: "Comfort Recliner front view",
      },
      {
        url: "/products/recliner/recliner-side.jpg",
        alt: "Comfort Recliner side view",
      },
      {
        url: "/products/recliner/recliner-recline.jpg",
        alt: "Comfort Recliner reclined position",
      },
    ],
    videos: [
      {
        url: "/products/recliner/recliner-setup.mp4",
        title: "Comfort Recliner Assembly",
      },
    ],
    additionalInfo: {
      weight: "30 kg",
      materials: ["Fabric", "Metal"],
      care_instructions: "Spot clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "35 kg",
        dimensions: {
          width: "95 cm",
          height: "105 cm",
          depth: "85 cm",
        },
        shipping_cost: 40.0,
        estimated_delivery_time: "6-8 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is the recliner electric or manual?",
        answer: "It has a manual reclining mechanism.",
        asked_by: "user123",
        asked_on: "2024-06-09",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-10",
      },
      {
        question: "Does it come assembled?",
        answer: "No, minimal assembly is required.",
        asked_by: "mike_d",
        asked_on: "2024-06-11",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-12",
      },
    ],
    reviews: [
      {
        username: "Sophia Lewis",
        profile_image: "/reviews/sophia.jpg",
        rating: 4.5,
        comment: "Super comfortable",
        review:
          "The recliner is super comfortable and perfect for my living room.",
      },
      {
        username: "Logan Wilson",
        profile_image: "/reviews/logan.jpg",
        rating: 4,
        comment: "Good value",
        review:
          "Good value for money. The recliner is well-made and comfortable.",
      },
    ],
    related_products: [
      {
        id: "REC-2024-008",
        name: "Comfort Sofa",
        url: "https://example.com/products/REC-2024-008",
      },
      {
        id: "REC-2024-009",
        name: "Comfort Ottoman",
        url: "https://example.com/products/REC-2024-009",
      },
    ],
  },
  {
    id: 8,
    name: "Classic Bookshelf",
    description:
      "A classic bookshelf with ample storage space for books and decor.",
    category: "Office",
    tag: "New",
    subcategory: "Storage",
    brand: "FurnitureCo",
    sku: "BSH-CLA-2024-008",
    price: 199.99,
    discounted_price: 159.99,
    currency: "USD",
    dimensions: {
      width: "80 cm",
      height: "180 cm",
      depth: "30 cm",
    },
    color_variants: [
      {
        color: "Brown",
        availability_status: "In Stock",
        stock_quantity: 25,
        preview_image: {
          url: "/products/bookshelf/colors/brown.jpg",
          alt: "Classic Bookshelf in Brown",
        },
      },
      {
        color: "White",
        availability_status: "Limited Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/bookshelf/colors/white.jpg",
          alt: "Classic Bookshelf in White",
        },
      },
    ],
    features: ["Ample storage space", "Sturdy construction", "Classic design"],
    images: [
      {
        url: "/products/bookshelf/bookshelf-front.jpg",
        alt: "Classic Bookshelf front view",
      },
      {
        url: "/products/bookshelf/bookshelf-side.jpg",
        alt: "Classic Bookshelf side view",
      },
      {
        url: "/products/bookshelf/bookshelf-shelves.jpg",
        alt: "Classic Bookshelf shelves",
      },
    ],
    videos: [
      {
        url: "/products/bookshelf/bookshelf-setup.mp4",
        title: "Classic Bookshelf Assembly",
      },
    ],
    additionalInfo: {
      weight: "22 kg",
      materials: ["Wood"],
      care_instructions: "Dust regularly with a dry cloth.",
      shipping_details: {
        shipping_weight: "25 kg",
        dimensions: {
          width: "85 cm",
          height: "185 cm",
          depth: "35 cm",
        },
        shipping_cost: 28.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "How many shelves does it have?",
        answer: "It has five shelves.",
        asked_by: "user456",
        asked_on: "2024-06-13",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-14",
      },
      {
        question: "Is the shelf height adjustable?",
        answer: "Yes, the shelf height is adjustable.",
        asked_by: "emma_k",
        asked_on: "2024-06-15",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-16",
      },
    ],
    reviews: [
      {
        username: "Amelia Baker",
        profile_image: "/reviews/amelia.jpg",
        rating: 4,
        comment: "Sturdy and spacious",
        review:
          "The bookshelf is sturdy and provides ample space for my books and decor.",
      },
      {
        username: "Lucas Harris",
        profile_image: "/reviews/lucas.jpg",
        rating: 4.5,
        comment: "Classic design",
        review:
          "I love the classic design of this bookshelf. Fits perfectly in my office.",
      },
    ],
    related_products: [
      {
        id: "BSH-2024-009",
        name: "Classic Desk",
        url: "https://example.com/products/BSH-2024-009",
      },
      {
        id: "BSH-2024-010",
        name: "Classic Office Chair",
        url: "https://example.com/products/BSH-2024-010",
      },
    ],
  },
  {
    id: 9,
    name: "Contemporary TV Stand",
    description: "A sleek TV stand with ample storage and a modern look.",
    category: "Living Room",
    subcategory: "Storage",
    brand: "FurnitureCo",
    sku: "TVS-CON-2024-009",
    price: 279.99,
    discounted_price: 229.99,
    currency: "USD",
    dimensions: {
      width: "150 cm",
      height: "50 cm",
      depth: "40 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "In Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/tv-stand/colors/black.jpg",
          alt: "Contemporary TV Stand in Black",
        },
      },
      {
        color: "White",
        availability_status: "In Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/tv-stand/colors/white.jpg",
          alt: "Contemporary TV Stand in White",
        },
      },
    ],
    features: ["Ample storage", "Modern design", "Cable management"],
    images: [
      {
        url: "/products/tv-stand/tv-stand-front.jpg",
        alt: "Contemporary TV Stand front view",
      },
      {
        url: "/products/tv-stand/tv-stand-side.jpg",
        alt: "Contemporary TV Stand side view",
      },
    ],
    videos: [
      {
        url: "/products/tv-stand/tv-stand-setup.mp4",
        title: "Contemporary TV Stand Assembly",
      },
    ],
    additionalInfo: {
      weight: "18 kg",
      materials: ["Wood", "Metal"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "20 kg",
        dimensions: {
          width: "155 cm",
          height: "55 cm",
          depth: "45 cm",
        },
        shipping_cost: 25.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Can it hold a 55-inch TV?",
        answer: "Yes, it can hold a TV up to 55 inches.",
        asked_by: "user789",
        asked_on: "2024-06-17",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-18",
      },
      {
        question: "Does it require assembly?",
        answer: "Yes, assembly is required.",
        asked_by: "olivia_r",
        asked_on: "2024-06-19",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-20",
      },
    ],
    reviews: [
      {
        username: "Harper Young",
        profile_image: "/reviews/harper.jpg",
        rating: 4.5,
        comment: "Modern and functional",
        review:
          "The TV stand looks modern and provides ample storage. Very satisfied with my purchase.",
      },
      {
        username: "Benjamin Green",
        profile_image: "/reviews/benjamin.jpg",
        rating: 4,
        comment: "Good quality",
        review: "Good quality TV stand. Assembly was straightforward.",
      },
    ],
    related_products: [
      {
        id: "TVS-2024-010",
        name: "Contemporary Coffee Table",
        url: "https://example.com/products/TVS-2024-010",
      },
      {
        id: "TVS-2024-011",
        name: "Contemporary Side Table",
        url: "https://example.com/products/TVS-2024-011",
      },
    ],
  },
  {
    id: 10,
    name: "Luxury Bed Frame",
    description:
      "A luxury bed frame with an upholstered headboard and sturdy construction.",
    category: "Bedroom",
    subcategory: "Bed Frames",
    brand: "FurnitureCo",
    sku: "BDF-LUX-2024-010",
    price: 599.99,
    discounted_price: 499.99,
    currency: "USD",
    dimensions: {
      width: "160 cm",
      height: "120 cm",
      depth: "200 cm",
    },
    color_variants: [
      {
        color: "Gray",
        availability_status: "In Stock",
        stock_quantity: 8,
        preview_image: {
          url: "/products/bed-frame/colors/gray.jpg",
          alt: "Luxury Bed Frame in Gray",
        },
      },
      {
        color: "Beige",
        availability_status: "Limited Stock",
        stock_quantity: 5,
        preview_image: {
          url: "/products/bed-frame/colors/beige.jpg",
          alt: "Luxury Bed Frame in Beige",
        },
      },
    ],
    features: [
      "Upholstered headboard",
      "Sturdy construction",
      "Elegant design",
    ],
    images: [
      {
        url: "/products/bed-frame/bed-frame-front.jpg",
        alt: "Luxury Bed Frame front view",
      },
      {
        url: "/products/bed-frame/bed-frame-side.jpg",
        alt: "Luxury Bed Frame side view",
      },
    ],
    videos: [
      {
        url: "/products/bed-frame/bed-frame-setup.mp4",
        title: "Luxury Bed Frame Assembly",
      },
    ],
    additionalInfo: {
      weight: "40 kg",
      materials: ["Wood", "Fabric"],
      care_instructions: "Vacuum the fabric regularly to keep it clean.",
      shipping_details: {
        shipping_weight: "45 kg",
        dimensions: {
          width: "165 cm",
          height: "125 cm",
          depth: "205 cm",
        },
        shipping_cost: 50.0,
        estimated_delivery_time: "7-10 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Does it come with a mattress?",
        answer: "No, the mattress is not included.",
        asked_by: "user999",
        asked_on: "2024-06-21",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-22",
      },
      {
        question: "Is the headboard height adjustable?",
        answer: "No, the headboard height is fixed.",
        asked_by: "alex_t",
        asked_on: "2024-06-23",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-24",
      },
    ],
    reviews: [
      {
        username: "Mia Perez",
        profile_image: "/reviews/mia.jpg",
        rating: 5,
        comment: "Elegant bed frame",
        review:
          "The bed frame is elegant and very well made. Highly recommend.",
      },
      {
        username: "Noah King",
        profile_image: "/reviews/noah.jpg",
        rating: 4.5,
        comment: "Very sturdy",
        review: "Very sturdy bed frame and the headboard is beautiful.",
      },
    ],
    related_products: [
      {
        id: "BDF-2024-011",
        name: "Luxury Nightstand",
        url: "https://example.com/products/BDF-2024-011",
      },
      {
        id: "BDF-2024-012",
        name: "Luxury Dresser",
        url: "https://example.com/products/BDF-2024-012",
      },
    ],
  },
];

export default products;
