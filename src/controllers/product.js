const mongoose = require('mongoose');

const Product = require('../models/product');


// Add a Product 
exports.addProduct = async (req, res) => {
    const { product_name, product_description, stock_quantity, unit, category_id, subcategory_id, mrp, selling_price, expiry_date, barcode } = req.body;

    try {
        const existingProduct = await Product.findOne({ product_name, category_id });
        if (existingProduct) {
            return res.status(500).json({ message: 'Product already exists', type: "error" });
        }
        const newProduct = new Product({
            product_name,
            product_description,
            stock_quantity,
            unit,
            category_id,
            subcategory_id,
            mrp,
            selling_price,
            expiry_date,
            barcode
        });
        const savedProduct = await newProduct.save();
        res.status(200).json({ data: savedProduct, type: "success", message: "Product added successfully!" });
    } catch (error) {
        res.status(500).json({ message: error, type: "error" });
    }
}

// Get All Product

exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ data: products, type: "success", message: 'All data fetched successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', type: "error" });
    }
};

  // Get a specific product by ID
  exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found', type: "error" });
      }
      res.status(200).json({data: product, type: "success", message: "Data fetched successfully!"});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', type: "error" });
    }
  };
  

    // Update a specific product by ID
    exports.updateProduct = async (req, res) => {
        const productId = req.params.id;
        const { product_name, product_description, stock_quantity, unit, category_id, subcategory_id, mrp, selling_price, expiry_date, barcode } = req.body;
        
        try {
          const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                product_name,
                product_description,
                stock_quantity,
                unit,
                category_id,
                subcategory_id,
                mrp,
                selling_price,
                expiry_date,
                barcode
            },
            { new: true }
          );
          
          if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' , type: "error"});
          }
          
          res.status(200).json({data: updatedProduct, message: "Product updated successfully!", type: "success"});
        } catch (error) {
          res.status(500).json({ message: 'Internal server error', type: "error" });
        }
      };

        
  // Delete a specific product by ID
  exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    
    try {
      const deletedProduct = await Product.findByIdAndRemove(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found', type: "error" });
      }
      res.status(200).json({data: deletedProduct, type: "success", message: "Product Deleted successfully!"});
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  