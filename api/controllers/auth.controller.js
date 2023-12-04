import { User } from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
export const SignUp=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedpass=bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashedpass});
    try {
        await newUser.save();
        res.status(201).json("user created succesfully");
    } catch (error) {
        next(error);
    }
   
};
