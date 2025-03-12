import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHelpCircle, FiShoppingBag, FiTruck, FiRefreshCw, FiCreditCard, FiUser } from 'react-icons/fi';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const helpCategories = [
    {
      title: 'Orders',
      icon: <FiShoppingBag className="w-8 h-8 text-indigo-600" />,
      topics: [
        { title: 'How to place an order', link: '/faq#place-order' },
        { title: 'Order cancellation', link: '/faq#cancel-order' },
        { title: 'Order status and tracking', link: '/track-order' },
        { title: 'Payment issues', link: '/faq#payment-issues' }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: <FiTruck className="w-8 h-8 text-indigo-600" />,
      topics: [
        { title: 'Shipping policy', link: '/shipping' },
        { title: 'Delivery timeframes', link: '/shipping#timeframes' },
        { title: 'International shipping', link: '/shipping#international' },
        { title: 'Shipping charges', link: '/shipping#charges' }
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: <FiRefreshCw className="w-8 h-8 text-indigo-600" />,
      topics: [
        { title: 'Return policy', link: '/returns' },
        { title: 'How to return an item', link: '/returns#process' },
        { title: 'Refund process', link: '/returns#refunds' },
        { title: 'Exchanges', link: '/returns#exchanges' }
      ]
    },
    {
      title: 'Payment',
      icon: <FiCreditCard className="w-8 h-8 text-indigo-600" />,
      topics: [
        { title: 'Payment methods', link: '/faq#payment-methods' },
        { title: 'Secure payment', link: '/faq#secure-payment' },
        { title: 'EMI options', link: '/faq#emi' },
        { title: 'Invoices and receipts', link: '/faq#invoices' }
      ]
    },
    {
      title: 'Account',
      icon: <FiUser className="w-8 h-8 text-indigo-600" />,
      topics: [
        { title: 'Create an account', link: '/faq#create-account' },
        { title: 'Update account information', link: '/faq#update-account' },
        { title: 'Reset password', link: '/faq#reset-password' },
        { title: 'Privacy concerns', link: '/privacy' }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would search through help articles
    // For now, we'll just redirect to the FAQ page
    window.location.href = `/faq?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>
        
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">How can we help you today?</h2>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help topics..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        
        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-xl font-semibold ml-3">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>
                    <Link
                      to={topic.link}
                      className="text-indigo-600 hover:text-indigo-800 hover:underline flex items-center"
                    >
                      <FiHelpCircle className="mr-2" />
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Still need help?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              Contact Support
            </Link>
            <a
              href="tel:+911234567890"
              className="text-indigo-600 hover:text-indigo-800 hover:underline flex items-center"
            >
              Call Us: +91 1234567890
            </a>
            <a
              href="mailto:support@quickcommerce.com"
              className="text-indigo-600 hover:text-indigo-800 hover:underline flex items-center"
            >
              Email: support@quickcommerce.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 