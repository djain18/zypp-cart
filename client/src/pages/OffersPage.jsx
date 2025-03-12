import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiTag, FiPercent, FiShoppingCart } from 'react-icons/fi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const OffersPage = () => {
  const { addToCart } = useCart();

  // Create some special offers
  const flashDeals = products.slice(0, 3).map(product => ({
    ...product,
    discountPercentage: 25,
    originalPrice: Math.round(product.price * 1.33),
    endsIn: '2 days'
  }));

  const bundleDeals = [
    {
      id: 'bundle1',
      title: 'Electronics Bundle',
      products: products.filter(p => p.category === 'Electronics').slice(0, 2),
      discountPercentage: 20,
      originalPrice: products.filter(p => p.category === 'Electronics').slice(0, 2).reduce((sum, p) => sum + p.price, 0),
      price: Math.round(products.filter(p => p.category === 'Electronics').slice(0, 2).reduce((sum, p) => sum + p.price, 0) * 0.8),
      image: products.filter(p => p.category === 'Electronics')[0].image
    },
    {
      id: 'bundle2',
      title: 'Fashion Bundle',
      products: products.filter(p => p.category === 'Fashion').slice(0, 2),
      discountPercentage: 15,
      originalPrice: products.filter(p => p.category === 'Fashion').slice(0, 2).reduce((sum, p) => sum + p.price, 0),
      price: Math.round(products.filter(p => p.category === 'Fashion').slice(0, 2).reduce((sum, p) => sum + p.price, 0) * 0.85),
      image: products.filter(p => p.category === 'Fashion')[0].image
    }
  ];

  const seasonalOffers = products.slice(6, 10).map(product => ({
    ...product,
    discountPercentage: 15,
    originalPrice: Math.round(product.price * 1.18),
    endsIn: '7 days'
  }));

  const handleAddToCart = (product, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // For bundle deals, we need to add all products in the bundle
    if (product.products) {
      product.products.forEach(p => addToCart(p));
    } else {
      // For regular products with discount
      const discountedProduct = {
        ...product,
        price: product.price, // The price is already discounted in our mock data
      };
      addToCart(discountedProduct);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Special Offers & Deals</h1>

        {/* Flash Deals Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FiClock className="w-6 h-6 text-red-500 mr-2" />
              <h2 className="text-2xl font-bold">Flash Deals</h2>
            </div>
            <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full font-medium flex items-center">
              <FiClock className="mr-2" /> Limited Time Offers
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 font-bold">
                    {deal.discountPercentage}% OFF
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-3 py-2 text-sm">
                    Ends in: {deal.endsIn}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{deal.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-xl font-bold text-red-600 mr-2">₹{deal.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/products/${deal.id}`} 
                      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={(e) => handleAddToCart(deal, e)}
                      className="bg-indigo-100 text-indigo-600 p-2 rounded-lg hover:bg-indigo-200 transition-colors"
                    >
                      <FiShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Deals Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FiTag className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold">Bundle Deals</h2>
            </div>
            <div className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full font-medium">
              Save More When Bought Together
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bundleDeals.map((bundle) => (
              <div key={bundle.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img src={bundle.image} alt={bundle.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 font-bold">
                    SAVE {bundle.discountPercentage}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{bundle.title}</h3>
                  <div className="mb-3">
                    <p className="text-gray-600 mb-2">Includes:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {bundle.products.map((product, index) => (
                        <li key={index}>{product.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="text-xl font-bold text-indigo-600 mr-2">₹{bundle.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through">₹{bundle.originalPrice.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(bundle)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                    <FiShoppingCart className="mr-2" />
                    Add Bundle to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Offers Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FiPercent className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold">Seasonal Offers</h2>
            </div>
            <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full font-medium">
              Special Discounts
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img src={offer.image} alt={offer.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 font-bold">
                    {offer.discountPercentage}% OFF
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{offer.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-xl font-bold text-green-600 mr-2">₹{offer.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through">₹{offer.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/products/${offer.id}`} 
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={(e) => handleAddToCart(offer, e)}
                      className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <FiShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage; 