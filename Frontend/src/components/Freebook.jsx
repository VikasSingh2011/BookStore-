import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";
import { useEffect, useState } from "react";

//import list from "../../public/list.json";////now we will fetch data from backend instead of json file so now there is no use of this line.

const Freebook = () => {
  const [book, setBook] = useState([]); //here book is variable and setBook is function to update the variable
  useEffect(() => {
    //now we call our backend api to get data
    const getBook = async () => {
      //here we created an async function
      try {
        const res = await axios.get("https://bookstore-hqyk.onrender.com/book"); //here we call the backend api.
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data); //here we update the book variable with data from backend
      } catch (error) {
        console.log(Error);
      }
    };
    getBook(); //calling the function
  }, []); //here we pass empty array so that it runs only once

  // const filterData = list.filter((data) => data.category === "Free");//now we will fetch data from backend instead of json file so now there is no use of this line.

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
