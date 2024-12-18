import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({email});

        if (!user) {
            return res.status(400).json({error: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({message: "User logged in successfully", token});
        } else {
            return res.status(400).json({error: "Invalid credentials"});
        }

    } catch (error) {
        console.log(error);
        
    }
};

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const exists = await userModel.findOne({email});

        if (exists) {
            return res.status(400).json({error: "User already exists"});
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({error: "Invalid email format"});
        }

        if (password.length < 8) {
            return res.status(400).json({error: "Password must be at least 8 characters long"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name, 
            email,
            password: hashedPassword,
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.status(201).json({message: "User registered successfully", token});
    } catch (error) {
        res.status(500).json({error: "Error registering user"});
    }
};

const adminLogin = async (req, res) => {

    try {
        
        const {email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({message: "Admin logged in successfully", token});
        } else {
            return res.status(401).json({error: "Invalid admin credentials"});
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }

};

export { loginUser, adminLogin, registerUser };