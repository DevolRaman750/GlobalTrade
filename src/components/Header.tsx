import React from 'react';
import { ShoppingCart, Globe, User } from 'lucide-react';
import { Navigation } from './Navigation';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onUserClick: () => void; // ✅ new
  currentPage: string;
  onPageChange: (page: string) => void;
}



export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onCartClick,
  currentPage,
  onPageChange,
  onUserClick
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onPageChange('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Globe className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">GlobalTrade</span>
          </button>

          {/* Navigation */}
          <Navigation currentPage={currentPage} onPageChange={onPageChange} />

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button onClick={onUserClick} className="p-2 text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};