const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price must be a positive number']
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price must be a positive number']
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount must be a positive number'],
    max: [100, 'Discount cannot be more than 100%']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['groceries', 'food', 'medicines', 'gifts', 'apparel']
  },
  imageUrl: {
    type: String,
    default: 'no-image.jpg'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, 'Quantity must be a positive number']
  },
  featured: {
    type: Boolean,
    default: false
  },
  deliveryTime: {
    type: String,
    default: '30-45 minutes'
  },
  ratings: {
    type: Number,
    default: 0,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot be more than 5']
  },
  numReviews: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a virtual for calculating the discounted price
productSchema.virtual('discountedPrice').get(function() {
  if (this.discount > 0) {
    return this.price * (1 - this.discount / 100);
  }
  return this.price;
});

// Enable virtuals in JSON
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Product', productSchema); 