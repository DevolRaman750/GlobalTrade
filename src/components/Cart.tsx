import React, {useEffect} from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem, PriceBreakdown } from '../types';
import { tariffRates } from '../data/mockData';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const calculatePriceBreakdown = (item: CartItem): PriceBreakdown => {
    const basePrice = item.product.price * item.quantity;
    const shipping = liveShippingRates[item.product.id] || 20;
    const tariff = basePrice * (tariffRates[item.product.category] || 0.1);

    return {
      basePrice,
      shipping,
      tariff,
      total: basePrice + shipping + tariff
    };
  };

  const [liveShippingRates, setLiveShippingRates] = React.useState<Record<string, number>>({});


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const breakdown = calculatePriceBreakdown(item);
      return total + breakdown.total;
    }, 0);
  };



  const getLiveShippingRate = async (item: CartItem) => {
    const fromCountry = item.product.countryCode;
    const toCountry = 'US'; // or detect user's country dynamically
    const weightKg = item.product.weight || 1; // fallback weight

    try {
      const res = await fetch('/api/getShippingRates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromCountry, toCountry, weightKg }),
      });

      const data = await res.json();

      // Get the lowest rate
      const estimatedRate = data && data.rate_response?.rates?.[0]?.shipping_amount?.amount || 20;

      setLiveShippingRates(prev => ({
        ...prev,
        [item.product.id]: estimatedRate,
      }));
    } catch (error) {
      console.error('Error fetching shipping rate:', error);
    }
  };


  useEffect(() => {
    cartItems.forEach(item => {
      if (!liveShippingRates[item.product.id]) {
        getLiveShippingRate(item);
      }
    });
  }, [cartItems]);

  if (!isOpen) return null;




  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Shopping Cart ({cartItems.length})
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-6xl mb-4">🛒</div>
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => {
                const breakdown = calculatePriceBreakdown(item);
                const countryFlag = {
                  CN: '🇨🇳', IN: '🇮🇳', MX: '🇲🇽', DE: '🇩🇪', 
                  JP: '🇯🇵', KR: '🇰🇷', TH: '🇹🇭', VN: '🇻🇳',
                }[item.product.countryCode] || '🌍';

                return (
                  <div key={item.product.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">
                          {countryFlag} {item.product.country}
                        </p>
                        
                        {/* Detailed Price Breakdown */}
                        <div className="mt-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2 text-sm">💰 Price Breakdown</h4>
                          <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Base Price ({item.quantity}x ${item.product.price}):</span>
                            <span className="font-medium">${breakdown.basePrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-blue-700">
                            <span>🚚 Shipping from {item.product.country}:</span>
                            <span className="font-medium">
                               {liveShippingRates[item.product.id] !== undefined
                                   ? `$${liveShippingRates[item.product.id].toFixed(2)}`
                                   : 'Fetching...'}
                            </span>
                          </div>
                          <div className="flex justify-between text-orange-700">
                            <span>📋 Tariff ({(tariffRates[item.product.category] * 100).toFixed(0)}% - {item.product.tariffCode}):</span>
                            <span className="font-medium">${breakdown.tariff.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-bold text-gray-900 border-t border-gray-300 pt-2 mt-2 bg-white rounded px-2 py-1">
                            <span>💳 Total Price:</span>
                            <span className="text-lg text-green-600">${breakdown.total.toFixed(2)}</span>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-bold text-blue-600">${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};