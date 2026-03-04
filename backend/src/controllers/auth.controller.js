import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async(req,res)=>{
  const {fullName , email , password} = req.body;

  try{
    if(!fullName || !email || !password){
      return res.status(400).json({message : "All Fields are required"});
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({email : normalizedEmail});

    if(user){
      return res.status(400).json({ message: "Email already exists" });
    }

    // 1234 -> password == hashed and then stored for protection 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
      fullName,
      email : normalizedEmail,
      password : hashedPassword  
    })

    if(newUser){
      await newUser.save();
      generateToken(newUser._id,res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    }else{
      res.status(400).json({ message: "Invalid user data" });
    }
  }catch(error){
    console.log("Error in signup controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}