import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config()
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //process code 1 means exit with failure, 0 means success 
  }
};