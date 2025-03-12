import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiTrash2, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
      } catch (error) {
        console.error('Error loading wishlist:', error);
        setWishlist([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadWishlist();

    // Listen for storage events (if wishlist is updated in another tab)
    window.addEventListener('storage', loadWishlist);
    
    // Listen for custom wishlist update events
    window.addEventListener('wishlistUpdated', loadWishlist);
    
    return () => {
      window.removeEventListener('storage', loadWishlist);
      window.removeEventListener('wishlistUpdated', loadWishlist);
    };
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    // Dispatch event to notify other components
    window.dispatchEvent(new Event('wishlistUpdated'));
    
    toast.success('Item removed from wishlist');
  };

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success('Item added to cart');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <FiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">
            Add items to your wishlist to keep track of products you're interested in.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Link to={`/products/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                </Link>
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <FiTrash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
              
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                  {product.inStock ? (
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">In Stock</span>
                  ) : (
                    <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full">Out of Stock</span>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => moveToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium ${
                      product.inStock 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } transition-colors`}
                  >
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Added on {new Date(product.addedToWishlistAt || Date.now()).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default WishlistPage; 