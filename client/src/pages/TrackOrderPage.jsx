import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiPackage, FiTruck, FiCheckCircle, FiHome } from 'react-icons/fi';

const TrackOrderPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate tracking result
    setIsTracking(true);
    
    setTimeout(() => {
      // Mock tracking data
      setTrackingResult({
        orderNumber: orderNumber || 'QC8765432',
        orderDate: '2023-03-05',
        status: 'In Transit',
        estimatedDelivery: '2023-03-10',
        items: [
          { id: 1, name: 'Sony WH-1000XM4 Wireless Headphones', quantity: 1 },
          { id: 2, name: 'Premium Sunglasses', quantity: 1 }
        ],
        trackingEvents: [
          { date: '2023-03-05', time: '10:30 AM', status: 'Order Placed', description: 'Your order has been placed successfully', icon: <FiCheckCircle className="text-green-500" /> },
          { date: '2023-03-06', time: '09:15 AM', status: 'Order Processed', description: 'Your order has been processed and is ready for shipping', icon: <FiPackage className="text-blue-500" /> },
          { date: '2023-03-07', time: '02:45 PM', status: 'Shipped', description: 'Your order has been shipped', icon: <FiTruck className="text-yellow-500" /> },
          { date: '2023-03-10', time: '', status: 'Estimated Delivery', description: 'Expected delivery date', icon: <FiHome className="text-gray-400" /> }
        ]
      });
      
      setIsTracking(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-red-500 mr-4">
                  <FiArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-800">Track Your Order</h1>
              </div>
            </div>
            
            <div className="p-6">
              {!trackingResult ? (
                <>
                  <p className="text-gray-600 mb-6">
                    Enter your order number and email address to track your order status.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="orderNumber" className="block text-gray-700 mb-1">Order Number</label>
                      <input
                        type="text"
                        id="orderNumber"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="e.g., QC1234567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter the email used for your order"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex justify-center items-center"
                      disabled={isTracking}
                    >
                      {isTracking ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Tracking Order...
                        </>
                      ) : (
                        'Track Order'
                      )}
                    </button>
                  </form>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h2>
                    <p className="text-gray-600 mb-4">
                      If you're having trouble tracking your order or have any questions, please contact our customer support team.
                    </p>
                    <div className="flex space-x-4">
                      <Link to="/help/contact" className="text-red-500 hover:underline">Contact Us</Link>
                      <Link to="/help/faq" className="text-red-500 hover:underline">FAQ</Link>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <div className="flex justify-between items-start flex-wrap">
                      <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">Order Number</p>
                        <p className="font-medium">{trackingResult.orderNumber}</p>
                      </div>
                      <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">Order Date</p>
                        <p className="font-medium">{trackingResult.orderDate}</p>
                      </div>
                      <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="font-medium text-yellow-600">{trackingResult.status}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Estimated Delivery</p>
                        <p className="font-medium">{trackingResult.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Items</h2>
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Item
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {trackingResult.items.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-right">
                              {item.quantity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Tracking History</h2>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    <div className="space-y-6">
                      {trackingResult.trackingEvents.map((event, index) => (
                        <div key={index} className="relative pl-10">
                          <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center bg-white z-10">
                            {event.icon}
                          </div>
                          <div className={`${index === 0 ? 'bg-green-50 border-green-100' : 'bg-white border-gray-200'} border rounded-lg p-4`}>
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-medium text-gray-800">{event.status}</h3>
                              <p className="text-sm text-gray-500">{event.date} {event.time}</p>
                            </div>
                            <p className="text-gray-600">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setTrackingResult(null)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                    >
                      Track Another Order
                    </button>
                    <Link
                      to="/"
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage; 