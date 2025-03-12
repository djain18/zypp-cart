import React from 'react';
import { FiRefreshCw, FiCreditCard, FiCheckCircle, FiXCircle, FiAlertTriangle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ReturnPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Return & Refund Policy</h1>
      <p className="text-gray-600 mb-10 text-center">
        We want you to be completely satisfied with your purchase. If you're not, we're here to help.
        Please read our return policy carefully to understand the process and requirements.
      </p>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiRefreshCw className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Return Eligibility</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-600 mb-4">
            You may return most new, unopened items within 30 days of delivery for a full refund.
            We also accept returns of opened items within 7 days if they are defective or damaged.
          </p>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">To be eligible for a return, your item must be:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li>In the same condition that you received it</li>
            <li>In the original packaging with all tags attached</li>
            <li>Accompanied by the original receipt or proof of purchase</li>
            <li>Returned within 30 days of the delivery date</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h4 className="flex items-center text-green-800 font-medium mb-2">
                <FiCheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Items Eligible for Return
              </h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Clothing and accessories</li>
                <li>Electronics (unopened)</li>
                <li>Home decor items</li>
                <li>Kitchenware</li>
                <li>Toys and games</li>
                <li>Books and media</li>
              </ul>
            </div>

            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h4 className="flex items-center text-red-800 font-medium mb-2">
                <FiXCircle className="h-5 w-5 mr-2 text-red-600" />
                Items Not Eligible for Return
              </h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Perishable goods (food, flowers, etc.)</li>
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Personal care items (opened)</li>
                <li>Intimate apparel</li>
                <li>Custom or personalized items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <div className="flex items-center">
            <FiCreditCard className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Refunds & Exchanges</h2>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Refunds</h3>
          <p className="text-gray-600 mb-4">
            Once we receive and inspect your return, we will send you an email to notify you that we have received your returned item.
            We will also notify you of the approval or rejection of your refund.
          </p>
          <p className="text-gray-600 mb-6">
            If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
            Please note that depending on your credit card company, it may take an additional 2-10 business days for the refund to appear on your statement.
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-3">Exchanges</h3>
          <p className="text-gray-600 mb-4">
            If you need to exchange an item for the same product, send us an email at returns@quickcommerce.com and we will guide you through the process.
            For exchanges of different products, please return the original item and place a new order for the desired product.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiAlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Late or Missing Refunds:</strong> If you haven't received a refund yet, first check your bank account again.
                  Then contact your credit card company, it may take some time before your refund is officially posted.
                  Next, contact your bank. There is often some processing time before a refund is posted.
                  If you've done all of this and you still have not received your refund, please contact our customer service team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <h2 className="text-xl font-semibold text-gray-900">Return Process</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <ol className="list-decimal pl-5 text-gray-600 space-y-4">
            <li>
              <strong>Initiate a Return:</strong> Contact our customer service team at returns@quickcommerce.com or through the "Return Items" section in your account to request a return authorization.
            </li>
            <li>
              <strong>Packaging:</strong> Pack the item securely in its original packaging along with all accessories, manuals, and tags.
            </li>
            <li>
              <strong>Return Shipping:</strong> You can choose one of the following options:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Use our prepaid return shipping label (shipping cost will be deducted from your refund)</li>
                <li>Ship the item back using your preferred carrier (please obtain a tracking number)</li>
                <li>For large items, we can arrange a pickup service for an additional fee</li>
              </ul>
            </li>
            <li>
              <strong>Processing:</strong> Once we receive your return, we'll inspect the item and notify you of the status of your refund.
            </li>
            <li>
              <strong>Refund:</strong> If approved, your refund will be processed to your original payment method.
            </li>
          </ol>

          <div className="mt-6 p-4 border border-gray-200 rounded-lg">
            <h4 className="text-lg font-medium text-gray-900 mb-2">Return Address</h4>
            <address className="text-gray-600 not-italic">
              QuickCommerce Returns Department<br />
              123 Commerce Street<br />
              Bangalore, Karnataka 560001<br />
              India
            </address>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 bg-indigo-50">
          <h2 className="text-xl font-semibold text-gray-900">Damaged or Defective Items</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-600 mb-4">
            If you receive a damaged or defective item, please contact us immediately at support@quickcommerce.com or call our customer service at 1-800-123-4567.
            Please include photos of the damaged item and packaging to help us resolve your issue quickly.
          </p>
          <p className="text-gray-600 mb-4">
            For damaged or defective items, we offer the following options:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Full refund including shipping costs</li>
            <li>Replacement of the same item (subject to availability)</li>
            <li>Store credit for the full amount plus 10% as a goodwill gesture</li>
          </ul>

          <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="text-lg font-medium text-indigo-900 mb-2">Our Guarantee</h4>
            <p className="text-gray-600">
              We stand behind the quality of our products. If you're not completely satisfied with your purchase for any reason,
              we're here to help make it right. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">
          This return policy was last updated on June 15, 2023.
        </p>
        <p className="text-gray-600 mt-2">
          For any questions regarding our return policy, please <a href="/contact" className="text-indigo-600 hover:text-indigo-500">contact us</a>.
        </p>
      </div>
    </motion.div>
  );
};

export default ReturnPolicyPage; 