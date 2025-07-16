import { Product, Country, Category } from '../types';

export const countries: Country[] = [
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
];

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'home', name: 'Home & Garden', icon: '🏠' },
  { id: 'automotive', name: 'Automotive', icon: '🚗' },
  { id: 'sports', name: 'Sports & Outdoors', icon: '⚽' },
  { id: 'beauty', name: 'Beauty & Health', icon: '💄' },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury T-Shirt",
    price: 45,
    image: "/shirt.png",
    country: "Germany",
    countryCode: "DE",
    tariffCode: "6109.10.00",
    category: "apparel",
    shippingMethod: "Air",
    description: "Premium cotton shirt with soft texture.",
    weight: 0.3,
    dimensions: { length: 30, width: 25, height: 2 },
    fromPostalCode: "10115"
  },
  {
    id: "2",
    name: "Silk Scarf",
    price: 120,
    image: "/scarf.png",
    country: "China",
    countryCode: "CN",
    tariffCode: "6214.20.00",
    category: "accessory",
    shippingMethod: "Air",
    description: "100% silk scarf with floral embroidery.",
    weight: 0.2,
    dimensions: { length: 25, width: 25, height: 1 },
    fromPostalCode: "200000"
  },
  {
    id: "3",
    name: "Leather Handbag",
    price: 350,
    image: "/handbag.png",
    country: "Italy",
    countryCode: "IT",
    tariffCode: "4202.21.90",
    category: "accessory",
    shippingMethod: "Air",
    description: "Genuine leather handbag from Milan.",
    weight: 1.2,
    dimensions: { length: 35, width: 30, height: 15 },
    fromPostalCode: "20121"
  },
  {
    id: "4",
    name: "Wireless Headphones",
    price: 199,
    image: "/headphones.png",
    country: "USA",
    countryCode: "US",
    tariffCode: "8518.30.20",
    category: "electronics",
    shippingMethod: "Air",
    description: "Noise-cancelling over-ear headphones.",
    weight: 0.8,
    dimensions: { length: 25, width: 20, height: 10 },
    fromPostalCode: "10001"
  },
  {
    id: "5",
    name: "Smart Watch",
    price: 299,
    image: "/watch.png",
    country: "Japan",
    countryCode: "JP",
    tariffCode: "9102.12.00",
    category: "electronics",
    shippingMethod: "Air",
    description: "High-tech wearable smart watch.",
    weight: 0.25,
    dimensions: { length: 10, width: 10, height: 5 },
    fromPostalCode: "100-0001"
  },
  {
    id: "6",
    name: "Designer Sunglasses",
    price: 180,
    image: "/sunglasses.png",
    country: "France",
    countryCode: "FR",
    tariffCode: "9004.10.00",
    category: "accessory",
    shippingMethod: "Air",
    description: "UV-protective polarized designer sunglasses.",
    weight: 0.3,
    dimensions: { length: 18, width: 8, height: 6 },
    fromPostalCode: "75001"
  },
  {
    id: "7",
    name: "Ceramic Vase",
    price: 95,
    image: "/vase.png",
    country: "Thailand",
    countryCode: "TH",
    tariffCode: "6913.90.00",
    category: "home-decor",
    shippingMethod: "Sea",
    description: "Handcrafted ceramic vase with floral design.",
    weight: 1.5,
    dimensions: { length: 25, width: 25, height: 30 },
    fromPostalCode: "10200"
  },
  {
    id: "8",
    name: "Yoga Mat",
    price: 60,
    image: "/yoga-mat.png",
    country: "India",
    countryCode: "IN",
    tariffCode: "9506.91.00",
    category: "fitness",
    shippingMethod: "Air",
    description: "Eco-friendly non-slip yoga mat.",
    weight: 1.8,
    dimensions: { length: 61, width: 15, height: 15 },
    fromPostalCode: "110001"
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    price: 85,
    image: "/speaker.png",
    country: "South Korea",
    countryCode: "KR",
    tariffCode: "8518.22.00",
    category: "electronics",
    shippingMethod: "Air",
    description: "Portable wireless Bluetooth speaker.",
    weight: 0.7,
    dimensions: { length: 18, width: 10, height: 8 },
    fromPostalCode: "04524"
  },
  {
    id: "10",
    name: "Running Shoes",
    price: 110,
    image: "/shoes.png",
    country: "Vietnam",
    countryCode: "VN",
    tariffCode: "6404.11.00",
    category: "footwear",
    shippingMethod: "Sea",
    description: "Breathable lightweight running shoes.",
    weight: 1.0,
    dimensions: { length: 33, width: 20, height: 12 },
    fromPostalCode: "700000"
  },
  {
    id: "11",
    name: "Wool Sweater",
    price: 130,
    image: "/sweater.png",
    country: "United Kingdom",
    countryCode: "GB",
    tariffCode: "6110.11.00",
    category: "apparel",
    shippingMethod: "Air",
    description: "Warm wool blend winter sweater.",
    weight: 0.6,
    dimensions: { length: 30, width: 25, height: 4 },
    fromPostalCode: "EC1A 1BB"
  },
  {
    id: "12",
    name: "Decorative Lamp",
    price: 145,
    image: "/lamp.png",
    country: "Mexico",
    countryCode: "MX",
    tariffCode: "9405.10.60",
    category: "home-decor",
    shippingMethod: "Sea",
    description: "Stylish bedside decorative lamp.",
    weight: 2.2,
    dimensions: { length: 35, width: 35, height: 40 },
    fromPostalCode: "01000"
  }


];

// Shipping rates per country (dummy data)
export const shippingRates: Record<string, number> = {
  CN: 15.99,
  IN: 18.99,
  MX: 12.99,
  DE: 22.99,
  JP: 25.99,
  KR: 19.99,
  TH: 16.99,
  VN: 14.99,
};

// Tariff rates by category (dummy percentage)
export const tariffRates: Record<string, number> = {
  electronics: 0.12, // 12%
  clothing: 0.08, // 8%
  home: 0.06, // 6%
  automotive: 0.15, // 15%
  sports: 0.05, // 5%
  beauty: 0.10, // 10%
};