const mongoose = require('mongoose');

const Category = require('../models/category');

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json({data: categories, type: "success", message: 'All data fetched successfully!'});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', type: "error" });
    }
  };
  
  // Get a specific category by ID
  exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.id;
    try {
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: 'Category not found', type: "error" });
      }
      res.status(200).json({data: category, type: "success", message: "Data fetched successfully!"});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', type: "error" });
    }
  };
  
  // Create a new category
  exports.createCategory = async (req, res) => {
    const { category_name, category_description, subcategories } = req.body;
    try {
        const existingCategory = await Category.findOne({ category_name });
        if (existingCategory) {
            return res.status(500).json({ message: 'Category already exists', type: "error" });
        }
        const newCategory = new Category({
            category_name,
            category_description,
            subcategories,
        });
      const savedCategory = await newCategory.save();
      res.status(200).json({data: savedCategory, type: "success", message: "Category created successfully!"});
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error, type: "error"});
    }
  };
  
  // Update a specific category by ID
  exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { category_name, category_description, subcategories } = req.body;
    
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        {
          category_name,
          category_description,
          subcategories,
        },
        { new: true }
      );
      
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Category not found' , type: "error"});
      }
      
      res.status(200).json({data: updatedCategory, message: "Category updated successfully!", type: "success"});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', type: "error" });
    }
  };
  
  // Delete a specific category by ID
  exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    
    try {
      const deletedCategory = await Category.findByIdAndRemove(categoryId);
      if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found', type: "error" });
      }
      res.status(200).json({data: deletedCategory, type: "success", message: "Category Deleted successfully!"});
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  