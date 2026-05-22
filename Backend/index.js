import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import Book from "./model/book.model.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// --- Serverless-safe DB connection caching ---
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }
  try {
    await mongoose.connect(URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    isConnected = true;
    console.log("Connected to MongoDB");

    // Seed books if DB is empty
    try {
      const count = await Book.countDocuments();
      if (count === 0) {
        console.log("Database is empty. Seeding initial premium books...");
        const seedBooks = [
          {
            name: "Design Systems Handbook",
            price: 0,
            category: "Free",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            title: "Master the art of building scalable design systems for modern digital products."
          },
          {
            name: "React 19 Deep Dive",
            price: 3,
            category: "Programming",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            title: "Learn everything about Server Components, actions, and compiler hooks."
          },
          {
            name: "The Art of Storytelling",
            price: 0,
            category: "Free",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            title: "Unlock your creative potential and construct deep narrative worlds."
          },
          {
            name: "Interactive UI Animations",
            price: 4,
            category: "Design",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            title: "A complete step-by-step guide to modern web transitions and micro-interactions."
          },
          {
            name: "The Minimalist Developer",
            price: 0,
            category: "Free",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            title: "A philosophy of crafting simpler, cleaner, and highly readable architectures."
          },
          {
            name: "Zero to One Startup Guide",
            price: 5,
            category: "Business",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            title: "How to build companies that create new things and change the future."
          }
        ];
        await Book.insertMany(seedBooks);
        console.log("Seeding finished successfully.");
      }
    } catch (seedError) {
      console.log("Error during seeding: ", seedError);
    }

  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    isConnected = false;
    throw error;
  }
};

// Middleware: ensure DB is connected before every request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ message: "Database connection failed", error: error.message });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("BookStore API is running!");
});

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
