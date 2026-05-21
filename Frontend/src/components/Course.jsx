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
        const res = await axios.get("http://localhost:4001/book");//here we call the backend api.// we remove localhost from here for deployment 
        console.log(res.data);
        setBook(res.data);//here we update the book variable with data from backend
      } catch(error){
        console.log(error)
      }
    }
    getBook();//calling the function
  },[])//here we pass empty array so that it runs only once 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-16">
        <div className="items-center justify-center text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            We're delighted to have you{" "}
            <span className="text-blue-600 dark:text-blue-500">Here! :)</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Welcome to your premium dashboard. Explore and unlock our entire catalogue of hand-picked technical blueprints, advanced UI architectures, and core programming paradigms. Your pathway to mastery begins right here.
          </p>
          <Link to="/">
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mt-4">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
