import React from 'react';
import { FiTruck, FiClock, FiMapPin, FiAlertCircle } from 'react-icons/fi';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiTruck className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Free Shipping</h2>
            <p className="text-gray-600">
              On all orders above ₹1000. Standard delivery within 3-5 business days.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiClock className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Express Delivery</h2>
            <p className="text-gray-600">
              Get your order within 24-48 hours for an additional fee of ₹150.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiMapPin className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nationwide Coverage</h2>
            <p className="text-gray-600">
              We deliver to all major cities and most remote locations across India.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
            <p className="mb-6">
              At QuickCommerce, we strive to provide reliable and efficient shipping services to ensure 
              your purchases reach you in perfect condition and in a timely manner.
            </p>

            <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
            <p className="mb-6">
              All orders are processed within 1-2 business days after payment confirmation. 
              Orders placed on weekends or public holidays will be processed on the next business day.
            </p>

            <h3 className="text-xl font-semibold mb-3">Shipping Methods and Delivery Times</h3>
            <div className="mb-6">
              <p className="mb-4">We offer the following shipping options:</p>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Standard Shipping:</strong> 3-5 business days (Free for orders above ₹1000, ₹100 for orders below ₹1000)
                </li>
                <li className="mb-2">
                  <strong>Express Shipping:</strong> 1-2 business days (₹150)
                </li>
                <li className="mb-2">
                  <strong>Same-Day Delivery:</strong> Available in select metro cities for orders placed before 12 PM (₹250)
                </li>
              </ul>
              <p>
                Please note that delivery times are estimates and may vary depending on your location and other factors.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Tracking Your Order</h3>
            <p className="mb-6">
              Once your order is shipped, you will receive a confirmation email with a tracking number. 
              You can track your order by entering this number in the "Track Order" section of our website 
              or directly on the courier's website.
            </p>

            <h3 className="text-xl font-semibold mb-3">Shipping Restrictions</h3>
            <p className="mb-6">
              We currently only ship within India. Some remote areas may have limited shipping options 
              or longer delivery times. Certain products may have additional shipping restrictions due to 
              their nature or size.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <FiAlertCircle className="w-6 h-6 text-yellow-500 mr-3" />
                <div>
                  <p className="font-semibold text-yellow-700">Important Note</p>
                  <p className="text-yellow-600">
                    During peak seasons (like festivals) or adverse weather conditions, 
                    delivery times may be longer than usual. We appreciate your patience and understanding.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Shipping Charges</h3>
            <p className="mb-6">
              Shipping charges are calculated based on the shipping method, delivery location, and order value. 
              The exact shipping cost will be displayed at checkout before payment.
            </p>

            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="mb-6">
              If you have any questions about our shipping policy or need assistance with your order, 
              please contact our customer service team at shipping@quickcommerce.com or call us at +91 1234567890.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo; 