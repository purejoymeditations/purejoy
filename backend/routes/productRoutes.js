const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Public route
router.route('/').get(getProducts);

// Admin routes
router.route('/admin').post(protect, createProduct);
router.route('/admin/:id')
    .put(protect, updateProduct)
    .delete(protect, deleteProduct);

module.exports = router; 