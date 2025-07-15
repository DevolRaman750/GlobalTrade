import React from 'react';
import { Mail, MapPin, Clock, Phone, MessageCircle, Users } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📞 Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you're a buyer, seller, or potential partner — feel free to reach out.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* General Inquiries */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">📬 General Inquiries</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-blue-600">support@globaltradehub.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Boston, Massachusetts, USA</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Support Hours</div>
                    <div className="text-gray-600">Monday to Friday</div>
                    <div className="text-gray-600">9:00 AM – 6:00 PM (EST)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Partnerships */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">🤝 Business Partnerships</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Interested in listing products or integrating with our platform?
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Partner With Us</div>
                    <div className="text-green-600">partnerships@globaltradehub.com</div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Partnership Opportunities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Seller onboarding</li>
                    <li>• API integrations</li>
                    <li>• Bulk product listings</li>
                    <li>• White-label solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 rounded-lg p-3 mr-4">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">🛠️ Technical Support</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Facing issues with your account or a transaction? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Chat Support</div>
                    <div className="text-purple-600">Available via Help Center</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Phone Support</div>
                    <div className="text-purple-600">+1-800-555-TRADE</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Common Issues:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Order tracking</li>
                    <li>• Payment problems</li>
                    <li>• Account access</li>
                    <li>• Shipping inquiries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Have a specific question? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership Opportunity</option>
                <option>Seller Application</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you calculate shipping and tariff costs?
              </h3>
              <p className="text-gray-600">
                We use real-time data from shipping carriers and government tariff databases to provide accurate estimates. Final costs are confirmed before checkout.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I track my international orders?
              </h3>
              <p className="text-gray-600">
                Yes! Once your order ships, you'll receive tracking information and can monitor your package's journey in real-time through our platform.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I become a seller on your platform?
              </h3>
              <p className="text-gray-600">
                Contact our partnerships team at partnerships@globaltradehub.com. We'll guide you through our seller verification process and help you get started.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers. All transactions are secured with SSL encryption and fraud protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};