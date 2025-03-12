import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiShoppingBag, FiHeart, FiLogOut, FiPackage, FiClock, FiCheck, FiTruck, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const OrdersPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData) {
      setUser(userData);
      
      // In a real app, you would fetch orders from an API
      // Here we're just creating dummy orders
      const dummyOrders = [
        {
          id: 'ORD123456',
          date: '2023-11-15',
          total: 12499,
          status: 'Delivered',
          items: [
            { id: 1, name: 'Smartphone X', price: 9999, quantity: 1, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80' },
            { id: 2, name: 'Phone Case', price: 499, quantity: 1, image: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
            { id: 3, name: 'Screen Protector', price: 299, quantity: 2, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80' }
          ]
        },
        {
          id: 'ORD123457',
          date: '2023-11-10',
          total: 5499,
          status: 'Shipped',
          items: [
            { id: 4, name: 'Wireless Earbuds', price: 2999, quantity: 1, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80' },
            { id: 5, name: 'Bluetooth Speaker', price: 2500, quantity: 1, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' }
          ]
        },
        {
          id: 'ORD123458',
          date: '2023-10-25',
          total: 15999,
          status: 'Delivered',
          items: [
            { id: 6, name: 'Laptop Pro', price: 15999, quantity: 1, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' }
          ]
        }
      ];
      
      setOrders(dummyOrders);
    }
    
    setLoading(false);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processing':
        return <FiClock className="text-yellow-500" />;
      case 'Shipped':
        return <FiTruck className="text-blue-500" />;
      case 'Delivered':
        return <FiCheck className="text-green-500" />;
      default:
        return <FiPackage className="text-gray-500" />;
    }
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md max-w-md mx-auto">
            <FiUser className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h1>
            <p className="text-gray-600 mb-6">
              Please sign in to view your orders.
            </p>
            <Link 
              to="/signin" 
              className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <FiUser className="w-12 h-12 text-gray-400" />
                  )}
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                  <p className="text-teal-100">{user.email}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                      {user.isVerified ? 'Verified Account' : 'Unverified Account'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Navigation Sidebar */}
                <div className="md:col-span-1">
                  <nav className="space-y-1">
                    <Link 
                      to="/profile" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      <FiUser className="mr-3" /> Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="flex items-center px-4 py-3 bg-teal-50 text-teal-700 rounded-lg font-medium"
                    >
                      <FiShoppingBag className="mr-3" /> Orders
                    </Link>
                    <Link 
                      to="/wishlist" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      <FiHeart className="mr-3" /> Wishlist
                    </Link>
                    <button 
                      onClick={handleSignOut}
                      className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium"
                    >
                      <FiLogOut className="mr-3" /> Sign Out
                    </button>
                  </nav>
                </div>

                {/* Orders List */}
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h2 className="text-lg font-semibold text-gray-900">My Orders</h2>
                    </div>
                    
                    {orders.length === 0 ? (
                      <div className="p-6 text-center">
                        <FiShoppingBag className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders Yet</h3>
                        <p className="text-gray-600 mb-4">
                          You haven't placed any orders yet. Start shopping to see your orders here.
                        </p>
                        <Link 
                          to="/products" 
                          className="inline-block px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
                        >
                          Browse Products
                        </Link>
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-200">
                        {orders.map((order) => (
                          <div key={order.id} className="p-6">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-lg font-medium text-gray-900 mr-2">Order #{order.id}</h3>
                                  <div className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded">
                                    {getStatusIcon(order.status)}
                                    <span className="ml-1">{order.status}</span>
                                  </div>
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  <FiCalendar className="mr-1" />
                                  <span>Ordered on {new Date(order.date).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <p className="text-lg font-bold text-teal-600">₹{order.total.toLocaleString()}</p>
                              </div>
                            </div>
                            
                            <div className="mt-4 space-y-3">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex items-center">
                                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1">
                                    <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                      Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-4 flex justify-end">
                              <Link 
                                to={`/orders/${order.id}`}
                                className="inline-flex items-center text-sm text-teal-600 hover:text-teal-700"
                              >
                                View Details <FiArrowRight className="ml-1" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrdersPage; 