import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    // console.log(process.env.MONGODB);
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MONGODB", error.message);
    process.exit(1);
  }
};
