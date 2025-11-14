import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Login from "../components/Login";   // ✅ Modal Loaded Here

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />

      {/* ✅ MUST EXIST IN DOM FOR showModal() to work */}
      <Login />
    </>
  );
}

export default Home;

