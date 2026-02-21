import express from "express"; //here we import the express module
import mongoose from "mongoose"; //importing mongoose to connect to mongoDB
import dotenv from "dotenv"; //to use .env file
import cors from "cors"; //importing cors to handle cross origin requests
import path from "path"; //for handling file paths
import { fileURLToPath } from "url"; //to get __dirname in ES modules
dotenv.config(); //configure dotenv to use .env file

import bookRoute from "./route/book.route.js"; //importing book routes
import userRoute from "./route/user.route.js"; //importing user routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); //create an express application

app.use(express.json()); //using express json middleare to parse json data in request body.
app.use(cors()); //using cors middleware to handle cross origin requests

const PORT = process.env.PORT || 4000; //this is default port if .env file is not working
const URI = process.env.MongoDBURI; //mongoDB connection string

//connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining routes
app.use("/book", bookRoute); //here we are using book routes
app.use("/user", userRoute); //here we are using user routes

//  Minimal addition: root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
