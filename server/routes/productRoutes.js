const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByCategory
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/featured').get(getFeaturedProducts);
router.route('/category/:categoryName').get(getProductsByCategory);

router
  .route('/')
  .get(getProducts)
  .post(protect, authorize('admin'), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, authorize('admin'), updateProduct)
  .delete(protect, authorize('admin'), deleteProduct);

module.exports = router; 