import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import Router from "./routes/User.route.js";
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to Mongo Database"))
  .catch((error) => console.log(error," is the Error"));
app.use('/test',Router)
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
