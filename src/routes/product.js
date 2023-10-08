const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ProductController = require('../controllers/product');

// Get All Product
router.get('/all-products',checkAuth, ProductController.getAllProduct);
// Get Product Details 
router.get('/get-product/:id',checkAuth, ProductController.getProductById);
// Add a Product
router.post('/add-product', checkAuth ,ProductController.addProduct);
// Update a Product
router.put('/update/:id', checkAuth ,ProductController.updateProduct);
// Delete a Category
router.delete('/delete/:id',checkAuth, ProductController.deleteProduct);


module.exports = router;