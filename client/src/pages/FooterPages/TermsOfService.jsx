import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="mb-6">
              Last Updated: June 1, 2023
            </p>

            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              Welcome to QuickCommerce. These Terms of Service ("Terms") govern your use of our website 
              and services. By accessing or using our website, you agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
            <p className="mb-6">
              To access certain features of our website, you may need to register for an account. 
              You agree to provide accurate, current, and complete information during the registration 
              process and to update such information to keep it accurate, current, and complete. 
              You are responsible for safeguarding your password and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Products and Pricing</h2>
            <p className="mb-6">
              We strive to provide accurate product descriptions and pricing information. However, 
              we do not warrant that product descriptions, pricing, or other content on our website 
              is accurate, complete, reliable, current, or error-free. In the event of a pricing error, 
              we reserve the right to cancel any orders placed for products that were incorrectly priced.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Orders and Payment</h2>
            <p className="mb-6">
              When you place an order, you offer to purchase the product at the price and terms indicated. 
              We reserve the right to accept or decline your order for any reason. Once we accept your order, 
              we will send you an order confirmation. Payment must be made at the time of placing the order 
              using one of our accepted payment methods.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
            <p className="mb-6">
              We will make reasonable efforts to deliver products within the estimated delivery time. 
              However, delivery times are not guaranteed, and delays may occur due to factors beyond our control. 
              Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Returns and Refunds</h2>
            <p className="mb-6">
              Our return and refund policy is outlined in our separate Returns Policy. By making a purchase, 
              you agree to be bound by the terms of our Returns Policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-6">
              All content on our website, including text, graphics, logos, images, and software, 
              is the property of QuickCommerce or its content suppliers and is protected by copyright, 
              trademark, and other intellectual property laws. You may not reproduce, distribute, modify, 
              display, or create derivative works of any content without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="mb-6">
              You agree not to use our website for any unlawful purpose or in any way that could damage, 
              disable, overburden, or impair our website or interfere with any other party's use of our website. 
              You also agree not to attempt to gain unauthorized access to any part of our website, other accounts, 
              or computer systems.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by law, QuickCommerce shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, 
              resulting from your use of our website or services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by 
              posting the new Terms on this page and updating the "Last Updated" date. Your continued use of 
              our website after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: legal@quickcommerce.com
              <br />
              Phone: +91 1234567890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 