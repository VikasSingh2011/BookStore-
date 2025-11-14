import User from "../model/user.model.js";//importing user model to interact with user collection in mongoDB 
import bcryptjs from "bcryptjs"

export const signup=async(req,res) =>{//here we created a function
  try{
    const {fullname,email,password} = req.body;//destructuring the data from request body
    const user =await User.findOne({email});//here we check if user with the email already exists
    if(user){
      return res.status(400).json({message:"User already exists"});
    }

    const hashPassword = await bcryptjs.hash(password,10);//here we hash the password before saving to database
    //if user does not exist we create a new user
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();//here we save the user to the database
    res.status(201).json({message:"User created successfully",user:{
      _id: createdUser._id,//Sending only necessary user data in response
      fullname: createdUser.fullname,//Sending only necessary user data in response
      email: createdUser.email,//Sending only necessary user data in response
    }});
  }catch(error){
    console.log("Error: " + error.message);
    res.status(500).json({message: "Internal server error"});
  }
};
export const login = async(req,res) =>{
  try{
    const {email,password} = req.body;//destructuring the data from request body
    const user =await User.findOne({email});//here we check if user with the email already exists
    const isMatch = await bcryptjs.compare(password,user.password);
    if(!user || !isMatch){
      return res.status(400).json({message:"Invalid username or password"});
    }else{
      res.status(200).json({message:"Login successful",user:{
        _id:user._id,
        fullname:user.fullname,
        email:user.email
      }})
    }
  }catch(error){
    console.log("Error: " + error.message)
    res.status(500).json({message: "Internal server error"});
  }
}