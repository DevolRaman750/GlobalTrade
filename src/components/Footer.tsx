import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">GlobalTrade</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted platform for global commerce with transparent pricing and secure transactions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Boston, MA, USA</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@globaltradehub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1-800-555-TRADE</span>
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-semibold mb-4">Shop Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">📱 Electronics</li>
              <li className="hover:text-white cursor-pointer transition-colors">👕 Clothing</li>
              <li className="hover:text-white cursor-pointer transition-colors">🏠 Home & Garden</li>
              <li className="hover:text-white cursor-pointer transition-colors">🚗 Automotive</li>
              <li className="hover:text-white cursor-pointer transition-colors">⚽ Sports</li>
              <li className="hover:text-white cursor-pointer transition-colors">💄 Beauty</li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold mb-4">Shop by Country</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">🇨🇳 China</li>
              <li className="hover:text-white cursor-pointer transition-colors">🇮🇳 India</li>
              <li className="hover:text-white cursor-pointer transition-colors">🇲🇽 Mexico</li>
              <li className="hover:text-white cursor-pointer transition-colors">🇩🇪 Germany</li>
              <li className="hover:text-white cursor-pointer transition-colors">🇯🇵 Japan</li>
              <li className="hover:text-white cursor-pointer transition-colors">🇰🇷 South Korea</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support & Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping Info</li>
              <li className="hover:text-white cursor-pointer transition-colors">Returns & Refunds</li>
              <li className="hover:text-white cursor-pointer transition-colors">Track Your Order</li>
              <li className="hover:text-white cursor-pointer transition-colors">Seller Portal</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 GlobalTrade. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};