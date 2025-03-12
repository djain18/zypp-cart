/**
 * Utility functions for handling images
 */

// Default fallback image - a simple gradient background
export const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

// Category-specific fallback images - updated with more reliable images
export const CATEGORY_FALLBACK_IMAGES = {
  'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Home & Living': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Sports': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
};

// Additional fallback images for specific products
export const PRODUCT_FALLBACK_IMAGES = {
  'Tennis Racket Pro': 'https://images.unsplash.com/photo-1617083934551-ac1f1c0917b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Makeup Brush Set': 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Premium Perfume': 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'Nail Polish Collection': 'https://images.unsplash.com/photo-1632344004161-2f2c2646a6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
};

/**
 * Get a fallback image URL based on product category or name
 * @param {string} category - Product category
 * @param {string} productName - Product name
 * @returns {string} - Fallback image URL
 */
export const getFallbackImageByCategory = (category, productName = '') => {
  // First try product-specific fallback
  if (productName && PRODUCT_FALLBACK_IMAGES[productName]) {
    return PRODUCT_FALLBACK_IMAGES[productName];
  }

  // Then try category fallback
  if (category && CATEGORY_FALLBACK_IMAGES[category]) {
    return CATEGORY_FALLBACK_IMAGES[category];
  }

  return DEFAULT_FALLBACK_IMAGE;
};

/**
 * Check if an image URL is valid
 * @param {string} url - Image URL to check
 * @returns {Promise<boolean>} - Promise resolving to true if image is valid
 */
export const isImageValid = (url) => {
  return new Promise((resolve) => {
    if (!url) {
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Get a valid image URL with fallback
 * @param {string} imageUrl - Primary image URL
 * @param {string} category - Product category for fallback
 * @param {string} productName - Product name for specific fallbacks
 * @returns {string} - Valid image URL
 */
export const getValidImageUrl = async (imageUrl, category, productName = '') => {
  const isValid = await isImageValid(imageUrl);
  if (isValid) return imageUrl;

  return getFallbackImageByCategory(category, productName);
}; 