import type { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "Modern Tray Table",
    description:
      "A versatile modern tray table with a sleek design and durable materials.",
    meta_description:
      "Explore the stylish tray tables for modern living spaces at Elegant furnitures. Find the perfect blend of functionality and design. Shop now!",
    category: {
      label: "living_room",
      value: "Living Room",
    },
    subcategory: {
      label: "tables",
      value: "Tables",
    },
    tag: "new",
    brand: "FurnitureCo",
    sku: "TTB-MOD-2024-001",
    price: 129.99,
    discounted_price: 99.99,
    // sale_end_date: new Date("2024-6-31T23:59:59").toISOString(),
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
          url: "/products/tray_table/colors/tray_table_black.jpg",
          alt: "Modern Tray Table in Black",
        },
      },
      {
        color: "Beige",
        availability_status: "Limited Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/tray_table/colors/tray_table_beige.jpg",
          alt: "Modern Tray Table in Beige",
        },
      },
      {
        color: "Red",
        availability_status: "In Stock",
        stock_quantity: 25,
        preview_image: {
          url: "/products/tray_table/colors/tray_table_red.jpg",
          alt: "Modern Tray Table in Red",
        },
      },
    ],
    features: [
      "Build with strong aluminum",
      "Easy to clean surface",
      "Lightweight and portable",
    ],

    images: [
      {
        url: "/products/tray_table/tray_table_4.jpg",
        alt: "Modern Tray Table close view",
      },
      {
        url: "/products/tray_table/tray_table_2.jpg",
        alt: "Modern Tray Table side view",
      },
      {
        url: "/products/tray_table/tray_table_1.png",
        alt: "Modern Tray Table front view",
      },
      {
        url: "/products/tray_table/tray_table_3.jpg",
        alt: "Modern Tray Table wide view",
      },
    ],
    videos: [
      {
        url: "/products/tray_table/tray_table_1.mp4",
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
        answer: "The tray table can hold up to 25 kg.",
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
  },
  {
    id: 2,
    name: "Contemporary Coffee Table",
    description: "A sleek contemporary coffee table with a minimalist design.",
    meta_description:
      "Elevate your living space with our contemporary coffee table. Sleek design meets premium quality. Comes in Black, Vintage gray & Marbel white. Shop now!",
    category: {
      label: "living_room",
      value: "Living Room",
    },
    subcategory: {
      label: "tables",
      value: "Tables",
    },
    brand: "FurnitureCo",
    sku: "CTB-MOD-2024-002",
    price: 199.99,
    discounted_price: 159.99,
    // sale_end_date: new Date("2024-6-24T23:59:59").toISOString(),
    tag: "new",
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
        profile_image: "/reviews/gary.png",
        rating: 5,
        comment: "Great coffee table!",
        review:
          "This coffee table is perfect for my living room. Sturdy and stylish.",
      },
      {
        username: "Oliver Brown",
        profile_image: "/reviews/neil.png",
        rating: 4,
        comment: "Good value",
        review: "Nice table for the price. Assembly was straightforward.",
      },
    ],
  },
  {
    id: 3,
    name: "Minimalist Sofa Set",
    description: "A sleek and modern sofa set for contemporary living rooms.",
    meta_description:
      "Upgrade your living room with our minimalist sofa set. Sleek design meets comfort.",
    category: {
      label: "living_room",
      value: "Living Room",
    },
    subcategory: {
      label: "sofas",
      value: "Sofas",
    },
    tag: "new",
    brand: "FurnitureCo",
    sku: "SS-MIN-2024-003",
    price: 899.99,
    discounted_price: 799.99,
    // sale_end_date: new Date("2024-06-30T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "200 cm",
      height: "90 cm",
      depth: "80 cm",
    },
    color_variants: [
      {
        color: "White",
        availability_status: "In Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/sofa_set/colors/sofa_set_white.webp",
          alt: "Minimalist Sofa Set in white",
        },
      },
      {
        color: "Navyblue",
        availability_status: "In Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/sofa_set/colors/sofa_set_navyblue.webp",
          alt: "Minimalist Sofa Set in Navyblue",
        },
      },
      {
        color: "Gray",
        availability_status: "In Stock",
        stock_quantity: 8,
        preview_image: {
          url: "/products/sofa_set/colors/sofa_set_grey.webp",
          alt: "Minimalist Sofa Set in Gray",
        },
      },
    ],
    features: [
      "Sleek minimalist design",
      "High-quality fabric",
      "Comfortable seating",
    ],
    images: [
      {
        url: "/products/sofa_set/sofa_set_1.webp",
        alt: "Minimalist Sofa Set front view",
      },
      {
        url: "/products/sofa_set/sofa_set_2.webp",
        alt: "Minimalist Sofa Set side view",
      },
      {
        url: "/products/sofa_set/sofa_set_3.webp",
        alt: "Minimalist Sofa Set angle view",
      },
    ],
    videos: [
      {
        url: "/products/sofa_set/sofa_set_video.mp4",
        title: "Minimalist Sofa Set Overview",
      },
    ],
    additionalInfo: {
      weight: "50 kg",
      materials: ["Fabric", "Wood"],
      care_instructions: "Professional cleaning recommended.",
      shipping_details: {
        shipping_weight: "60 kg",
        dimensions: {
          width: "210 cm",
          height: "100 cm",
          depth: "90 cm",
        },
        shipping_cost: 50.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is assembly required?",
        answer: "Minimal assembly required.",
        asked_by: "customer123",
        asked_on: "2024-06-01",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-02",
      },
      {
        question: "Can this sofa set be customized?",
        answer: "No, the sofa set comes as shown in the images.",
        asked_by: "customer456",
        asked_on: "2024-06-03",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-06-04",
      },
    ],
    reviews: [
      {
        username: "John Smith",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Great sofa set!",
        review:
          "Very satisfied with this purchase. The sofa set looks stylish and is very comfortable.",
      },
      {
        username: "Emma Johnson",
        profile_image: "/reviews/gary.png",
        rating: 5,
        comment: "Excellent quality",
        review:
          "High-quality sofa set. It exceeded my expectations in terms of comfort and durability.",
      },
      {
        username: "Michael Brown",
        profile_image: null,
        rating: 4,
        comment: "Nice sofa set",
        review:
          "Overall, a nice sofa set. Comfortable seating and looks good in my living room.",
      },
      {
        username: "Olivia Jones",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4.5,
        comment: "Love it!",
        review:
          "Love the minimalist design of this sofa set. It adds a modern touch to my living room.",
      },
    ],
  },
  {
    id: 4,
    name: "Classic Upholstered Bed",
    description:
      "A classic upholstered bed that brings elegance to your bedroom.",
    meta_description:
      "Discover our classic upholstered bed collection for a touch of elegance and comfort in your bedroom. Find your perfect style today!",
    category: {
      label: "bedroom",
      value: "Bedroom",
    },
    subcategory: {
      label: "beds",
      value: "Beds",
    },
    tag: "bestseller",
    brand: "HomeComfort",
    sku: "BED-CLA-2024-003",
    price: 499.99,
    discounted_price: 449.99,
    sale_end_date: "2024-06-30T23:59:59",
    currency: "USD",
    dimensions: {
      width: "160 cm",
      height: "120 cm",
      depth: "200 cm",
    },
    color_variants: [
      {
        color: "Dark Gray",
        availability_status: "In Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/upholstered_bed/colors/upholstered_bed_dark_gray.webp",
          alt: "Classic Upholstered Bed in Dark Gray",
        },
      },
      {
        color: "Light Gray",
        availability_status: "In Stock",
        stock_quantity: 18,
        preview_image: {
          url: "/products/upholstered_bed/colors/upholstered_bed_light_gray.webp",
          alt: "Classic Upholstered Bed in Light Gray",
        },
      },
      {
        color: "Black",
        availability_status: "Limited Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/upholstered_bed/colors/upholstered_bed_black.webp",
          alt: "Classic Upholstered Bed in Black",
        },
      },
    ],
    features: [
      "Soft upholstered headboard",
      "Sturdy wooden frame",
      "Easy to assemble",
    ],
    images: [
      {
        url: "/products/upholstered_bed/upholstered_bed_1.webp",
        alt: "Classic Upholstered Bed front view",
      },
      {
        url: "/products/upholstered_bed/upholstered_bed_2.webp",
        alt: "Classic Upholstered Bed side view",
      },
      {
        url: "/products/upholstered_bed/upholstered_bed_3.webp",
        alt: "Classic Upholstered Bed angled view",
      },
      {
        url: "/products/upholstered_bed/upholstered_bed_4.webp",
        alt: "Classic Upholstered Bed detail view",
      },
    ],
    videos: [
      {
        url: "/products/beds/upholstered_bed_assembly.mp4",
        title: "Classic Upholstered Bed Assembly Guide",
      },
    ],
    additionalInfo: {
      weight: "30 kg",
      materials: ["Wood", "Fabric"],
      care_instructions: "Spot clean only",
      shipping_details: {
        shipping_weight: "35 kg",
        dimensions: {
          width: "170 cm",
          height: "130 cm",
          depth: "210 cm",
        },
        shipping_cost: 30,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original packaging.",
    },
    questions_answers: [
      {
        question: "Is the headboard padded for extra comfort?",
        answer: "Yes, the headboard is padded for added comfort.",
        asked_by: "customer321",
        asked_on: "2024-05-25",
        answered_by: "HomeComfort Support",
        answered_on: "2024-05-26",
      },
      {
        question: "What is the weight capacity of this bed frame?",
        answer: "The bed frame can support up to 250 kg.",
        asked_by: "jane_doe",
        asked_on: "2024-05-27",
        answered_by: "HomeComfort Support",
        answered_on: "2024-05-28",
      },
    ],
    reviews: [
      {
        username: "Alex Miller",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Great bed, comfortable and stylish.",
        review:
          "This bed exceeded my expectations in terms of comfort and style. I love it!",
      },
      {
        username: "Sarah White",
        profile_image: "/reviews/gary.png",
        rating: 5,
        comment: "Excellent choice for a cozy bedroom.",
        review:
          "The bed is very cozy, and it adds a touch of elegance to my bedroom. Highly recommended!",
      },
      {
        username: "Michael Brown",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4,
        comment: "Lovely design and good quality.",
        review:
          "The design of this bed is lovely, and the quality is top-notch. A great purchase!",
      },
      {
        username: "Grace Adams",
        profile_image: null,
        rating: 5,
        comment: "Absolutely in love with this bed!",
        review:
          "I am absolutely in love with this bed. It's beautiful, comfortable, and well-made. Perfect for my bedroom!",
      },
      {
        username: "James Rogers",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Happy with my purchase. Comfortable and elegant.",
        review:
          "I am very happy with my purchase. The bed is not only comfortable but also very elegant. Highly recommend!",
      },
      {
        username: "Linda Cooper",
        profile_image: "/reviews/gary.png",
        rating: 3,
        comment: "Nice bed, but had some issues with delivery.",
        review:
          "The bed is nice, but I faced some issues with the delivery process. Overall, a decent product.",
      },
      {
        username: "Henry Ward",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4,
        comment: "Comfortable bed with a classic look.",
        review:
          "This bed is very comfortable and has a classic look that fits well in any bedroom. Satisfied with my purchase!",
      },
    ],
  },
  {
    id: 5,
    name: "Elegant Bookshelf",
    description:
      "A modern and stylish bookshelf for organizing your books and decor items.",
    meta_description:
      "Organize your living space with our elegant bookshelf. Stylish and functional design. Shop now!",
    category: {
      label: "living_room",
      value: "Living Room",
    },
    subcategory: {
      label: "shelves",
      value: "Shelves",
    },
    tag: "new",
    brand: "FurnitureCo",
    sku: "BS-ELEG-2024-004",
    price: 149.99,
    discounted_price: undefined,
    sale_end_date: new Date("2024-06-30T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "80 cm",
      height: "180 cm",
      depth: "30 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "Limited Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/bookshelf/colors/bookshelf_black.webp",
          alt: "Elegant Bookshelf in Black",
        },
      },
      {
        color: "White",
        availability_status: "In Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/bookshelf/colors/bookshelf_white.webp",
          alt: "Elegant Bookshelf in White",
        },
      },
      {
        color: "Black/White",
        availability_status: "In Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/bookshelf/colors/bookshelf_black_white.webp",
          alt: "Elegant Bookshelf in Black and White",
        },
      },
    ],
    features: ["Modern design", "Durable materials", "Ample storage space"],
    images: [
      {
        url: "/products/bookshelf/bookshelf_1.webp",
        alt: "Elegant Bookshelf front view",
      },
      {
        url: "/products/bookshelf/bookshelf_2.webp",
        alt: "Elegant Bookshelf side view",
      },
      {
        url: "/products/bookshelf/bookshelf_3.webp",
        alt: "Elegant Bookshelf angle view",
      },
      {
        url: "/products/bookshelf/bookshelf_4.webp",
        alt: "Elegant Bookshelf open view",
      },
    ],
    videos: [
      {
        url: "/products/bookshelf/bookshelf_video.mp4",
        title: "Elegant Bookshelf Overview",
      },
    ],
    additionalInfo: {
      weight: "25 kg",
      materials: ["Wood", "Metal"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "28 kg",
        dimensions: {
          width: "85 cm",
          height: "190 cm",
          depth: "35 cm",
        },
        shipping_cost: 25.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is assembly required?",
        answer: "Yes, assembly is required.",
        asked_by: "user789",
        asked_on: "2024-05-25",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-26",
      },
      {
        question: "Can the shelves be adjusted?",
        answer: "Yes, the shelves are adjustable.",
        asked_by: "user012",
        asked_on: "2024-05-27",
        answered_by: "FurnitureCo Support",
        answered_on: "2024-05-28",
      },
    ],
    reviews: [
      {
        username: "Sophia Wilson",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Fantastic bookshelf!",
        review:
          "This bookshelf is exactly what I needed. It looks great and holds a lot of books.",
      },
      {
        username: "Oliver Brown",
        profile_image: "/reviews/gary.png",
        rating: 4.5,
        comment: "Stylish and functional",
        review:
          "Very pleased with this bookshelf. It's stylish and provides ample storage.",
      },
      {
        username: "Emily Johnson",
        profile_image: null,
        rating: 4,
        comment: "Good value for money",
        review:
          "The bookshelf is good quality for the price. Assembly was straightforward.",
      },
      {
        username: "Michael Brown",
        profile_image: "/reviews/neil.png",
        rating: 4,
        comment: "Nice bookshelf",
        review:
          "Overall, a nice bookshelf. It looks good in my living room and is very sturdy.",
      },
      {
        username: "Olivia Jones",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Love it!",
        review:
          "Love the design of this bookshelf. It adds a modern touch to my room.",
      },
      {
        username: "John Smith",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Great purchase!",
        review:
          "Very satisfied with this purchase. The bookshelf is stylish and functional.",
      },
    ],
  },
  {
    id: 6,
    name: "Luxury Recliner Chair",
    description:
      "A comfortable and luxurious recliner chair perfect for relaxation.",
    meta_description:
      "Discover our luxury recliner chair for ultimate comfort and style. Perfect addition to any living space. Shop now!",
    category: {
      label: "living_room",
      value: "Living Room",
    },
    subcategory: {
      label: "chairs",
      value: "Chairs",
    },
    tag: "sale",
    brand: "ComfortPlus",
    sku: "RC-LUX-2024-006",
    price: 299.99,
    discounted_price: 149.99,
    sale_end_date: new Date("2024-06-15T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "85 cm",
      height: "110 cm",
      depth: "95 cm",
    },
    color_variants: [
      {
        color: "Dark Gray",
        availability_status: "Limited Stock",
        stock_quantity: 8,
        preview_image: {
          url: "/products/recliner_chair/colors/recliner_chair_dark_gray.webp",
          alt: "Luxury Recliner Chair in Dark Gray",
        },
      },
      {
        color: "Gray",
        availability_status: "In Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/recliner_chair/colors/recliner_chair_gray.webp",
          alt: "Luxury Recliner Chair in Gray",
        },
      },
      {
        color: "Blue",
        availability_status: "Out of Stock",
        stock_quantity: 0,
        preview_image: {
          url: "/products/recliner_chair/colors/recliner_chair_blue.webp",
          alt: "Luxury Recliner Chair in Blue",
        },
      },
    ],
    features: [
      "Ergonomic design",
      "Premium leather upholstery",
      "Reclining feature with footrest",
    ],
    images: [
      {
        url: "/products/recliner_chair/recliner_chair_1.webp",
        alt: "Luxury Recliner Chair front view",
      },
      {
        url: "/products/recliner_chair/recliner_chair_2.webp",
        alt: "Luxury Recliner Chair side view",
      },
      {
        url: "/products/recliner_chair/recliner_chair_3.webp",
        alt: "Luxury Recliner Chair back view",
      },
      {
        url: "/products/recliner_chair/recliner_chair_4.webp",
        alt: "Luxury Recliner Chair close up view",
      },
      {
        url: "/products/recliner_chair/recliner_chair_5.webp",
        alt: "Luxury Recliner Chair feature remote holder",
      },
    ],
    videos: [
      {
        url: "/products/recliner_chair/recliner_chair_demo.mp4",
        title: "Luxury Recliner Chair Features and Setup",
      },
    ],
    additionalInfo: {
      weight: "30 kg",
      materials: ["Leather", "Metal"],
      care_instructions: "Clean with a leather conditioner.",
      shipping_details: {
        shipping_weight: "35 kg",
        dimensions: {
          width: "90 cm",
          height: "115 cm",
          depth: "100 cm",
        },
        shipping_cost: 30.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is the recliner mechanism manual or electric?",
        answer: "The recliner mechanism is manual.",
        asked_by: "user789",
        asked_on: "2024-05-25",
        answered_by: "ComfortPlus Support",
        answered_on: "2024-05-26",
      },
      {
        question: "Does it come with a warranty?",
        answer: "Yes, it comes with a 1-year warranty.",
        asked_by: "user012",
        asked_on: "2024-05-27",
        answered_by: "ComfortPlus Support",
        answered_on: "2024-05-28",
      },
    ],
    reviews: [
      {
        username: "Sophia Wilson",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Extremely comfortable recliner!",
        review:
          "This recliner chair is very comfortable and looks great in my living room.",
      },
      {
        username: "Oliver Brown",
        profile_image: "/reviews/gary.png",
        rating: 4.5,
        comment: "High-quality and comfortable",
        review:
          "Very pleased with this recliner. It's high-quality and very comfortable.",
      },
      {
        username: "Emily Johnson",
        profile_image: null,
        rating: 4,
        comment: "Great value for money",
        review:
          "The recliner is worth the price. It's very comfortable and easy to assemble.",
      },
      {
        username: "Michael Brown",
        profile_image: "/reviews/neil.png",
        rating: 4,
        comment: "Nice recliner",
        review:
          "Overall, a nice recliner. It looks good and is very comfortable.",
      },
      {
        username: "Olivia Jones",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Love it!",
        review:
          "Love the design of this recliner. It's perfect for my living room.",
      },
      {
        username: "John Smith",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Great purchase!",
        review:
          "Very satisfied with this purchase. The recliner is stylish and comfortable.",
      },
    ],
  },
  {
    id: 7,
    name: "Stainless Steel Kitchen Island",
    description:
      "A durable and stylish stainless steel kitchen island with ample storage and workspace.",
    meta_description:
      "Enhance your kitchen with our durable stainless steel kitchen island. Ample storage and workspace for a modern kitchen. Shop now!",
    category: {
      label: "kitchen",
      value: "Kitchen",
    },
    subcategory: {
      label: "islands",
      value: "Islands",
    },
    tag: "limited",
    brand: "KitchenMaster",
    sku: "KI-SS-2024-007",
    price: 499.99,
    discounted_price: 449.99,
    sale_end_date: new Date("2024-06-20T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "120 cm",
      height: "90 cm",
      depth: "60 cm",
    },
    color_variants: [
      {
        color: "Silver",
        availability_status: "In Stock",
        stock_quantity: 12,
        preview_image: {
          url: "/products/kitchen_island/colors/kitchen_island_silver.webp",
          alt: "Stainless Steel Kitchen Island in Silver",
        },
      },
    ],
    features: [
      "High-quality stainless steel",
      "Spacious countertop",
      "Ample storage shelves",
      "Easy to clean",
    ],
    images: [
      {
        url: "/products/kitchen_island/kitchen_island_1.webp",
        alt: "Stainless Steel Kitchen Island front view",
      },
      {
        url: "/products/kitchen_island/kitchen_island_2.webp",
        alt: "Stainless Steel Kitchen Island side view",
      },
      {
        url: "/products/kitchen_island/kitchen_island_3.webp",
        alt: "Stainless Steel Kitchen Island storage view",
      },
      {
        url: "/products/kitchen_island/kitchen_island_4.webp",
        alt: "Stainless Steel Kitchen Island top view",
      },
    ],
    videos: [
      {
        url: "/products/kitchen_island/kitchen_island_demo.mp4",
        title: "Stainless Steel Kitchen Island Features and Setup",
      },
    ],
    additionalInfo: {
      weight: "40 kg",
      materials: ["Stainless Steel"],
      care_instructions: "Clean with a stainless steel cleaner.",
      shipping_details: {
        shipping_weight: "45 kg",
        dimensions: {
          width: "125 cm",
          height: "95 cm",
          depth: "65 cm",
        },
        shipping_cost: 50.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is assembly required for this kitchen island?",
        answer:
          "Yes, assembly is required and it comes with easy-to-follow instructions.",
        asked_by: "user321",
        asked_on: "2024-05-28",
        answered_by: "KitchenMaster Support",
        answered_on: "2024-05-29",
      },
      {
        question: "Is the countertop heat resistant?",
        answer: "Yes, the stainless steel countertop is heat resistant.",
        asked_by: "user654",
        asked_on: "2024-05-30",
        answered_by: "KitchenMaster Support",
        answered_on: "2024-05-31",
      },
    ],
    reviews: [
      {
        username: "Jessica Lee",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Amazing kitchen island!",
        review:
          "This kitchen island has transformed my kitchen. It's durable and provides ample workspace.",
      },
      {
        username: "David Martinez",
        profile_image: "/reviews/gary.png",
        rating: 4.5,
        comment: "High-quality and stylish",
        review:
          "Very pleased with the quality and design of this kitchen island. Highly recommend!",
      },
      {
        username: "Lisa White",
        profile_image: null,
        rating: 4,
        comment: "Great addition to my kitchen",
        review:
          "The kitchen island is a great addition to my kitchen. It provides extra storage and workspace.",
      },
      {
        username: "Tom Harris",
        profile_image: "/reviews/neil.png",
        rating: 4,
        comment: "Sturdy and functional",
        review:
          "The kitchen island is sturdy and functional. It was easy to assemble and looks great.",
      },
      {
        username: "Emma Taylor",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Highly recommend!",
        review:
          "I'm very happy with this purchase. The kitchen island is of high quality and very functional.",
      },
      {
        username: "Jack Wilson",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Excellent product",
        review:
          "This kitchen island exceeded my expectations. It's well-made and very practical.",
      },
    ],
  },
  {
    id: 8,
    name: "Elegant Dining Chair",
    description:
      "A stylish and comfortable dining chair perfect for modern dining rooms.",
    meta_description:
      "Discover our elegant dining chair for your modern dining room. Comfortable, stylish, and available in various colors. Shop now!",
    category: {
      label: "dining_room",
      value: "Dining Room",
    },
    subcategory: {
      label: "furniture",
      value: "Furniture",
    },
    tag: "new",
    brand: "DiningElegance",
    sku: "EDC-MOD-2024-009",
    price: 89.99,
    discounted_price: 69.99,
    sale_end_date: new Date("2024-06-30T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "45 cm",
      height: "90 cm",
      depth: "50 cm",
    },
    color_variants: [
      {
        color: "Green",
        availability_status: "In Stock",
        stock_quantity: 40,
        preview_image: {
          url: "/products/dining_chair/colors/dining_chair_green.webp",
          alt: "Elegant Dining Chair in Green",
        },
      },
      {
        color: "Gray",
        availability_status: "Limited Stock",
        stock_quantity: 25,
        preview_image: {
          url: "/products/dining_chair/colors/dining_chair_gray.webp",
          alt: "Elegant Dining Chair in Gray",
        },
      },
      {
        color: "Orange",
        availability_status: "In Stock",
        stock_quantity: 30,
        preview_image: {
          url: "/products/dining_chair/colors/dining_chair_orange.webp",
          alt: "Elegant Dining Chair in Orange",
        },
      },
    ],
    features: [
      "Ergonomic design",
      "Durable materials",
      "Easy to clean",
      "Available in various colors",
    ],
    images: [
      {
        url: "/products/dining_chair/dining_chair_1.webp",
        alt: "Elegant Dining Chair front view",
      },
      {
        url: "/products/dining_chair/dining_chair_2.webp",
        alt: "Elegant Dining Chair side view",
      },
      {
        url: "/products/dining_chair/dining_chair_3.webp",
        alt: "Elegant Dining Chair in dining room",
      },
      {
        url: "/products/dining_chair/dining_chair_4.webp",
        alt: "Elegant Dining Chair close view",
      },
    ],
    videos: [
      {
        url: "/products/dining_chair/dining_chair_setup.mp4",
        title: "Elegant Dining Chair Assembly Guide",
      },
    ],
    additionalInfo: {
      weight: "6 kg",
      materials: ["Fabric", "Metal"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "8 kg",
        dimensions: {
          width: "50 cm",
          height: "95 cm",
          depth: "55 cm",
        },
        shipping_cost: 12.0,
        estimated_delivery_time: "3-5 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is this chair suitable for outdoor use?",
        answer: "No, this chair is designed for indoor use only.",
        asked_by: "user987",
        asked_on: "2024-05-30",
        answered_by: "DiningElegance Support",
        answered_on: "2024-05-31",
      },
      {
        question: "What is the weight capacity of this chair?",
        answer: "The chair can support up to 150 kg.",
        asked_by: "user654",
        asked_on: "2024-06-01",
        answered_by: "DiningElegance Support",
        answered_on: "2024-06-02",
      },
    ],
    reviews: [
      {
        username: "Ava Martinez",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Beautiful dining chair!",
        review:
          "This dining chair is not only beautiful but also very comfortable. Highly recommend!",
      },
      {
        username: "William Brown",
        profile_image: "/reviews/gary.png",
        rating: 4.5,
        comment: "Great value",
        review:
          "Excellent value for money. The chairs are sturdy and look great in my dining room.",
      },
      {
        username: "Mia Davis",
        profile_image: null,
        rating: 4,
        comment: "Stylish and comfortable",
        review:
          "The chairs are stylish and comfortable. Assembly was easy and they look great.",
      },
      {
        username: "Noah Wilson",
        profile_image: "/reviews/neil.png",
        rating: 4,
        comment: "Good quality",
        review:
          "Good quality chairs for the price. Very happy with my purchase.",
      },
      {
        username: "Isabella Johnson",
        profile_image: "/reviews/sofia.jpeg",
        rating: 5,
        comment: "Highly recommend",
        review:
          "Highly recommend these dining chairs. They are well-made and very comfortable.",
      },
      {
        username: "Lucas Martinez",
        profile_image: "/reviews/neil.png",
        rating: 4.5,
        comment: "Excellent product",
        review:
          "The dining chairs exceeded my expectations. They are sturdy and look great.",
      },
    ],
  },
  {
    id: 9,
    name: "Ergonomic Office Chair",
    description:
      "An ergonomic office chair designed for maximum comfort and support during long working hours.",
    meta_description:
      "Upgrade your workspace with our ergonomic office chair. Designed for comfort and support. Shop now for the best in office seating.",
    category: {
      label: "office",
      value: "Office",
    },
    subcategory: {
      label: "furniture",
      value: "Furniture",
    },
    tag: "new",
    brand: "OfficeComfort",
    sku: "EOC-MOD-2024-010",
    price: 229.99,
    discounted_price: 179.99,
    sale_end_date: new Date("2024-06-30T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "70 cm",
      height: "120 cm",
      depth: "70 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "In Stock",
        stock_quantity: 50,
        preview_image: {
          url: "/products/office_chair/colors/office_chair_black.webp",
          alt: "Ergonomic Office Chair in Black",
        },
      },
      {
        color: "White",
        availability_status: "Limited Stock",
        stock_quantity: 20,
        preview_image: {
          url: "/products/office_chair/colors/office_chair_white.webp",
          alt: "Ergonomic Office Chair in White",
        },
      },
    ],
    features: [
      "Adjustable height and recline",
      "Lumbar support",
      "Breathable mesh back",
      "Padded seat cushion",
    ],
    images: [
      {
        url: "/products/office_chair/office_chair_1.webp",
        alt: "Ergonomic Office Chair front view",
      },
      {
        url: "/products/office_chair/office_chair_2.webp",
        alt: "Ergonomic Office Chair side view",
      },
      {
        url: "/products/office_chair/office_chair_3.webp",
        alt: "Ergonomic Office Chair back view",
      },
      {
        url: "/products/office_chair/office_chair_4.webp",
        alt: "Ergonomic Office Chair close view",
      },
    ],
    videos: [
      {
        url: "/products/office_chair/office_chair_setup.mp4",
        title: "Ergonomic Office Chair Assembly Guide",
      },
    ],
    additionalInfo: {
      weight: "15 kg",
      materials: ["Mesh", "Metal", "Fabric"],
      care_instructions: "Wipe clean with a damp cloth.",
      shipping_details: {
        shipping_weight: "17 kg",
        dimensions: {
          width: "75 cm",
          height: "125 cm",
          depth: "75 cm",
        },
        shipping_cost: 25.0,
        estimated_delivery_time: "3-5 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Is the chair suitable for tall people?",
        answer:
          "Yes, the chair's height and backrest are adjustable to accommodate taller individuals.",
        asked_by: "user101",
        asked_on: "2024-06-01",
        answered_by: "OfficeComfort Support",
        answered_on: "2024-06-02",
      },
      {
        question: "Does the chair come pre-assembled?",
        answer:
          "No, some assembly is required, but it is straightforward and takes about 20 minutes.",
        asked_by: "user202",
        asked_on: "2024-06-03",
        answered_by: "OfficeComfort Support",
        answered_on: "2024-06-04",
      },
    ],
    reviews: [
      {
        username: "Liam Thompson",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Best office chair I've ever owned",
        review:
          "This office chair is incredibly comfortable and supportive. It has made a huge difference in my daily comfort.",
      },
      {
        username: "Olivia Brown",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4.5,
        comment: "Great chair for long hours",
        review:
          "I work from home and sit for long hours. This chair has really helped with my back pain.",
      },
      {
        username: "Aiden Smith",
        profile_image: "/reviews/gary.png",
        rating: 4,
        comment: "Comfortable and stylish",
        review:
          "The chair is comfortable and looks great in my home office. Highly recommend!",
      },
      {
        username: "Emma Wilson",
        profile_image: null,
        rating: 4,
        comment: "Good quality chair",
        review:
          "The chair is well-built and offers good support. Assembly was a bit tricky but worth it.",
      },
      {
        username: "James Johnson",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Excellent office chair",
        review:
          "This chair is exactly what I needed for my home office. It's very comfortable and provides great support.",
      },
      {
        username: "Isabella Davis",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4,
        comment: "Very satisfied",
        review:
          "I'm very satisfied with this chair. It's comfortable, easy to adjust, and looks great.",
      },
    ],
  },
  {
    id: 10,
    name: "Outdoor Patio Set",
    description:
      "A stylish and durable outdoor patio set perfect for your backyard or garden.",
    meta_description:
      "Enhance your outdoor space with our stylish and durable patio set. Perfect for backyards and gardens. Shop now for premium outdoor furniture.",
    category: {
      label: "outdoor",
      value: "Outdoor",
    },
    subcategory: {
      label: "furniture",
      value: "Furniture",
    },
    tag: "new",
    brand: "GardenEase",
    sku: "OPS-MOD-2024-011",
    price: 599.99,
    discounted_price: 499.99,
    sale_end_date: new Date("2024-07-31T23:59:59").toISOString(),
    currency: "USD",
    dimensions: {
      width: "200 cm",
      height: "90 cm",
      depth: "100 cm",
    },
    color_variants: [
      {
        color: "Black",
        availability_status: "In Stock",
        stock_quantity: 15,
        preview_image: {
          url: "/products/patio_set/colors/patio_set_black.webp",
          alt: "Outdoor Patio Set in Black",
        },
      },
      {
        color: "White",
        availability_status: "Limited Stock",
        stock_quantity: 10,
        preview_image: {
          url: "/products/patio_set/colors/patio_set_white.webp",
          alt: "Outdoor Patio Set in White",
        },
      },
    ],
    features: [
      "Weather-resistant materials",
      "Comfortable cushions",
      "Easy to assemble",
      "Stylish design",
    ],
    images: [
      {
        url: "/products/patio_set/patio_set_1.webp",
        alt: "Outdoor Patio Set front view",
      },
      {
        url: "/products/patio_set/patio_set_2.webp",
        alt: "Outdoor Patio Set side view",
      },
      {
        url: "/products/patio_set/patio_set_3.webp",
        alt: "Outdoor Patio Set top view",
      },
      {
        url: "/products/patio_set/patio_set_4.webp",
        alt: "Outdoor Patio Set close view",
      },
    ],
    videos: [
      {
        url: "/products/patio_set/patio_set_setup.mp4",
        title: "Outdoor Patio Set Assembly Guide",
      },
    ],
    additionalInfo: {
      weight: "50 kg",
      materials: ["Rattan", "Metal", "Fabric"],
      care_instructions:
        "Clean with mild soap and water. Store cushions indoors during inclement weather.",
      shipping_details: {
        shipping_weight: "55 kg",
        dimensions: {
          width: "205 cm",
          height: "95 cm",
          depth: "105 cm",
        },
        shipping_cost: 50.0,
        estimated_delivery_time: "5-7 business days",
      },
      return_policy:
        "30-day return policy. Product must be in original condition.",
    },
    questions_answers: [
      {
        question: "Are the cushions waterproof?",
        answer:
          "The cushions are water-resistant, but it is recommended to store them indoors during heavy rain.",
        asked_by: "user789",
        asked_on: "2024-06-01",
        answered_by: "GardenEase Support",
        answered_on: "2024-06-02",
      },
      {
        question: "Is assembly required?",
        answer:
          "Yes, the patio set requires assembly, but it comes with easy-to-follow instructions.",
        asked_by: "user321",
        asked_on: "2024-06-03",
        answered_by: "GardenEase Support",
        answered_on: "2024-06-04",
      },
    ],
    reviews: [
      {
        username: "Noah Harris",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Fantastic patio set",
        review:
          "This patio set is amazing. It's comfortable, stylish, and perfect for our backyard. Highly recommend!",
      },
      {
        username: "Mia Thompson",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4.5,
        comment: "Great value for the price",
        review:
          "The patio set offers great value for the price. It's durable and looks great in our garden.",
      },
      {
        username: "Lucas Martinez",
        profile_image: "/reviews/gary.png",
        rating: 4,
        comment: "Stylish and comfortable",
        review:
          "Very stylish and comfortable. Assembly was straightforward. Happy with the purchase!",
      },
      {
        username: "Amelia Wilson",
        profile_image: null,
        rating: 4,
        comment: "Good quality",
        review:
          "The quality of the patio set is good. The cushions are comfortable and the frame feels sturdy.",
      },
      {
        username: "Ethan Johnson",
        profile_image: "/reviews/neil.png",
        rating: 5,
        comment: "Excellent outdoor furniture",
        review:
          "This patio set is perfect for our outdoor space. It's comfortable and looks fantastic. Highly recommend!",
      },
      {
        username: "Charlotte Brown",
        profile_image: "/reviews/sofia.jpeg",
        rating: 4,
        comment: "Very satisfied",
        review:
          "I'm very satisfied with this purchase. The patio set is comfortable and easy to clean.",
      },
    ],
  },
];

export default products;
