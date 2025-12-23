import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  try {
    const DB_URI = process.env.MONGODB_URI;

    if (!DB_URI) {
      throw new Error("MONGODB_URI not found in .env file");
    }

    mongoose.set("strictQuery", false);

    await mongoose.connect(DB_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default Connection;
