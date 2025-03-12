import React from 'react';
import { FiRefreshCw, FiCheckCircle, FiXCircle, FiHelpCircle } from 'react-icons/fi';

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Returns & Refunds Policy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiRefreshCw className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">30-Day Returns</h2>
            <p className="text-gray-600">
              Return most items within 30 days of delivery for a full refund.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiCheckCircle className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Easy Process</h2>
            <p className="text-gray-600">
              Initiate returns through your account or contact our customer service.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiHelpCircle className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Dedicated Support</h2>
            <p className="text-gray-600">
              Our team is available to assist you with any return or refund queries.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
            <p className="mb-6">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, 
              we offer a simple returns process to ensure your shopping experience remains positive.
            </p>

            <h3 className="text-xl font-semibold mb-3">Return Eligibility</h3>
            <p className="mb-4">To be eligible for a return, your item must be:</p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Unused and in the same condition that you received it</li>
              <li className="mb-2">In the original packaging</li>
              <li className="mb-2">Returned within 30 days of the delivery date</li>
              <li className="mb-2">Accompanied by the receipt or proof of purchase</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Non-Returnable Items</h3>
            <p className="mb-4">The following items cannot be returned:</p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Personal care items (for hygiene reasons)</li>
              <li className="mb-2">Intimate apparel</li>
              <li className="mb-2">Downloadable software products</li>
              <li className="mb-2">Gift cards</li>
              <li className="mb-2">Perishable goods</li>
              <li className="mb-2">Items marked as "Final Sale" or "Non-Returnable"</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Return Process</h3>
            <ol className="list-decimal list-inside mb-6">
              <li className="mb-2">
                Log in to your account and go to the "My Orders" section
              </li>
              <li className="mb-2">
                Find the order containing the item you wish to return and click on "Return Item"
              </li>
              <li className="mb-2">
                Select the item(s) you want to return and provide a reason for the return
              </li>
              <li className="mb-2">
                Choose your preferred refund method
              </li>
              <li className="mb-2">
                Print the return shipping label (if provided) or arrange for return shipping
              </li>
              <li className="mb-2">
                Pack the item securely in its original packaging along with the return form
              </li>
              <li className="mb-2">
                Ship the package to the address provided in the return instructions
              </li>
            </ol>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <div className="flex">
                <FiXCircle className="w-6 h-6 text-red-500 mr-3" />
                <div>
                  <p className="font-semibold text-red-700">Important</p>
                  <p className="text-red-600">
                    Items returned without following the proper return process may not be eligible for a refund.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Refunds</h3>
            <p className="mb-6">
              Once we receive and inspect your return, we will send you an email to notify you that we have 
              received your returned item. We will also notify you of the approval or rejection of your refund.
              <br /><br />
              If approved, your refund will be processed, and a credit will automatically be applied to your 
              original method of payment within 5-7 business days. For payment made through UPI or net banking, 
              the refund will be processed to your bank account.
            </p>

            <h3 className="text-xl font-semibold mb-3">Return Shipping</h3>
            <p className="mb-6">
              You will be responsible for paying the return shipping costs unless the item is defective or 
              damaged. The shipping costs are non-refundable. If you receive a refund, the cost of return 
              shipping will be deducted from your refund.
            </p>

            <h3 className="text-xl font-semibold mb-3">Exchanges</h3>
            <p className="mb-6">
              If you need to exchange an item for the same product in a different size or color, please 
              return the original item and place a new order for the desired item.
            </p>

            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="mb-6">
              If you have any questions about our returns policy, please contact our customer service team at:
              <br />
              Email: returns@quickcommerce.com
              <br />
              Phone: +91 1234567890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy; 