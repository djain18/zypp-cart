import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // In a real app, this would call a function to add/remove from wishlist
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert('Share functionality would be implemented here');
  };

  // Find related products in the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-indigo-600">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link 
              to={`/products?category=${product.category}`} 
              className="text-gray-600 hover:text-indigo-600"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
              />
              <div className="absolute top-4 right-4 space-x-2">
                <button 
                  onClick={handleToggleWishlist}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <FiHeart className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <FiShare2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Key Features</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Quantity</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-gray-900">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xl font-bold text-indigo-600">
                      ₹{relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage; 