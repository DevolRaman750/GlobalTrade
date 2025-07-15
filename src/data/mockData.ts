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
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 89.99,
    country: 'China',
    countryCode: 'CN',
    category: 'electronics',
    tariffCode: 'HS8518',
    shippingMethod: 'Air',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: '2',
    name: 'Cotton T-Shirt',
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 24.99,
    country: 'India',
    countryCode: 'IN',
    category: 'clothing',
    tariffCode: 'HS6109',
    shippingMethod: 'Sea',
    description: '100% organic cotton t-shirt, comfortable and sustainable'
  },
  {
    id: '3',
    name: 'Smartphone',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 599.99,
    country: 'South Korea',
    countryCode: 'KR',
    category: 'electronics',
    tariffCode: 'HS8517',
    shippingMethod: 'Air',
    description: 'Latest smartphone with advanced camera and long battery life'
  },
  {
    id: '4',
    name: 'Leather Handbag',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 149.99,
    country: 'Mexico',
    countryCode: 'MX',
    category: 'clothing',
    tariffCode: 'HS4202',
    shippingMethod: 'Air',
    description: 'Handcrafted leather handbag with elegant design'
  },
  {
    id: '5',
    name: 'Ceramic Dinnerware Set',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 79.99,
    country: 'Japan',
    countryCode: 'JP',
    category: 'home',
    tariffCode: 'HS6912',
    shippingMethod: 'Sea',
    description: 'Beautiful ceramic dinnerware set for 4 people'
  },
  {
    id: '6',
    name: 'Yoga Mat',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 39.99,
    country: 'Thailand',
    countryCode: 'TH',
    category: 'sports',
    tariffCode: 'HS4016',
    shippingMethod: 'Sea',
    description: 'Eco-friendly yoga mat with non-slip surface'
  },
  {
    id: '7',
    name: 'Smartwatch',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 299.99,
    country: 'China',
    countryCode: 'CN',
    category: 'electronics',
    tariffCode: 'HS9102',
    shippingMethod: 'Air',
    description: 'Advanced smartwatch with health monitoring features'
  },
  {
    id: '8',
    name: 'Wooden Coffee Table',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 189.99,
    country: 'Vietnam',
    countryCode: 'VN',
    category: 'home',
    tariffCode: 'HS9403',
    shippingMethod: 'Sea',
    description: 'Handcrafted wooden coffee table with modern design'
  },
  {
    id: '9',
    name: 'Skincare Set',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 99.99,
    country: 'Germany',
    countryCode: 'DE',
    category: 'beauty',
    tariffCode: 'HS3304',
    shippingMethod: 'Air',
    description: 'Premium skincare set with natural ingredients'
  },
  {
    id: '10',
    name: 'Tennis Racket',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 129.99,
    country: 'Japan',
    countryCode: 'JP',
    category: 'sports',
    tariffCode: 'HS9506',
    shippingMethod: 'Air',
    description: 'Professional tennis racket for all skill levels'
  },
  {
    id: '11',
    name: 'Silk Dress',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 199.99,
    country: 'India',
    countryCode: 'IN',
    category: 'clothing',
    tariffCode: 'HS6204',
    shippingMethod: 'Air',
    description: 'Elegant silk dress with intricate embroidery'
  },
  {
    id: '12',
    name: 'Car Accessories Kit',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=300',
    price: 69.99,
    country: 'Mexico',
    countryCode: 'MX',
    category: 'automotive',
    tariffCode: 'HS8708',
    shippingMethod: 'Sea',
    description: 'Complete car accessories kit for interior enhancement'
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