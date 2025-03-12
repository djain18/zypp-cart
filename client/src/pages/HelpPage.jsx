import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

const HelpPage = () => {
  const { topic } = useParams();

  // Helper function to render the appropriate content based on the topic
  const renderContent = () => {
    switch (topic) {
      case 'payments':
        return <PaymentsHelp />;
      case 'shipping':
        return <ShippingHelp />;
      case 'returns':
        return <ReturnsHelp />;
      case 'faq':
        return <FAQHelp />;
      case 'contact':
        return <ContactHelp />;
      default:
        return <GeneralHelp />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-red-500 mr-4">
                  <FiArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-800">
                  {topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : 'Help & Support'}
                </h1>
              </div>
            </div>
            <div className="p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for general help page
const GeneralHelp = () => (
  <div>
    <p className="text-gray-600 mb-8">
      Welcome to our Help & Support Center. How can we assist you today?
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Link to="/help/payments" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Payments</h2>
        <p className="text-gray-600">Information about payment methods, refunds, and billing issues.</p>
      </Link>
      <Link to="/help/shipping" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Shipping</h2>
        <p className="text-gray-600">Details about shipping methods, delivery times, and tracking orders.</p>
      </Link>
      <Link to="/help/returns" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Returns & Refunds</h2>
        <p className="text-gray-600">Learn about our return policy and how to request a refund.</p>
      </Link>
      <Link to="/help/faq" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">FAQ</h2>
        <p className="text-gray-600">Answers to frequently asked questions about our products and services.</p>
      </Link>
    </div>
    
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <FiPhone className="text-red-500 mr-3" />
          <div>
            <p className="font-medium">Phone Support</p>
            <p className="text-gray-600">+1 (800) 123-4567 (Mon-Fri, 9am-5pm)</p>
          </div>
        </div>
        <div className="flex items-center">
          <FiMail className="text-red-500 mr-3" />
          <div>
            <p className="font-medium">Email Support</p>
            <p className="text-gray-600">support@quickcommerce.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <FiMessageCircle className="text-red-500 mr-3" />
          <div>
            <p className="font-medium">Live Chat</p>
            <p className="text-gray-600">Available 24/7 on our website</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Component for payments help page
const PaymentsHelp = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h2>
    <p className="text-gray-600 mb-6">
      We offer various payment methods to make your shopping experience convenient and secure.
    </p>
    
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Accepted Payment Methods</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Credit Cards (Visa, MasterCard, American Express)</li>
          <li>Debit Cards</li>
          <li>Net Banking</li>
          <li>UPI</li>
          <li>Wallets (PayPal, Google Pay, Apple Pay)</li>
          <li>Cash on Delivery (for eligible orders)</li>
        </ul>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Payment Security</h3>
        <p className="text-gray-600">
          All payment transactions are encrypted and secure. We use industry-standard security protocols to ensure your payment information is protected.
        </p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Billing Issues</h3>
        <p className="text-gray-600">
          If you notice any discrepancies in your billing or have questions about charges, please contact our customer support team immediately.
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Refund Process</h3>
        <p className="text-gray-600 mb-2">
          Refunds are processed within 5-7 business days after your return is approved. The refund will be credited to the original payment method used for the purchase.
        </p>
        <Link to="/help/returns" className="text-red-500 hover:underline">
          Learn more about our return and refund policy
        </Link>
      </div>
    </div>
  </div>
);

// Component for shipping help page
const ShippingHelp = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
    <p className="text-gray-600 mb-6">
      We offer reliable shipping options to ensure your orders reach you safely and on time.
    </p>
    
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Shipping Methods</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Standard Shipping (3-5 business days)</li>
          <li>Express Shipping (1-2 business days)</li>
          <li>Same-Day Delivery (available in select cities)</li>
        </ul>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Shipping Costs</h3>
        <p className="text-gray-600 mb-2">
          Shipping costs are calculated based on the delivery location, package weight, and selected shipping method.
        </p>
        <p className="text-gray-600">
          <strong>Free shipping</strong> is available on orders above ₹1000.
        </p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Order Tracking</h3>
        <p className="text-gray-600 mb-2">
          Once your order is shipped, you will receive a tracking number via email. You can track your order status by:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Visiting the "Track Order" page on our website</li>
          <li>Clicking the tracking link in your shipping confirmation email</li>
          <li>Contacting our customer support team</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">International Shipping</h3>
        <p className="text-gray-600">
          We currently ship to select international destinations. International shipping times may vary depending on customs clearance and local delivery services.
        </p>
      </div>
    </div>
  </div>
);

// Component for returns help page
const ReturnsHelp = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Returns & Refunds</h2>
    <p className="text-gray-600 mb-6">
      We want you to be completely satisfied with your purchase. If you're not, we're here to help.
    </p>
    
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Return Policy</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Returns are accepted within 30 days of delivery</li>
          <li>Items must be unused, unworn, and in original packaging</li>
          <li>Original receipt or proof of purchase is required</li>
          <li>Some items like personal care products and undergarments are not eligible for return</li>
        </ul>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">How to Return</h3>
        <ol className="list-decimal pl-5 text-gray-600 space-y-1">
          <li>Log in to your account and go to "My Orders"</li>
          <li>Select the order and items you wish to return</li>
          <li>Choose a reason for the return</li>
          <li>Select your preferred return method</li>
          <li>Print the return label (if applicable)</li>
          <li>Pack the items securely in their original packaging</li>
          <li>Drop off the package at the designated location or schedule a pickup</li>
        </ol>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Refund Process</h3>
        <p className="text-gray-600">
          Once we receive and inspect your return, we'll process your refund. The refund will be credited to your original payment method within 5-7 business days.
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Exchanges</h3>
        <p className="text-gray-600">
          If you'd like to exchange an item for a different size or color, please return the original item and place a new order for the desired item.
        </p>
      </div>
    </div>
  </div>
);

// Component for FAQ help page
const FAQHelp = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
    <p className="text-gray-600 mb-6">
      Find answers to our most commonly asked questions.
    </p>
    
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Account & Orders</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800">How do I create an account?</h4>
            <p className="text-gray-600">
              Click on the "Sign In" button in the top right corner of the website, then select "Create Account" and follow the instructions.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">How can I track my order?</h4>
            <p className="text-gray-600">
              You can track your order by visiting the "Track Order" page and entering your order number and email address.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Can I modify or cancel my order?</h4>
            <p className="text-gray-600">
              Orders can be modified or canceled within 1 hour of placing them. Please contact customer support immediately if you need to make changes.
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Products & Pricing</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800">Are the product prices inclusive of taxes?</h4>
            <p className="text-gray-600">
              Yes, all product prices include applicable taxes.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Do you offer price matching?</h4>
            <p className="text-gray-600">
              We offer price matching for identical products sold by authorized retailers. Please contact customer support with details.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">How do I know if a product is in stock?</h4>
            <p className="text-gray-600">
              Product availability is indicated on the product page. If an item is out of stock, you can sign up for notifications when it becomes available.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Technical Issues</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800">The website is not loading properly. What should I do?</h4>
            <p className="text-gray-600">
              Try clearing your browser cache and cookies, or use a different browser. If the issue persists, please contact our technical support.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">I forgot my password. How do I reset it?</h4>
            <p className="text-gray-600">
              Click on "Sign In," then select "Forgot Password" and follow the instructions to reset your password.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Why am I not receiving emails from you?</h4>
            <p className="text-gray-600">
              Please check your spam or junk folder. Add our email address to your contacts to ensure you receive our communications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Component for contact help page
const ContactHelp = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
    <p className="text-gray-600 mb-6">
      We're here to help! Reach out to us through any of the following channels.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <FiPhone className="text-red-500 mr-3 w-6 h-6" />
          <h3 className="text-lg font-medium text-gray-800">Phone Support</h3>
        </div>
        <p className="text-gray-600 mb-2">Customer Service: +1 (800) 123-4567</p>
        <p className="text-gray-600 mb-2">Technical Support: +1 (800) 765-4321</p>
        <p className="text-gray-500 text-sm">Hours: Monday-Friday, 9am-5pm</p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <FiMail className="text-red-500 mr-3 w-6 h-6" />
          <h3 className="text-lg font-medium text-gray-800">Email Support</h3>
        </div>
        <p className="text-gray-600 mb-2">General Inquiries: info@quickcommerce.com</p>
        <p className="text-gray-600 mb-2">Customer Support: support@quickcommerce.com</p>
        <p className="text-gray-600">Technical Support: tech@quickcommerce.com</p>
      </div>
    </div>
    
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Send Us a Message</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Visit Us</h3>
      <p className="text-gray-600 mb-2">
        <strong>QuickCommerce Headquarters</strong><br />
        123 Commerce Street<br />
        Shopping City, SC 12345<br />
        United States
      </p>
      <p className="text-gray-500 text-sm">
        Office Hours: Monday-Friday, 9am-5pm
      </p>
    </div>
  </div>
);

export default HelpPage; 