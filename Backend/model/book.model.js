import mongoose from "mongoose";//here we import the mongoose 

//now we write the schema for the data.By using that we tell what data we send to the database.
const bookSchema = mongoose.Schema({
  name:String,
  price:Number,
  category:String,
  image:String,
  title:String
}) 
//now we created a model of the Schema    
const Book=mongoose.model("Book",bookSchema);

export default Book;//exporting the model to use it in other files
