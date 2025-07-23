const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Public route - Get all products
router.route('/').get(getProducts);

// Admin routes - Create product (protected)
router.route('/').post(createProduct);

// Admin routes - Update and delete specific product (protected)
router.route('/:id')
    .put(protect, updateProduct)
    .delete(protect, deleteProduct);

module.exports = router; 