const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Staff'],
        default: 'Staff'
    }
}, {
    timestamps: true, // This option adds the createdAt and updatedAt fields
});
const User = mongoose.model('User', userSchema);

module.exports = User;