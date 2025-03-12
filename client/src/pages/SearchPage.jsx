import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { products } from '../data/products';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate search API call
    setIsLoading(true);
    
    setTimeout(() => {
      if (query) {
        const results = products.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) || 
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
      
      setIsLoading(false);
    }, 500);
  }, [query]);

  const addToCart = (product) => {
    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product is already in cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      // Product exists, increase quantity
      cart[existingProductIndex].quantity += 1;
      toast.info(`Increased ${product.name} quantity in cart`);
    } else {
      // Product doesn't exist, add new product with quantity 1
      cart.push({
        ...product,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
      toast.success(`${product.name} added to cart`);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Dispatch event to update cart count in header
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const addToWishlist = (product) => {
    // Get existing wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if product is already in wishlist
    const isProductInWishlist = wishlist.some(item => item.id === product.id);
    
    if (isProductInWishlist) {
      toast.info(`${product.name} is already in your wishlist`);
      return;
    }
    
    // Add product to wishlist
    wishlist.push({
      ...product,
      addedAt: new Date().toISOString()
    });
    
    // Save updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Show success message
    toast.success(`${product.name} added to wishlist`);
    
    // Dispatch event to update wishlist count in header
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-gray-500 hover:text-red-500 mr-4">
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            {query ? `Search Results for "${query}"` : 'Search Products'}
          </h1>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <>
            {searchResults.length > 0 ? (
              <>
                <p className="text-gray-600 mb-6">Found {searchResults.length} results for your search</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {searchResults.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-64 object-cover object-center hover:scale-105 transition-transform"
                        />
                      </Link>
                      <div className="p-4">
                        <Link to={`/product/${product.id}`}>
                          <h2 className="text-lg font-medium text-gray-800 hover:text-red-500 transition mb-2">{product.name}</h2>
                        </Link>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {Array(5).fill(0).map((_, i) => (
                              <span key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm ml-2">(24 reviews)</span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => addToWishlist(product)}
                              className="p-2 text-gray-600 hover:text-red-500 transition"
                              aria-label="Add to wishlist"
                            >
                              <FiHeart />
                            </button>
                            <button 
                              onClick={() => addToCart(product)}
                              className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex items-center"
                            >
                              <FiShoppingCart className="mr-1" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                {query ? (
                  <>
                    <h2 className="text-xl font-medium text-gray-800 mb-2">No results found</h2>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any products matching "{query}". Please try a different search term or browse our categories.
                    </p>
                    <Link 
                      to="/" 
                      className="inline-block bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                    >
                      Browse Categories
                    </Link>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-medium text-gray-800 mb-2">Enter a search term</h2>
                    <p className="text-gray-600 mb-6">
                      Please enter a search term to find products.
                    </p>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 