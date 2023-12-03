import express from 'express'
import  Usercontroller from '../controllers/User.controller.js';
const Router=express.Router();
Router.get('/',Usercontroller)
export default Router;