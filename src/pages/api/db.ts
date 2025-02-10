import mongoose from "mongoose";

const mongoURI = "mongodb+srv://nyxxintel:FlCuOxSyRxhCx2hX@cluster0.zoatj.mongodb.net/newsletter?retryWrites=true&w=majority&appName=Cluster0";

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(mongoURI, {
      dbName: "newsletter",
      bufferCommands: false,
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}
