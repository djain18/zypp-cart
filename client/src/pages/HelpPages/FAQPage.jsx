import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, browse our products, select the items you want to purchase, add them to your cart, and proceed to checkout. You\'ll need to provide shipping information and payment details to complete your order.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and UPI payments. All transactions are secure and encrypted for your safety.'
    },
    {
      question: 'How long will it take to receive my order?',
      answer: 'Delivery times vary depending on your location and the items ordered. Typically, orders are processed within 1-2 business days and delivered within 3-7 business days for domestic orders. International shipping may take 7-14 business days.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be in their original condition with tags attached and original packaging. Some items like personal care products and undergarments cannot be returned for hygiene reasons.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a confirmation email with a tracking number. You can use this number on our website under "Order Tracking" or directly on the courier\'s website to track your package.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Please note that customers are responsible for any customs duties or taxes that may apply.'
    },
    {
      question: 'How do I cancel my order?',
      answer: 'If you need to cancel your order, please contact our customer service team as soon as possible. Orders can typically be canceled if they haven\'t been processed for shipping yet. Once an order has shipped, you\'ll need to follow our return process.'
    },
    {
      question: 'Are there any discounts for bulk orders?',
      answer: 'Yes, we offer special pricing for bulk orders. Please contact our sales team at sales@quickcommerce.com with details of your requirements for a custom quote.'
    },
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking on the "Sign In" button in the top right corner of our website and selecting "Create Account". You\'ll need to provide your email address and create a password. Having an account makes checkout faster and allows you to track orders.'
    },
    {
      question: 'What should I do if I receive a damaged item?',
      answer: 'If you receive a damaged item, please take photos of the damage and contact our customer service team within 48 hours of delivery. We\'ll arrange for a replacement or refund depending on your preference and product availability.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-10 text-center">
        Find answers to common questions about our products, ordering, shipping, and more.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="h-5 w-5 text-indigo-600" />
              ) : (
                <FiChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {openIndex === index && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 bg-gray-50"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-4">
          If you couldn't find the answer to your question, our customer support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/contact" 
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Contact Support
          </a>
          <a 
            href="tel:+1800123456" 
            className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Call Us: 1-800-123-456
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQPage; 