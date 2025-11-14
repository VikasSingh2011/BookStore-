import express from "express";//here we import the express module
import { getBook } from "../controller/book.controller.js";//Here import getBooks function from controller

const router = express.Router();//create a router object 

router.get("/",getBook);

export default router;