import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including Credit/Debit cards, UPI, Net Banking, and Cash on Delivery (COD). All online payments are processed through secure payment gateways.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some categories like personal care items and undergarments are not eligible for return due to hygiene reasons.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 3-5 business days for most locations in India. For remote areas, it might take 5-7 business days. Express delivery options are available for select products and locations.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Currently, we only ship within India. We plan to expand our services to international locations in the future.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status by entering this number in the "Track Order" section of our website or app.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Orders can be cancelled before they are shipped. Once shipped, they will need to go through the return process. Cancellation requests can be made through your account or by contacting customer service.'
    },
    {
      question: 'Are the products authentic?',
      answer: 'Yes, all products sold on QuickCommerce are 100% authentic. We source directly from authorized distributors and brands. We have a strict no-counterfeit policy.'
    },
    {
      question: 'Do you offer warranty on products?',
      answer: 'Warranty terms vary by product and brand. Warranty information is mentioned in the product description. We honor all manufacturer warranties and provide necessary support for claims.'
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can reach our customer service team through multiple channels: email (support@quickcommerce.com), phone (1800-123-4567), or chat support on our website. We are available Monday to Saturday, 9 AM to 6 PM.'
    },
    {
      question: 'Do you have a loyalty program?',
      answer: 'Yes, we have a QuickRewards program where you earn points on every purchase. These points can be redeemed for discounts on future purchases. Premium members get additional benefits like free shipping and early access to sales.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>

        <div className="bg-white rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            If you cannot find answer to your question in our FAQ, you can always contact us.
            We will answer to you shortly!
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 