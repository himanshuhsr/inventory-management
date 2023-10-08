const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const CategoryController = require('../controllers/category');

// Get All Category
router.get('/all-category',checkAuth, CategoryController.getAllCategories);
// Get Category Details 
router.get('/get-category/:id',checkAuth, CategoryController.getCategoryById);
// Add a Category
router.post('/add-category', checkAuth ,CategoryController.createCategory);
// Update a Category
router.put('/update/:id', checkAuth ,CategoryController.updateCategory);
// Delete a Category
router.delete('/delete/:id',checkAuth, CategoryController.deleteCategory);


module.exports = router;