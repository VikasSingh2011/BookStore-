import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-lg container mx-auto md:px-20 px-4 pt-28 pb-20">
        <h1 className="text-3xl font-semibold text-center mb-10">Contact Us</h1>

        <form className="max-w-xl mx-auto space-y-6 shadow-md p-8 rounded-md border">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Type your message"
              rows="4"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
