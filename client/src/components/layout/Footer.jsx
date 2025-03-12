import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';
import { FcShop } from 'react-icons/fc';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Shop section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>All Products</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>New Arrivals</Link></li>
              <li><Link to="/collections/spring" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Spring Collection</Link></li>
              <li><Link to="/offers" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Offers</Link></li>
            </ul>
          </div>
          
          {/* Customer Service section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Returns</Link></li>
              <li><Link to="/track-order" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Track Order</Link></li>
            </ul>
          </div>
          
          {/* Help section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Help Center</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>Terms of Service</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition" onClick={scrollToTop}>About Us</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FcShop className="text-3xl mr-2" />
            <span className="text-xl font-bold">ZyppCart</span>
          </div>
          
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ZyppCart. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <FiFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <FiTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <FiInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <FiYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 