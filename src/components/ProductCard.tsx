import React from 'react';
import { Plus, Truck, Ship } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const countryFlag = {
    CN: '🇨🇳',
    IN: '🇮🇳',
    MX: '🇲🇽',
    DE: '🇩🇪',
    JP: '🇯🇵',
    KR: '🇰🇷',
    TH: '🇹🇭',
    VN: '🇻🇳',
  }[product.countryCode] || '🌍';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-xs font-semibold shadow-lg border border-gray-200 backdrop-blur-sm">
          {countryFlag} {product.country}
        </div>
        <div className="absolute top-2 left-2 bg-blue-600 text-white rounded-full px-2 py-1 text-xs font-semibold flex items-center shadow-lg">
          {product.shippingMethod === 'Air' ? <Truck className="h-3 w-3" /> : <Ship className="h-3 w-3" />}
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white rounded px-2 py-1 text-xs">
          {product.tariffCode}
        </div>
      </div>
      
      <div className="p-4">
        {/* Country Flag and Name */}
        <div className="flex items-center mb-2">
          <span className="text-lg mr-2">{countryFlag}</span>
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            Made in {product.country}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <div className="text-xs text-gray-500 mt-1">
              Tariff: {product.tariffCode} | {product.shippingMethod}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};