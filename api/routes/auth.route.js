import express from 'express';
import { SignUp } from '../controllers/auth.controller.js';
const AuthRouter=express.Router();
AuthRouter.post("/signup",SignUp)
export default AuthRouter