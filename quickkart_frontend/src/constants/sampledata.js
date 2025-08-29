// sampleData.js

import { v4 as uuidv4 } from "uuid";

export const categories = [
  {
    id: uuidv4(),
    name: "Electronics",
    slug: "electronics",
    children: [
      { id: uuidv4(), name: "Mobiles", slug: "mobiles", children: [
        {id: uuidv4(), name: "Apple", slug: "apple"}
      ] },
      { id: uuidv4(), name: "Laptops", slug: "laptops" },
      { id: uuidv4(), name: "Cameras", slug: "cameras" },
      { id: uuidv4(), name: "Headphones", slug: "headphones" },
    ],
  },
  {
    id: uuidv4(),
    name: "TVs & Appliances",
    slug: "tvs-appliances",
    children: [
      { id: uuidv4(), name: "Televisions", slug: "televisions" },
      { id: uuidv4(), name: "Refrigerators", slug: "refrigerators" },
      { id: uuidv4(), name: "Washing Machines", slug: "washing-machines" },
      { id: uuidv4(), name: "Air Conditioners", slug: "air-conditioners" },
    ],
  },
  {
    id: uuidv4(),
    name: "Men",
    slug: "men",
    children: [
      { id: uuidv4(), name: "Clothing", slug: "clothing" },
      { id: uuidv4(), name: "Footwear", slug: "footwear" },
      { id: uuidv4(), name: "Watches", slug: "watches" },
    ],
  },
  {
    id: uuidv4(),
    name: "Women",
    slug: "women",
    children: [
      { id: uuidv4(), name: "Ethnic Wear", slug: "ethnic-wear" },
      { id: uuidv4(), name: "Western Wear", slug: "western-wear" },
      { id: uuidv4(), name: "Jewellery", slug: "jewellery" },
    ],
  },
  {
    id: uuidv4(),
    name: "Baby & Kids",
    slug: "baby-kids",
    children: [
      { id: uuidv4(), name: "Toys", slug: "toys" },
      { id: uuidv4(), name: "Kids Clothing", slug: "kids-clothing" },
      { id: uuidv4(), name: "Baby Care", slug: "baby-care" },
    ],
  },
  {
    id: uuidv4(),
    name: "Home & Furniture",
    slug: "home-furniture",
    children: [
      { id: uuidv4(), name: "Furniture", slug: "furniture" },
      { id: uuidv4(), name: "Kitchen", slug: "kitchen" },
      { id: uuidv4(), name: "Decor", slug: "decor" },
    ],
  },
  {
    id: uuidv4(),
    name: "Sports, Books & More",
    slug: "sports-books-more",
    children: [
      { id: uuidv4(), name: "Sports Equipment", slug: "sports-equipment" },
      { id: uuidv4(), name: "Books", slug: "books" },
      { id: uuidv4(), name: "Music", slug: "music" },
    ],
  },
];

// Users
export const users = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  email: `user${i + 1}@example.com`,
  username: `user${i + 1}`,
  is_active: true,
  is_staff: i === 0, // first user is staff
  date_joined: new Date().toISOString(),
}));

// UserProfiles
export const userProfiles = users.map(user => ({
  id: user.id,
  user: user.id,
  first_name: `First${user.id}`,
  last_name: `Last${user.id}`,
  phone: `+91-900000000${user.id}`,
  date_of_birth: `199${user.id}-01-01`,
  gender: user.id % 2 === 0 ? "female" : "male",
  profile_picture: `/media/profile/user${user.id}.jpg`,
}));

// Addresses
export const addresses = userProfiles.map((profile, i) => ({
  id: i + 1,
  user_profile: profile.id,
  address_line1: `${i + 1} Main Street`,
  address_line2: `Near Market ${i + 1}`,
  city: "Bengaluru",
  state: "Karnataka",
  postal_code: `56000${i + 1}`,
  country: "India",
  is_default: true,
}));

// Products
export const products = Array.from({ length: 5 }, (_, i) => ({
  id: uuidv4(),
  seller: users[i % users.length].id,
  name: `Product ${i + 1}`,
  slug: `product-${i + 1}`,
  description: `Description of product ${i + 1}`,
  base_price: 100 + i * 50,
  brand: `Brand ${i + 1}`,
  category: categories[i % categories.length].id,
  is_active: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  images: Array.from({ length: 3 }, (_, j) => ({
    id: uuidv4(),
    image: `/media/products/product${i + 1}_image${j + 1}.jpg`,
    alt_text: `Product ${i + 1} image ${j + 1}`,
    is_primary: j === 0,
  })),
  variants: Array.from({ length: 2 }, (_, v) => ({
    id: uuidv4(),
    size: ["S", "M", "L"][v % 3],
    color: ["Red", "Blue", "Green"][v % 3],
    sku: `SKU-P${i + 1}-V${v + 1}`,
    stock: 10 + v * 5,
    additional_price: v * 20,
    images: Array.from({ length: 2 }, (_, vi) => ({
      id: uuidv4(),
      image: `/media/product_variants/product${i + 1}_variant${v + 1}_img${vi + 1}.jpg`,
      alt_text: `Variant ${v + 1} image ${vi + 1}`,
      is_primary: vi === 0,
    })),
  })),
}));

// Cart
export const carts = users.map(user => ({
  id: user.id,
  user: user.id,
  created_at: new Date().toISOString(),
}));

// CartItems
export const cartItems = products.slice(0, 5).map((prod, i) => ({
  id: i + 1,
  cart: carts[i % carts.length].id,
  product_variant: prod.variants[0].id,
  quantity: 1 + (i % 3),
  subtotal: prod.base_price,
}));

// Wishlist
export const wishlists = products.slice(0, 5).map((prod, i) => ({
  id: i + 1,
  user: users[i % users.length].id,
  product_variant: prod.variants[1].id,
  added_at: new Date().toISOString(),
}));

// Orders
export const orders = users.map((user, i) => ({
  id: i + 1,
  user: user.id,
  address: addresses[i % addresses.length].id,
  total_price: 200 + i * 50,
  status: "pending",
  created_at: new Date().toISOString(),
}));

// OrderItems
export const orderItems = orders.map((order, i) => ({
  id: i + 1,
  order: order.id,
  product_variant: products[i % products.length].variants[0].id,
  quantity: 1 + (i % 2),
  price: products[i % products.length].base_price,
}));

// Payments
export const payments = orders.map(order => ({
  id: order.id,
  order: order.id,
  payment_method: "Razorpay",
  amount: order.total_price,
  status: "success",
  transaction_id: `txn_${order.id}`,
  created_at: new Date().toISOString(),
}));

// Coupons
export const coupons = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  code: `DISCOUNT${i + 1}`,
  discount_percent: 10 + i * 5,
  valid_from: "2025-08-01",
  valid_to: "2025-09-01",
  active: true,
}));

// Returns
export const orderReturns = orders.map((order, i) => ({
  id: i + 1,
  order: order.id,
  reason: "Wrong size",
  status: "processing",
  requested_at: new Date().toISOString(),
}));

export const refunds = orderReturns.map(ret => ({
  id: ret.id,
  order_return: ret.id,
  amount: 200 + ret.id * 10,
  status: "initiated",
  processed_at: null,
}));
