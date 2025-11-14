import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{//here we created a function
  try{//here we use try catch to handle error 
    const book = await Book.find()
    res.status(200).json(book);
  }catch(error){
    console.log("Error: ",error);
    res.status(500).json(error);
  }

}