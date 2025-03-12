import React, { useState } from 'react';
import { FiSearch, FiPackage, FiTruck, FiCheckCircle, FiClock } from 'react-icons/fi';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!orderNumber.trim()) {
      setError('Please enter an order number');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    // This is a mock tracking result for demonstration
    // In a real application, this would be fetched from an API
    setTrackingResult({
      orderNumber: orderNumber,
      orderDate: '15 June, 2023',
      status: 'In Transit',
      estimatedDelivery: '18 June, 2023',
      items: [
        {
          name: 'Sony WH-1000XM4 Wireless Headphones',
          quantity: 1,
          price: '₹24,999'
        }
      ],
      trackingHistory: [
        {
          status: 'Order Placed',
          date: '15 June, 2023',
          time: '10:30 AM',
          location: 'Online',
          icon: <FiPackage className="w-6 h-6 text-indigo-600" />
        },
        {
          status: 'Order Processed',
          date: '15 June, 2023',
          time: '4:45 PM',
          location: 'Mumbai Warehouse',
          icon: <FiClock className="w-6 h-6 text-indigo-600" />
        },
        {
          status: 'Shipped',
          date: '16 June, 2023',
          time: '9:15 AM',
          location: 'Mumbai',
          icon: <FiTruck className="w-6 h-6 text-indigo-600" />
        },
        {
          status: 'In Transit',
          date: '17 June, 2023',
          time: '2:30 PM',
          location: 'Delhi Hub',
          icon: <FiTruck className="w-6 h-6 text-indigo-600" />
        }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Track Your Order</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number (e.g., QC12345678)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the email used for the order"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <FiSearch className="mr-2" />
              Track Order
            </button>
          </form>
        </div>
        
        {trackingResult && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="border-b pb-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Order Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Order Number</p>
                  <p className="font-semibold">#{trackingResult.orderNumber}</p>
                </div>
                <div>
                  <p className="text-gray-600">Order Date</p>
                  <p className="font-semibold">{trackingResult.orderDate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold text-indigo-600">{trackingResult.status}</p>
                </div>
                <div>
                  <p className="text-gray-600">Estimated Delivery</p>
                  <p className="font-semibold">{trackingResult.estimatedDelivery}</p>
                </div>
              </div>
            </div>
            
            <div className="border-b pb-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Order Items</h2>
              {trackingResult.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Tracking History</h2>
              <div className="space-y-6">
                {trackingResult.trackingHistory.map((event, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">{event.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{event.status}</h3>
                        <p className="text-gray-600">{event.date}, {event.time}</p>
                      </div>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder; 