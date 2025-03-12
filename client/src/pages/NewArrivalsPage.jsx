import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const NewArrivalsPage = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // In a real app, you would fetch new arrivals from an API
    // Here we're just simulating by taking the first 8 products
    const fetchNewArrivals = () => {
      // Sort products by newest (assuming they have a date field)
      // For this example, we'll just take a random selection
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setNewArrivals(shuffled.slice(0, 8));
    };

    fetchNewArrivals();
  }, []);

  const handleAddToCart = (product, e) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation(); // Prevent event bubbling
    addToCart(product);
  };

  const addToWishlist = (product, e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      // Get current wishlist from localStorage
      const wishlistJSON = localStorage.getItem('wishlist');
      const currentWishlist = wishlistJSON ? JSON.parse(wishlistJSON) : [];

      // Check if product is already in wishlist
      if (currentWishlist.some(item => item.id === product.id)) {
        toast.error('This item is already in your wishlist');
        return;
      }

      // Add product to wishlist with timestamp
      const productWithTimestamp = {
        ...product,
        addedToWishlistAt: new Date().toISOString()
      };

      const updatedWishlist = [...currentWishlist, productWithTimestamp];

      // Save to localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

      toast.success('Added to wishlist');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast.error('Failed to add to wishlist');
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Banner */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New Arrivals</h1>
            <p className="text-xl md:text-2xl mb-8">Discover our latest products and trending items</p>
            <Link
              to="/products"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* New Arrivals Products */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Just Arrived</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be the first to shop our newest products. Fresh styles added weekly to keep you ahead of the trends.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <Link to={`/products/${product.id}`}>
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition"
                      aria-label="Add to cart"
                    >
                      <FiShoppingCart />
                    </button>
                    <button
                      onClick={(e) => addToWishlist(product, e)}
                      className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-100 transition"
                      aria-label="Add to wishlist"
                    >
                      <FiHeart />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-teal-600 font-bold">₹{product.price.toLocaleString()}</span>
                    {product.rating && (
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition"
          >
            View All Products <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NewArrivalsPage; 