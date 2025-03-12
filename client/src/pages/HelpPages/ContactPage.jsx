import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiUser, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success('Your message has been sent! We will get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
      <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Have a question, feedback, or need assistance? We're here to help! 
        Fill out the form below or use one of our other contact methods to get in touch with our team.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-indigo-50">
              <div className="flex items-center">
                <FiMessageSquare className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Send Us a Message</h2>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.name ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`block w-full px-3 py-2 border ${
                        errors.subject ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="How can we help you?"
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`block w-full px-3 py-2 border ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Please describe your question or concern in detail..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6 bg-indigo-50">
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiMapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <h3 className="text-sm font-medium text-gray-900">Our Address</h3>
                    <address className="mt-1 not-italic">
                      QuickCommerce Headquarters<br />
                      123 Commerce Street<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiPhone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <h3 className="text-sm font-medium text-gray-900">Phone Numbers</h3>
                    <p className="mt-1">Customer Service: +91 1800-123-4567</p>
                    <p>Technical Support: +91 1800-765-4321</p>
                    <p>Business Inquiries: +91 80-4567-8901</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiMail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <h3 className="text-sm font-medium text-gray-900">Email Addresses</h3>
                    <p className="mt-1">Customer Support: support@quickcommerce.com</p>
                    <p>Returns & Refunds: returns@quickcommerce.com</p>
                    <p>Business Inquiries: business@quickcommerce.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-indigo-50">
              <h2 className="text-xl font-semibold text-gray-900">Business Hours</h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 8:00 PM IST</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 6:00 PM IST</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
                <p className="mt-4 text-sm">
                  <strong>Note:</strong> Our online support team is available 24/7 for urgent inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-indigo-50">
            <h2 className="text-xl font-semibold text-gray-900">Find Us</h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1623825291436!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="QuickCommerce Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage; 