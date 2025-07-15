import React from 'react';
import { TrendingUp, Shield, Globe } from 'lucide-react';

interface HeroProps {
  recommendedCountry: string;
}

export const Hero: React.FC<HeroProps> = ({ recommendedCountry }) => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Buy products globally with
            <span className="text-blue-600"> transparent pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Including shipping & tariffs upfront. No hidden fees, no surprises.
            Shop from verified sellers worldwide with confidence.
          </p>
          
          <div className="bg-white rounded-lg p-4 inline-block mb-8 shadow-sm">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-blue-600">Recommended Country:</span> {recommendedCountry}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Shopping
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">All costs calculated upfront including shipping and tariffs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Protected transactions with buyer guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Products from verified sellers in 50+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};