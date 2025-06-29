import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://nyxxintel:FlCuOxSyRxhCx2hX@cluster0.zoatj.mongodb.net/auth_details?retryWrites=true&w=majority&appName=Cluster0";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("✅ Already connected to MongoDB");
      return mongoose.connection;
    }

    await mongoose.connect(mongoURI, {
      dbName: "auth_details", // ✅ Database name
    });

    console.log("✅ Successfully connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
}
