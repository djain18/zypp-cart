import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const CartPage = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  const handleUpdateQuantity = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const subtotal = cartTotal;
  const shipping = subtotal > 1000 ? 0 : 100;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-center py-6 border-b last:border-b-0">
                      <div className="flex-shrink-0 w-24 h-24 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow sm:ml-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h2>
                            <p className="text-sm text-gray-600 mb-4">{item.category}</p>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end">
                            <div className="flex items-center border rounded-lg mr-4">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                                className="p-2 hover:bg-gray-100"
                                aria-label="Decrease quantity"
                              >
                                <FiMinus />
                              </button>
                              <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                                className="p-2 hover:bg-gray-100"
                                aria-label="Increase quantity"
                              >
                                <FiPlus />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold text-gray-900">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 flex items-center mt-2"
                              >
                                <FiTrash2 className="mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">
                      {shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="text-gray-900">₹{tax.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-xl font-semibold text-gray-900">₹{total.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                    </div>
                  </div>
                  <Link
                    to="/checkout"
                    className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md p-8">
            <FiShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping</p>
            <Link
              to="/products"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage; 