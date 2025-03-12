import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';
import GoogleCallback from './components/auth/GoogleCallback';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Main Pages
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailPage from './pages/OrderDetailPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import WishlistPage from './pages/WishlistPage';
import OffersPage from './pages/OffersPage';
import SignInPage from './pages/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HelpPage from './pages/HelpPage';
import TrackOrderPage from './pages/TrackOrderPage';
import SearchPage from './pages/SearchPage';
import SpringCollectionPage from './pages/SpringCollectionPage';
import NewArrivalsPage from './pages/NewArrivalsPage';

// Footer Pages
import AboutUs from './pages/FooterPages/AboutUs';
import FAQ from './pages/FooterPages/FAQ';
import PrivacyPolicy from './pages/FooterPages/PrivacyPolicy';
import TermsOfService from './pages/FooterPages/TermsOfService';
import ShippingInfo from './pages/FooterPages/ShippingInfo';
import ReturnsPolicy from './pages/FooterPages/ReturnsPolicy';
import TrackOrder from './pages/FooterPages/TrackOrder';
import Help from './pages/FooterPages/Help';

// Help Pages
import FAQPage from './pages/HelpPages/FAQPage';
import ShippingPolicyPage from './pages/HelpPages/ShippingPolicyPage';
import ReturnPolicyPage from './pages/HelpPages/ReturnPolicyPage';
import ContactPage from './pages/HelpPages/ContactPage';

// Category Pages
import CategoryPage from './pages/CategoryPage';

// Page transition variants
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
  ease: 'easeInOut',
  duration: 0.3
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// ScrollToTop component to ensure page scrolls to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Routes */}
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HomePage />
              </motion.div>
            } />
            <Route path="/login" element={<Navigate to="/signin" replace />} />
            <Route path="/register" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RegisterPage />
              </motion.div>
            } />
            <Route path="/signin" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SignInPage />
              </motion.div>
            } />
            <Route path="/forgot-password" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ForgotPasswordPage />
              </motion.div>
            } />
            <Route path="/products" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ProductsPage />
              </motion.div>
            } />
            <Route path="/products/:id" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ProductDetailPage />
              </motion.div>
            } />
            <Route path="/cart" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CartPage />
              </motion.div>
            } />
            <Route path="/category/:category" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CategoryPage />
              </motion.div>
            } />
            <Route path="/wishlist" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <WishlistPage />
              </motion.div>
            } />
            <Route path="/offers" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <OffersPage />
              </motion.div>
            } />
            
            {/* Footer Pages */}
            <Route path="/about" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AboutUs />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ContactPage />
              </motion.div>
            } />
            <Route path="/faq" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <FAQPage />
              </motion.div>
            } />
            <Route path="/privacy" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PrivacyPolicy />
              </motion.div>
            } />
            <Route path="/terms" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TermsOfService />
              </motion.div>
            } />
            <Route path="/shipping" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ShippingPolicyPage />
              </motion.div>
            } />
            <Route path="/returns" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ReturnPolicyPage />
              </motion.div>
            } />
            <Route path="/track-order" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TrackOrder />
              </motion.div>
            } />
            <Route path="/help" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Help />
              </motion.div>
            } />
            
            {/* Protected Routes */}
            <Route path="/checkout" element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <CheckoutPage />
                </motion.div>
              </ProtectedRoute>
            } />
            <Route path="/orders" element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <OrdersPage />
                </motion.div>
              </ProtectedRoute>
            } />
            <Route path="/orders/:id" element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <OrderDetailPage />
                </motion.div>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ProfilePage />
                </motion.div>
              </ProtectedRoute>
            } />
            
            {/* Help Pages */}
            <Route path="/help" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HelpPage />
              </motion.div>
            } />
            <Route path="/help/:topic" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HelpPage />
              </motion.div>
            } />
            <Route path="/track-order" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TrackOrderPage />
              </motion.div>
            } />
            <Route path="/search" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SearchPage />
              </motion.div>
            } />
            
            {/* Spring Collection Route */}
            <Route path="/collections/spring" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SpringCollectionPage />
              </motion.div>
            } />
            
            {/* New Arrivals Route */}
            <Route path="/new-arrivals" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NewArrivalsPage />
              </motion.div>
            } />
            
            {/* Google OAuth Callback */}
            <Route path="/auth/google/callback" element={<GoogleCallback />} />
            
            {/* 404 Route */}
            <Route path="*" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NotFoundPage />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App; 