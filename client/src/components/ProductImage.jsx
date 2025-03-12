import React, { useState, useEffect } from 'react';
import { DEFAULT_FALLBACK_IMAGE, getFallbackImageByCategory } from '../utils/imageUtils';

const ProductImage = ({ src, alt, className, fallbackText, category, productName }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  useEffect(() => {
    // Reset error state when src changes
    setImageError(false);
    setImageSrc(src);
    setRetryCount(0);
  }, [src]);

  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    
    // If we've already tried the category fallback, show text or default fallback
    if (retryCount > 0) {
      setImageError(true);
      return;
    }
    
    // Increment retry count
    setRetryCount(prev => prev + 1);
    
    // Try to get a fallback image
    const fallbackSrc = getFallbackImageByCategory(category, productName);
    console.log(`Trying fallback for ${productName || category}: ${fallbackSrc}`);
    setImageSrc(fallbackSrc);
    
    // If we're using the default fallback, mark as error to show text
    if (fallbackSrc === DEFAULT_FALLBACK_IMAGE) {
      setImageError(true);
    }
  };

  // If we've tried all fallbacks and still have errors, show text placeholder
  if (imageError && fallbackText) {
    return (
      <div 
        className={`${className} bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-gray-700 font-medium text-center p-2`}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt || "Product"}
      className={className}
      onError={handleImageError}
      loading="lazy"
    />
  );
};

export default ProductImage; 