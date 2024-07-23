import dotenv from 'dotenv/config.js';


import { facultyModel } from "../models/facultyModel.js";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_KEY);
}

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await facultyModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false, message: "This email already has an account."
            });
        }

        // Validating email
        if (!validator.isEmail(email)) {
            return res.json({
                success: false, message: "Please enter a valid email."
            });
        }

        // Validating password
        if (password.length < 8) {
            return res.json({
                success: false, message: "Please enter a stronger password."
            });
        }

        // Encrypting the password
        const salt = await bcrypt.genSalt(8);
        const hashedPass = await bcrypt.hash(password, salt);

        // Creating new user
        const newFaculty = new facultyModel({
            name: name,
            email: email,
            password: hashedPass,
        });

        const user = await newFaculty.save();
        const token = createToken(user.email);
        res.json({
            success: true, token, message: "Registration successful." , email:user.email
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.json({
            success: false, message: "Some error occurred!"
        });
    }
}

const login =async (req, res) => {
    const {email , password} = req.body;

    try {
        
        const user = await facultyModel.findOne({ email });
        if (!user) {
            return res.json({
                success: false, message: "No Account Exists With This Email"
            });
        }
        
        const isMatched = await bcrypt.compare(password , user.password);

        if (!isMatched) {
            return res.json({
                success: false, message: "invalid Credentials"
            });
        }
        const token = createToken(user.email);
        res.json({
            success: true, token, message: "Login successful." , email:user.email
        });

    } catch (error) {
        res.json({success : false  ,  message : "Error!"})
    }
}

export { register, login }