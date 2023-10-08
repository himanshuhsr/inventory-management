const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true,
    },
    category_description: {
        type: String
    },
    subcategories: [
        {
            subcategory_name: {
                type: String,
                required: true,
                trim: true,
            },
            subcategory_description: String,
        },
    ],
}, {
    timestamps: true, // This option adds the createdAt and updatedAt fields
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
