import React from "react";
import Cards from "./Cards";
// import list from "../../public/list.json";//now we will fetch data from backend instead of json file so now there is no use of this line.
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Course() {
  const [book, setBook] = useState([])//here book is variable and setBook is function to update the variable
  useEffect(() => {//now we call our backend api to get data
    const getBook = async()=>{//here we created an async function
      try{
        const res = await axios.get("http://localhost:4001/book");//here we call the backend api.
        console.log(res.data);
        setBook(res.data);//here we update the book variable with data from backend
      } catch(error){
        console.log(Error)
      }
    }
    getBook();//calling the function
  },[])//here we pass empty array so that it runs only once 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
        <div className="mt-10 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :) </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos
            magnam quod quia, totam ipsum molestias aliquid veritatis at
            molestiae! Illum sunt suscipit assumenda eaque, porro fugit iusto
            necessitatibus adipisci? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem officiis odio dignissimos quidem modi, eos
            ipsam cum recusandae laborum, maiores accusamus incidunt nobis
            temporibus!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
