const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var salt = bcrypt.genSaltSync(10);

const User = require('../models/user');


// Signup Controller

exports.signUp = async (req, res) => {
    const { first_name, last_name, email, password, role } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(500).json({ message: 'User already exists', type: "error" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hashSync(password, salt);

    // Create a new user
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hashedPassword,
        role: role
    });

    // Save the user to the database
    await user.save();
    return res.status(500).json({
        message: 'User created successfully!',
        type : "success"
    });
}

// Login Controller
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    let userId = undefined;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found', type: "error" });
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(500).json({ message: 'Incorrect password', type: "error" });
    }
    userId = user._id;

    const token = jwt.sign(
        {
            email: email,
            userId: userId,
            role: user.role
        },
        process.env.JWT_KEY,
        {
            expiresIn: "1h"
        }
    );
    return res.status(200).json({
        message: 'Auth Successful!',
        type: "success",
        token: token
    });

};