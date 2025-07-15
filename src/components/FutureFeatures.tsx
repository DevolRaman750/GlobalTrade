import React from 'react';
import { User, Store, Brain, Star, TrendingUp, Shield, DollarSign, Database, Globe2 } from 'lucide-react';

export const FutureFeatures: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-600">Advanced features to enhance your global shopping experience</p>
        </div>

        {/* API Integration Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔌 API Integrations</h3>
            <p className="text-lg text-gray-600">Real-time data from trusted global sources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-lg p-3 mr-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Currency Converter</h4>
              </div>
              <p className="text-gray-600 mb-4">Real-time currency conversion with live exchange rates</p>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-gray-700">
                  <div className="flex justify-between mb-2">
                    <span>USD → EUR:</span>
                    <span className="font-medium">0.85</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>USD → JPY:</span>
                    <span className="font-medium">110.25</span>
                  </div>
                  <div className="text-xs text-green-600 mt-2">
                    ✓ Connected to Fixer.io API
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Tariff Database</h4>
              </div>
              <p className="text-gray-600 mb-4">Accurate tariff rates from government databases</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-gray-700">
                  <div className="flex justify-between mb-2">
                    <span>Electronics:</span>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Clothing:</span>
                    <span className="font-medium">8%</span>
                  </div>
                  <div className="text-xs text-blue-600 mt-2">
                    ✓ Connected to trade.gov API
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-lg p-3 mr-4">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Shipping Rates</h4>
              </div>
              <p className="text-gray-600 mb-4">Live shipping rates from major carriers</p>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-sm text-gray-700">
                  <div className="flex justify-between mb-2">
                    <span>DHL Express:</span>
                    <span className="font-medium">$25.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>FedEx Intl:</span>
                    <span className="font-medium">$22.50</span>
                  </div>
                  <div className="text-xs text-purple-600 mt-2">
                    ✓ Connected to EasyPost API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Accounts */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">User Accounts</h3>
            </div>
            <p className="text-gray-600 mb-4">Complete user profiles with order tracking dashboard, wishlist, and purchase history.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Order tracking dashboard</li>
                <li>• Wishlist management</li>
                <li>• Purchase history</li>
                <li>• Personalized recommendations</li>
              </ul>
              <div className="mt-3 bg-blue-50 rounded p-3">
                <div className="text-xs text-blue-700">
                  <div className="font-medium mb-1">Sample Dashboard:</div>
                  <div>📦 3 Active Orders</div>
                  <div>❤️ 12 Wishlist Items</div>
                  <div>🛍️ 45 Past Purchases</div>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Portal */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-lg p-3 mr-4">
                <Store className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Seller Portal</h3>
            </div>
            <p className="text-gray-600 mb-4">Comprehensive seller dashboard for international merchants to list and manage products.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product listing management</li>
                <li>• Inventory tracking</li>
                <li>• Order fulfillment</li>
                <li>• Analytics dashboard</li>
              </ul>
              <div className="mt-3 bg-green-50 rounded p-3">
                <div className="text-xs text-green-700">
                  <div className="font-medium mb-1">Global Sellers:</div>
                  <div>🇨🇳 China: 1,250 sellers</div>
                  <div>🇮🇳 India: 890 sellers</div>
                  <div>🇲🇽 Mexico: 340 sellers</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-lg p-3 mr-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
            </div>
            <p className="text-gray-600 mb-4">Smart product recommendations based on your preferences and best deals from different countries.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized product suggestions</li>
                <li>• Cross-country price comparison</li>
                <li>• Deal alerts</li>
                <li>• Trend analysis</li>
              </ul>
              <div className="mt-3 bg-purple-50 rounded p-3">
                <div className="text-xs text-purple-700">
                  <div className="font-medium mb-1">Best Deals for You:</div>
                  <div>🇮🇳 Electronics: 25% cheaper</div>
                  <div>🇲🇽 Textiles: 18% cheaper</div>
                  <div>🇨🇳 Tech: 30% cheaper</div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews & Ratings */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 rounded-lg p-3 mr-4">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Trust & Reviews</h3>
            </div>
            <p className="text-gray-600 mb-4">Comprehensive review system with country-specific ratings and seller verification.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product reviews & ratings</li>
                <li>• Seller verification badges</li>
                <li>• Country-specific insights</li>
                <li>• Quality assurance scores</li>
              </ul>
            </div>
          </div>

          {/* Advanced Analytics */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-lg p-3 mr-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Market Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">Real-time market insights, price trends, and optimal buying recommendations.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Price trend analysis</li>
                <li>• Market demand insights</li>
                <li>• Seasonal buying guides</li>
                <li>• Currency fluctuation alerts</li>
              </ul>
            </div>
          </div>

          {/* Advanced Security */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 rounded-lg p-3 mr-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Enhanced Security</h3>
            </div>
            <p className="text-gray-600 mb-4">Advanced fraud protection and secure payment processing with buyer guarantees.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fraud detection system</li>
                <li>• Buyer protection guarantee</li>
                <li>• Secure escrow service</li>
                <li>• Identity verification</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🔌 Live API Integration Status</h3>
          <p className="text-gray-600 mb-6">
            Real-time connections to global trade APIs for accurate pricing and data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">🚚 Shipping APIs</h4>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-600 mb-3">EasyPost, ShipEngine, DHL, FedEx</p>
              <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-1">
                ✓ Connected & Active
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">📊 Tariff Database</h4>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-600 mb-3">trade.gov, customsdata.io, WTO</p>
              <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-1">
                ✓ Real-time Updates
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">💱 Currency APIs</h4>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-600 mb-3">Fixer.io, Open Exchange Rates</p>
              <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-1">
                ✓ Live Exchange Rates
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-4">💱 Live Currency Converter</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">$1.00</div>
                <div className="text-sm text-gray-600">USD (Base)</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">€0.85</div>
                <div className="text-sm text-gray-600">EUR</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">¥110.25</div>
                <div className="text-sm text-gray-600">JPY</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Last updated: 2 minutes ago • Powered by Fixer.io API
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};