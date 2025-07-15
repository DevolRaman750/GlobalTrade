import React from 'react';
import {  Home, Package, HelpCircle, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'how-it-works', label: 'How It Works', icon: HelpCircle },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              currentPage === item.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};