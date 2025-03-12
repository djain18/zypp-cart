import React from 'react';
import { FiTruck, FiClock, FiGlobe, FiPackage, FiAlertCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ShippingPolicyPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shipping Policy</h1>
      <p className="text-gray-600 mb-10 text-center">
        At QuickCommerce, we strive to provide fast, reliable shipping for all your orders.
        Below you'll find detailed information about our shipping policies and procedures.
      </p>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiTruck className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Shipping Methods</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Standard Shipping</h3>
              <p className="text-gray-600 mb-2">3-7 business days</p>
              <p className="text-gray-600">Free for orders over ₹999</p>
              <p className="text-gray-600">₹99 for orders under ₹999</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Express Shipping</h3>
              <p className="text-gray-600 mb-2">1-3 business days</p>
              <p className="text-gray-600">₹199 flat rate</p>
              <p className="text-gray-600">Available for most locations</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600 mb-2">Available in select cities</p>
              <p className="text-gray-600">₹299 flat rate</p>
              <p className="text-gray-600">Order before 12 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiClock className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Processing Times</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-600 mb-4">
            Most orders are processed and shipped within 24-48 hours after payment confirmation. 
            During sale events or holidays, processing times may be slightly longer.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Orders placed before 2 PM on business days are typically processed the same day.</li>
            <li>Orders placed after 2 PM or on weekends/holidays will be processed the next business day.</li>
            <li>Pre-order items will ship on the estimated date mentioned on the product page.</li>
            <li>Custom or personalized items may require additional processing time.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiGlobe className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">International Shipping</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-600 mb-4">
            We ship to most countries worldwide. International shipping rates and delivery times vary by location.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Delivery</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Asia (excluding India)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7-14 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Starting at ₹799</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">North America</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-21 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Starting at ₹1499</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Europe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-21 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Starting at ₹1499</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Australia & New Zealand</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14-28 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Starting at ₹1699</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rest of World</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14-30 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Starting at ₹1999</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4">
            <strong>Important:</strong> International customers are responsible for all duties, import taxes, and customs fees.
            These are not included in the order total and will be collected by the delivery carrier.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiPackage className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Tracking Your Order</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-600 mb-4">
            Once your order ships, you'll receive a confirmation email with tracking information.
            You can also track your order by:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
            <li>Logging into your account and viewing your order history</li>
            <li>Using the "Track Order" feature on our website with your order number</li>
            <li>Contacting our customer service team</li>
          </ul>
          <p className="text-gray-600">
            Please allow 24-48 hours after receiving your shipping confirmation for tracking information to become active.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiAlertCircle className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Shipping Restrictions</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-600 mb-4">
            Some products cannot be shipped to certain locations due to local regulations or logistical constraints:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Certain electronics may have shipping restrictions to specific countries</li>
            <li>Hazardous materials or products containing batteries may have special shipping requirements</li>
            <li>Some remote areas may not be serviceable by our standard shipping partners</li>
          </ul>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiAlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  If you have concerns about shipping to your location, please contact our customer service team before placing your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">
          This shipping policy was last updated on June 15, 2023.
        </p>
        <p className="text-gray-600 mt-2">
          For any questions regarding our shipping policy, please <a href="/contact" className="text-indigo-600 hover:text-indigo-500">contact us</a>.
        </p>
      </div>
    </motion.div>
  );
};

export default ShippingPolicyPage; 