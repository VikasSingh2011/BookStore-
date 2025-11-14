import express from 'express';//here we import the express module
import { signup, login } from '../controller/user.controller.js';
const router = express.Router()//create a router object

router.post("/signup",signup);
router.post("/login", login);

export default router; 