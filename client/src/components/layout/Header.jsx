import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { FcShop } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const handleSignOut = () => {
    logout();
    toast.success('Signed out successfully');
    navigate('/');
    setIsAccountMenuOpen(false);
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      navigate('/profile');
    } else {
      navigate('/signin');
    }
    setIsAccountMenuOpen(false);
  };

  const handleOrdersClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      navigate('/orders');
    } else {
      navigate('/signin');
    }
    setIsAccountMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-2">
            <FcShop className="text-4xl" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zypp Cart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-medium ${
                isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`font-medium ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            <div className="relative">
              <button
                onClick={toggleAccountMenu}
                className="flex items-center space-x-1"
              >
                <FiUser className="text-2xl" />
              </button>

              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {currentUser ? (
                    <>
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{currentUser.name || currentUser.email}</p>
                        <p className="text-xs text-gray-500">{currentUser.email}</p>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsAccountMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsAccountMenuOpen(false)}
                      >
                        Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsAccountMenuOpen(false)}
                      >
                        Wishlist
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsAccountMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsAccountMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`font-medium ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`font-medium ${
                  isActive('/products') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`font-medium ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-medium ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 