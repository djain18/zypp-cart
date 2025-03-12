import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiFilter, FiX } from 'react-icons/fi';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - no sorting needed
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center md:hidden bg-white px-4 py-2 rounded-lg shadow"
          >
            {isFilterOpen ? <FiX className="mr-2" /> : <FiFilter className="mr-2" />}
            {isFilterOpen ? 'Close Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Section */}
          <div className={`md:block ${isFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow sticky top-20">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`block w-full text-left px-4 py-2 rounded-lg ${
                      selectedCategory === 'All'
                        ? 'bg-indigo-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`block w-full text-left px-4 py-2 rounded-lg ${
                        selectedCategory === category.name
                          ? 'bg-indigo-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Sort By</h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 