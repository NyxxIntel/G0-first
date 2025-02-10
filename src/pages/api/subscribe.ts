import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';


const mongoURI = "mongodb+srv://nyxxintel:FlCuOxSyRxhCx2hX@cluster0.zoatj.mongodb.net/newsletter?retryWrites=true&w=majority&appName=Cluster0";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return; // Skip if already connected

  try {
    await mongoose.connect(mongoURI);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

// Call the function once during the first request
connectDB();


const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(409).json({ message: 'You are already subscribed.' });  // ✅ Return 409 Conflict
    }

    await new Subscriber({ email }).save();

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'nyxxintel@gmail.com',  // Replace with your email
    //     pass: 'hmgc jiky vann tgfo',     // Use App Password (not your main password)
    //   },
    // });

    // await transporter.sendMail({
    //   from: '"Newsletter" <your-email@gmail.com>',
    //   to: 'nyxxintel@gmail.com',
    //   subject: 'New Subscription',
    //   text: `New subscriber: ${email}`,
    // });

    return res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
}
