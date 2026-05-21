import React, { useState } from "react";
import toast from "react-hot-toast";

const Banner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    toast.success("Successfully subscribed to newsletter!");
    setEmail("");
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 pt-16 md:pt-24 items-center justify-between gap-8">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-16 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hello, welcome here to learn something{" "}
              <span className="text-blue-600 dark:text-blue-500 block md:inline font-black">new everyday!!!</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300/80 leading-relaxed font-light">
              Discover a curated universe of books. From advanced system designs to beautiful micro-interaction concepts, we collect the highest caliber resources to expand your knowledge boundaries every single day.
            </p>

            <div className="w-full max-w-lg pt-4 relative group">
              {/* Main Input Container */}
              <div className="relative flex items-center bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-white/10 rounded-2xl p-1.5 shadow-sm transition-all duration-300 focus-within:ring-slate-400/50">
                <div className="pl-4 pr-3 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H3zm0 1.068l6.638 3.626a2 2 0 001.724 0L18 5.068V14a1 1 0 01-1 1H3a1 1 0 01-1-1V5.068z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 text-sm md:text-base outline-none pr-4"
                  placeholder="Enter email for premium updates..."
                />
                <button 
                  onClick={handleSubscribe}
                  className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform active:scale-95 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-blue-500/25"
                >
                  <span>Subscribe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hidden sm:block">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 w-full md:w-1/2 flex justify-center items-center md:pl-8">
          <div className="relative max-w-[440px] w-full animate-floating">
            {/* Soft decorative background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-blue-300/10 blur-3xl rounded-full opacity-70"></div>
            
            {/* Transparent Floating Image Showcase */}
            <div className="relative z-10 p-6 drop-shadow-2xl overflow-visible">
              <img 
                src="/Banner-transparent.png" 
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" 
                alt="Banner" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
