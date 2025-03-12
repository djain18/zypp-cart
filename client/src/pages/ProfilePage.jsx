import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit, FiShoppingBag, FiHeart, FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData) {
      setUser(userData);
    }
    
    setLoading(false);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.success('Signed out successfully');
    
    // Dispatch event for other components to listen
    window.dispatchEvent(new Event('userUpdated'));
    
    navigate('/');
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
              Please sign in to view your profile information.
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
                      className="flex items-center px-4 py-3 bg-teal-50 text-teal-700 rounded-lg font-medium"
                    >
                      <FiUser className="mr-3" /> Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
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

                {/* Profile Details */}
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                      <button className="text-teal-600 hover:text-teal-700 flex items-center">
                        <FiEdit className="mr-1" /> Edit
                      </button>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start">
                        <FiUser className="mt-1 mr-3 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium">{user.name}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiMail className="mt-1 mr-3 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Email Address</p>
                          <p className="font-medium">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiPhone className="mt-1 mr-3 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="font-medium">{user.phone || 'Not provided'}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiMapPin className="mt-1 mr-3 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="font-medium">{user.address || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Account Summary */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-3xl font-bold text-teal-600 mb-1">0</div>
                      <div className="text-sm text-gray-500">Total Orders</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-3xl font-bold text-teal-600 mb-1">0</div>
                      <div className="text-sm text-gray-500">Wishlist Items</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="text-3xl font-bold text-teal-600 mb-1">0</div>
                      <div className="text-sm text-gray-500">Reviews</div>
                    </div>
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

export default ProfilePage; 