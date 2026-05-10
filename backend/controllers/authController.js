const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    name = name?.trim();
    email = email?.trim().toLowerCase();

    if(!name || !email || !password){
      return res.status(400).json({ message : "All fields are required"});
    }

    if(!password || password.length < 6){
      return res.status(400).json({message: "Password must be at least 6 characters"})
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role:"student"
    });

    res.status(201).json({
      message: "User registered successfully",
      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role

      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    email = email?.trim().toLowerCase();

    if(!email || !password){
      return res.status(400).json({message:"All fields are required"});
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};