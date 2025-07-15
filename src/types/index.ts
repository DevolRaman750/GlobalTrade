export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  country: string;
  category: string;
  tariffCode: string;
  shippingMethod: 'Air' | 'Sea';
  description: string;
  countryCode: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PriceBreakdown {
  basePrice: number;
  shipping: number;
  tariff: number;
  total: number;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}