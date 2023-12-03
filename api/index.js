import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to Mongo Database"))
  .catch((error) => console.log(error," is the Error"));
app.get("/", (req, res) => {
  res.json([
    { name: "Sebanti", age: 28 },
    { name: "Sebanti", age: 28 },
    { name: "Sebanti", age: 28 },
  ]);
});
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
