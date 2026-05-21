import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Checkout from "./components/Checkout";
import Jobs from "./components/Jobs";
import PressKit from "./components/PressKit";
import BookReader from "./components/BookReader";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {
   const [authUser, setAuthUser] = useAuth();
    console.log(authUser);
  
  return (
    <>
      <div className="dark:text-white bg-transparent min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={authUser?<Checkout />:<Navigate to="/signup"/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/read/:id" element={<BookReader />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
