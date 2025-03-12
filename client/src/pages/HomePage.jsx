import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTruck, FiCreditCard, FiPackage, FiHeadphones, FiSearch, FiArrowRight, FiShoppingCart, FiHeart, FiChevronRight } from 'react-icons/fi';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Get random products for featured section
    const getRandomProducts = () => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 8);
    };

    setFeaturedProducts(getRandomProducts());

    // Add click outside listener for search suggestions
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update suggestions when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
      setSearchSuggestions(filteredProducts);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Get trending products (next 8 products)
  const trendingProducts = products.slice(4, 12);

  // Get new arrivals (last 4 products)
  const newArrivals = products.slice(12, 16);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productId) => {
    navigate(`/products/${productId}`);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const addToWishlist = (product) => {
    try {
      // Get current wishlist
      const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      // Check if product is already in wishlist
      if (currentWishlist.some(item => item.id === product.id)) {
        toast.info('This item is already in your wishlist');
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

      // Dispatch event to notify other components
      window.dispatchEvent(new Event('wishlistUpdated'));

      toast.success('Added to wishlist');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      toast.error('Failed to add to wishlist');
    }
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation(); // Prevent event bubbling
    addToCart(product);
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

  // Category images with proper URLs
  const categoryImages = {
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    homeLiving: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    beauty: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
  };

  const categories = [
    { name: "Electronics", path: "/category/electronics", image: categoryImages.electronics },
    { name: "Fashion", path: "/category/fashion", image: categoryImages.fashion },
    { name: "Home & Living", path: "/category/home-living", image: categoryImages.homeLiving },
    { name: "Beauty", path: "/category/beauty", image: categoryImages.beauty }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Modern Essentials<br />for Everyday Life
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our curated collection of thoughtfully designed
              products that blend beauty and function.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg flex items-center hover:bg-teal-700 transition"
              >
                Shop Now <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/new-arrivals"
                className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition"
              >
                Explore New Arrivals
              </Link>
            </div>
          </div>

          {/* Right Content - Spring Collection Card */}
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Modern essentials"
                className="w-full h-[400px] object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Spring Collection</h3>
                <p className="text-gray-600 mb-4">Refresh your space with our latest designs</p>
                <Link
                  to="/collections/spring"
                  className="inline-block px-4 py-2 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of products across different categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link
              to="/products"
              className="text-teal-600 font-medium flex items-center hover:text-teal-700 transition"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <Link to={`/products/${product.id}`}>
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToWishlist(product);
                        }}
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
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage; 