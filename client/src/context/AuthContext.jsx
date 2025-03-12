import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    // In a real app, you would validate credentials with an API
    // For now, we'll just store the user in localStorage
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  // Register function
  const register = (userData) => {
    // In a real app, you would send registration data to an API
    // For now, we'll just store the user in localStorage
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
  };

  // For testing purposes, let's create a mock login function
  const mockLogin = () => {
    const mockUser = {
      id: '123456',
      name: 'Test User',
      email: 'test@example.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      isVerified: true
    };
    login(mockUser);
    toast.success('Logged in as Test User');
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
    mockLogin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 