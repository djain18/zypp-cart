import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart, FiHeart, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const SpringCollectionPage = () => {
  const [springProducts, setSpringProducts] = useState([]);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Filter products for spring collection
    // In a real app, you would have a tag or season field in your products data
    // Here we're just selecting random products to simulate spring collection
    const getSpringProducts = () => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 12).map(product => ({
        ...product,
        isSpringCollection: true
      }));
    };
    
    setSpringProducts(getSpringProducts());
  }, []);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
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
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4">
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Spring Collection</h1>
          <p className="text-gray-600 max-w-2xl">
            Refresh your space with our latest spring designs. Featuring bright colors, 
            natural materials, and innovative products perfect for the new season.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Spring Collection" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/70 to-transparent flex items-center">
            <div className="ml-12 max-w-lg text-white">
              <h2 className="text-3xl font-bold mb-4">Spring 2023 Collection</h2>
              <p className="mb-6">Discover our curated selection of products designed to bring freshness and vitality to your everyday life.</p>
              <Link 
                to="/products" 
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {springProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <Link to={`/products/${product.id}`}>
                <div className="relative">
                  <div className="h-56 bg-gray-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                      Spring
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                      onClick={(e) => handleAddToCart(product, e)}
                      className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
                    >
                      <FiShoppingCart />
                    </button>
                    <button 
                      onClick={(e) => addToWishlist(product, e)}
                      className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
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
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl p-8 shadow-md text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for something specific?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our complete catalog to find the perfect items for your spring refresh.
          </p>
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition"
            >
              View All Products <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpringCollectionPage; 