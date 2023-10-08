const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    product_description: String,
    stock_quantity: {
        type: Number,
        min: 0,
        required: true
    },
    unit:{
        type: String,
        enum: ['kg', 'g', 'ml', 'l', 'piece']
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category.subcategories',
    },
    mrp:{
        type :Number ,
        required: true
    },
    selling_price:{
        type: Number,
        required:true
    },
    expiry_date:{
        type: Date,
        required: true
    },
    barcode:{
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true, // This option adds the createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
