import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import ProductImage from './ProductImage';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToWishlist) onAddToWishlist(product);
  };

  return (
    <Link 
      to={`/products/${product.id}`} 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          fallbackText={product.name}
          category={product.category}
          productName={product.name}
        />
        <div className="absolute top-0 right-0 p-2 flex space-x-2">
          <button
            onClick={handleAddToWishlist}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <FiHeart className="text-gray-600" />
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to cart"
          >
            <FiShoppingCart className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.inStock ? (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</span>
          ) : (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 