import express from "express";//here we import the express module 
import mongoose from "mongoose";//importing mongoose to connect to mongoDB
import dotenv from "dotenv";//to use .env file
import cors from "cors";//importing cors to handle cross origin requests
//import path from "path";//to work with file and directory paths

import bookRoute from "./route/book.route.js";//importing book routes 
import userRoute from "./route/user.route.js";//importing user routes
import Book from "./model/book.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

dotenv.config();//configure dotenv to use .env file

const PORT = process.env.PORT || 4000;//this is default port if .env file is not working
const URI = process.env.MongoDBURI;//mongoDB connection string

//connect to mongoDB
mongoose.connect(URI)
  .then(async () => {
    console.log("Connected to MongoDB");
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
        console.log("Seeding initial premium books finished successfully.");
      }

      // Database migration to align existing book prices to the new $1-$5 rules
      console.log("Running database price alignment migration...");
      const existingBooks = await Book.find({});
      for (const item of existingBooks) {
        if (item.category === "Free") {
          if (item.price !== 0) {
            item.price = 0;
            await item.save();
            console.log(`Updated free book '${item.name}' price to $0`);
          }
        } else {
          // If paid book price is outside the $1-$5 range, align it
          if (item.price < 1 || item.price > 5) {
            let newPrice = 3;
            if (item.name === "React 19 Deep Dive") {
              newPrice = 3;
            } else if (item.name === "Interactive UI Animations") {
              newPrice = 4;
            } else if (item.name === "Zero to One Startup Guide") {
              newPrice = 5;
            } else {
              newPrice = Math.max(1, Math.min(5, Math.floor(item.price / 100) || 3));
            }
            const oldPrice = item.price;
            item.price = newPrice;
            await item.save();
            console.log(`Updated paid book '${item.name}' price to $${newPrice} (was ${oldPrice})`);
          }
        }
      }
      console.log("Database price alignment migration completed successfully.");
    } catch (dbError) {
      console.log("Error during database seeding/migration: ", dbError);
    }
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });

app.use("/book", bookRoute);
app.use("/user", userRoute);

//  Serve frontend build (same as local)
app.use(express.static(path.join(__dirname, "dist")));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//deployment code
// if (process.env.NODE_ENV === "production") {
//   const dirPath = path.resolve();

//   app.use(express.static(path.join(dirPath, "Frontend", "dist")));

//   // catch-all handler (NO PATH STRING)
//   app.use((req, res) => {
//     res.sendFile(
//       path.join(dirPath, "Frontend", "dist", "index.html")
//     );
//   });
// }



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
