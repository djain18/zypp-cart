import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../components/ProductImage';

const CheckoutPage = () => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment

  // Replace placeholder images with better ones and add categories
  const cartItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 8999,
      quantity: 1,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      name: 'Smartphone Case',
      price: 1299,
      quantity: 1,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Checkout Forms */}
          <div className="md:col-span-2">
            {/* Steps */}
            <div className="flex mb-8">
              <div
                className={`flex-1 text-center py-2 ${
                  step === 1 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
                }`}
              >
                1. Shipping
              </div>
              <div
                className={`flex-1 text-center py-2 ${
                  step === 2 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
                }`}
              >
                2. Payment
              </div>
            </div>

            {step === 1 ? (
              /* Shipping Form */
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            ) : (
              /* Payment Form */
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="**** **** **** ****"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="***"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <ProductImage
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                      fallbackText={item.name}
                      category={item.category}
                      productName={item.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">₹{shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 