import React from 'react';
import { Search, Filter, DollarSign, Globe, Zap, ShieldCheck, Store } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🌍 How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our Global Trade Platform — a marketplace that connects buyers with trusted sellers across the world, offering transparent pricing and seamless international shopping.
          </p>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Step-by-Step Process</h2>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <h3 className="text-2xl font-bold text-gray-900">Explore Global Products</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Browse our catalog of products sourced from verified sellers in different countries. Use filters or the Country Toggle to view products from specific regions.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Available Countries</div>
                    <div className="flex justify-center space-x-2">
                      <span>🇨🇳</span><span>🇮🇳</span><span>🇲🇽</span><span>🇩🇪</span><span>🇯🇵</span><span>🇰🇷</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <h3 className="text-2xl font-bold text-gray-900">Search & Filter with Ease</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Find exactly what you're looking for with our smart search and category filters. You can sort by product type, country of origin, and more.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Search className="h-12 w-12 text-green-600" />
                    <Filter className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="text-center text-gray-600">
                    Smart search across 10,000+ products
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <h3 className="text-2xl font-bold text-gray-900">View Transparent Pricing</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">
                  Each product page shows:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Base Price
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Estimated Shipping Cost
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Tariff & Import Duty Estimate
                  </li>
                </ul>
                <p className="text-gray-600 text-lg mt-4">
                  So you know the final cost before checkout — no surprises!
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <DollarSign className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base Price:</span>
                      <span>$89.99</span>
                    </div>
                    <div className="flex justify-between text-blue-600">
                      <span>Shipping:</span>
                      <span>$15.99</span>
                    </div>
                    <div className="flex justify-between text-orange-600">
                      <span>Tariff (12%):</span>
                      <span>$10.80</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total:</span>
                      <span>$116.78</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                  <h3 className="text-2xl font-bold text-gray-900">Customize Your Shopping by Country</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Want to support a specific country or compare international pricing? Use our Toggle by Country feature to adjust product visibility.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <Globe className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Filter by Country</div>
                    <select className="border border-gray-300 rounded-lg px-4 py-2">
                      <option>🇮🇳 India</option>
                      <option>🇨🇳 China</option>
                      <option>🇲🇽 Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">5</div>
                  <h3 className="text-2xl font-bold text-gray-900">Smart Recommendations</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Based on your location and preferences, we show you the best-fit countries and the best deals to save you time and money.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <Zap className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Recommended for you</div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-red-600">🇮🇳 India</div>
                      <div className="text-sm text-gray-600">Best deals & shipping rates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">6</div>
                  <h3 className="text-2xl font-bold text-gray-900">Secure Checkout & Tracking</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Add products to your cart and experience a secure, intuitive checkout experience. You'll also be able to track your international orders in real time.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <ShieldCheck className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Secure & Protected</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>✓ SSL Encrypted</div>
                      <div>✓ Buyer Protection</div>
                      <div>✓ Real-time Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">7</div>
                  <h3 className="text-2xl font-bold text-gray-900">For Sellers: List Your Products Globally</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Sellers from around the world can list their products, set shipping options, and reach a global audience. Join us and grow your business!
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <Store className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Seller Benefits</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>🌍 Global Reach</div>
                      <div>📊 Analytics Dashboard</div>
                      <div>💰 Competitive Fees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of buyers and sellers in our global marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Shopping
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Become a Seller
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};