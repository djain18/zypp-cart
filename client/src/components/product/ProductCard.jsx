import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiClock } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gray-100 overflow-hidden">
          <img
            src={product.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-accent text-dark font-bold px-2 py-1 rounded-md text-sm">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {product.category}
          </span>
          <div className="flex items-center ml-auto text-xs text-gray-500">
            <FiClock className="mr-1" />
            <span>{product.deliveryTime || '30-45 min'}</span>
          </div>
        </div>
        
        <Link to={`/products/${product._id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary flex items-center"
            disabled={!product.inStock}
          >
            <FiShoppingCart className="mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 