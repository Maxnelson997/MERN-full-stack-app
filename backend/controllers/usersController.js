import User from '../models/UserModel.js';
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ success: 'users fetched', users })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// register user
const registerUser = async (req, res) => {
    // grab email and password data from request body
    const { email, password } = req.body;

    // check the field values
    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required." })
    }

    // check if email exists
    const exists = await User.findOne({ email: email })
    if (exists) {
        return res.status(500).json({ error: "Email already in use." })
    }

    // Hash the password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
        const user = await User.create({ email, password: hashedPassword })
        res.status(200).json({ email })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// login user
const loginUser = async (req, res) => {
    res.send("Login")
}

export { getUsers, registerUser, loginUser }

