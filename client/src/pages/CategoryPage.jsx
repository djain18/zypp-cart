import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiFilter, FiX, FiChevronDown, FiChevronUp, FiGrid, FiList } from 'react-icons/fi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const CategoryPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategory = queryParams.get('subcategory');
  
  const [displayProducts, setDisplayProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortOption, setSortOption] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    brand: true,
    rating: true
  });
  const { addToCart } = useCart();

  // Format category for display and URL matching
  const formatCategory = (cat) => {
    if (cat === 'home-living') return 'Home & Living';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  // Format category for data matching
  const getCategoryForDataMatch = (cat) => {
    if (cat === 'home-living') return 'Home & Living';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  // Filter products based on category and subcategory
  useEffect(() => {
    const categoryForMatch = getCategoryForDataMatch(category);
    
    let filtered = products.filter(product => 
      product.category === categoryForMatch
    );
    
    if (subcategory) {
      // This is a placeholder for subcategory filtering
      // In a real app, you would have subcategory data in your products
      // For now, we'll just filter a subset of the category products
      filtered = filtered.slice(0, Math.ceil(filtered.length / 2));
    }
    
    setDisplayProducts(filtered);
    setFilteredProducts(filtered);
  }, [category, subcategory]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...displayProducts];
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply brand filter if any selected
    if (selectedBrands.length > 0) {
      // This is a placeholder for brand filtering
      // In a real app, you would have brand data in your products
      result = result.filter((_, index) => index % 2 === 0);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // This is a placeholder for sorting by newest
        // In a real app, you would have date data in your products
        result.reverse();
        break;
      default: // 'featured'
        // Keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [displayProducts, priceRange, selectedBrands, sortOption]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleFilterSection = (section) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section]
    });
  };

  const handlePriceChange = (index, value) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(value);
    setPriceRange(newPriceRange);
  };

  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const resetFilters = () => {
    setPriceRange([0, 150000]);
    setSelectedBrands([]);
    setSortOption('featured');
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

  // Sample brands for filter (in a real app, these would come from your data)
  const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{formatCategory(category)}</h1>
        <div className="flex items-center space-x-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FiFilter className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
          <p className="text-gray-600 mb-8">Try adjusting your filters or check back later for new products.</p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
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
                  onClick={() => addToWishlist(product)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <FiHeart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  {product.inStock ? (
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">In Stock</span>
                  ) : (
                    <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full">Out of Stock</span>
                  )}
                </div>
                <button
                  onClick={() => {
                    addToCart(product);
                    toast.success('Added to cart');
                  }}
                  disabled={!product.inStock}
                  className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${product.inStock
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    } transition-colors`}
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Price Range</h3>
              <div className="flex items-center space-x-4 mb-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Min"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Max"
                />
              </div>
              <input
                type="range"
                min="0"
                max="150000"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, e.target.value)}
                className="w-full mb-2"
              />
              <input
                type="range"
                min="0"
                max="150000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
                className="w-full"
              />
            </div>

            <button
              onClick={() => {
                resetFilters();
                setIsFilterOpen(false);
              }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CategoryPage; 