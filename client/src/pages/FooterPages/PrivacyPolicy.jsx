import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="mb-6">
              Last Updated: June 1, 2023
            </p>

            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              QuickCommerce ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal information. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                <strong>Personal Information:</strong> Name, email address, phone number, shipping address, 
                billing address, and payment information.
              </li>
              <li className="mb-2">
                <strong>Account Information:</strong> Username, password, purchase history, and preferences.
              </li>
              <li className="mb-2">
                <strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.
              </li>
              <li className="mb-2">
                <strong>Usage Information:</strong> Pages visited, products viewed, time spent on the site, 
                and interaction with content.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Processing and fulfilling your orders</li>
              <li className="mb-2">Creating and managing your account</li>
              <li className="mb-2">Providing customer support</li>
              <li className="mb-2">Sending transactional emails and order updates</li>
              <li className="mb-2">Personalizing your shopping experience</li>
              <li className="mb-2">Improving our website and services</li>
              <li className="mb-2">Marketing and promotional communications (with your consent)</li>
              <li className="mb-2">Detecting and preventing fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="mb-6">
              We may share your information with third parties in the following situations:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                <strong>Service Providers:</strong> We may share your information with third-party service 
                providers who perform services on our behalf, such as payment processing, order fulfillment, 
                data analysis, and customer service.
              </li>
              <li className="mb-2">
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by 
                law or in response to valid requests by public authorities.
              </li>
              <li className="mb-2">
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of 
                all or a portion of our assets, your information may be transferred as part of that transaction.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">Access to your personal information</li>
              <li className="mb-2">Correction of inaccurate or incomplete information</li>
              <li className="mb-2">Deletion of your personal information</li>
              <li className="mb-2">Restriction of processing of your personal information</li>
              <li className="mb-2">Data portability</li>
              <li className="mb-2">Objection to processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@quickcommerce.com
              <br />
              Phone: +91 1234567890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 