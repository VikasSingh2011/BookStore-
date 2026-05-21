import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-20 flex flex-col items-center relative">
        
        {/* Back Button */}
        <div className="w-full max-w-5xl flex justify-start mb-4">
          <Link to="/" className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium">
            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mb-16 animate-floating">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-500">bookStore</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            We are more than just a bookstore. We are a gateway to infinite knowledge, curated specifically for developers, designers, and visionaries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          
          {/* Purpose & Mission */}
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="h-12 w-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Our goal is to democratize access to premium educational resources. We believe that everyone should have the ability to learn high-income skills, whether it's full-stack development, UI/UX design, or business scaling.
            </p>
          </div>

          {/* Story / Background */}
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="h-12 w-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">The Origin Story</h2>
            <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Started as a passion project, bookStore evolved into a massive digital library. Frustrated by scattered, low-quality tutorials, we built a centralized hub where only the highest caliber resources are allowed.
            </p>
          </div>

          {/* Creator & Team */}
          <div className="glass-card p-8 rounded-3xl space-y-4 md:col-span-2 flex flex-col md:flex-row gap-8 items-center premium-glow hover:-translate-y-2 transition-all duration-300">
            <div className="w-32 h-32 rounded-full bg-blue-600 p-1 shrink-0">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-black text-blue-600">BS</span>
              </div>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Meet the Creator</h2>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                Handcrafted with precision by dedicated developers. We combined modern React ecosystems with sleek Tailwind aesthetics to create an unparalleled reading and browsing experience. Our team is constantly pushing updates to ensure state-of-the-art performance.
              </p>
            </div>
          </div>

          {/* Trust & Stats */}
          <div className="glass-card p-8 rounded-3xl space-y-4 md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">Why Trust Us?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-blue-600">50K+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Happy Readers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-amber-500">1.2K</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Premium Books</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-blue-600">24/7</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Support</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-amber-500">100%</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Secure</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
