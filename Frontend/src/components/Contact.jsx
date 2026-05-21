import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-md container mx-auto px-4 pt-32 pb-24">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          Get in <span className="text-blue-600 dark:text-blue-500">Touch</span>
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 font-light mb-12 max-w-md mx-auto">
          Have a question about our courses or need assistance with your subscription? Drop us a message below!
        </p>

        <form className="max-w-xl mx-auto space-y-6 glass-card p-8 md:p-10 rounded-3xl border border-slate-300/20 dark:border-white/5 shadow-2xl relative">
          {/* Decorative subtle background gradient */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>

          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-slate-300/40 dark:border-white/10 px-4 py-3 rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 text-sm md:text-base placeholder:text-slate-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-slate-300/40 dark:border-white/10 px-4 py-3 rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 text-sm md:text-base placeholder:text-slate-400"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="w-full border border-slate-300/40 dark:border-white/10 px-4 py-3 rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300 text-sm md:text-base placeholder:text-slate-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer pt-3"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
