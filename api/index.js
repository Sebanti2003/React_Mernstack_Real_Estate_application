import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import Router from "./routes/User.route.js";
import AuthRouter from "./routes/auth.route.js";
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to Mongo Database"))
  .catch((error) => console.log(error, " is the Error"));
app.use(express.json());
app.use("/api/auth", AuthRouter);
app.use((err,req,res,next)=>{
  const statuscode=err.statusCode||500;
  const errormessage=err.message||"Server connection error";
  return res.status(statuscode).json({
    success:"false",
    statuscode,
    errormessage
  })

})
app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
