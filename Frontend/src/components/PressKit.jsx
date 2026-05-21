import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PressKit = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-20 flex flex-col items-center relative min-h-screen">
        
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
            <span className="text-blue-600 dark:text-blue-500">Press</span> Kit
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Everything you need to cover bookStore. Download our official logos, brand assets, and read our latest press releases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          
          {/* Logo Downloads */}
          <div className="glass-card p-8 rounded-3xl space-y-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Brand Logos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 bg-white dark:bg-slate-900/50">
                <a className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                  book<span className="text-blue-600 dark:text-blue-500">Store</span>
                </a>
                <p className="text-xs text-slate-500">Primary Logo (Standard)</p>
                <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300">
                  Download SVG
                </button>
              </div>

              <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 bg-slate-900">
                <a className="text-4xl font-extrabold tracking-tight text-white">
                  book<span className="text-blue-400">Store</span>
                </a>
                <p className="text-xs text-slate-400">Light Logo (For Dark Backgrounds)</p>
                <button className="px-6 py-2 bg-slate-800 text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-300">
                  Download SVG
                </button>
              </div>

            </div>
          </div>

          {/* Brand Colors */}
          <div className="glass-card p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Brand Colors</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30"></div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white">Brand Blue</h3>
                  <p className="text-sm font-mono text-slate-500">HEX: #2563EB</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 shadow-lg shadow-amber-500/30"></div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white">Brand Amber</h3>
                  <p className="text-sm font-mono text-slate-500">HEX: #F59E0B</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 shadow-lg shadow-slate-900/30 border border-slate-700"></div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white">Space Slate</h3>
                  <p className="text-sm font-mono text-slate-500">HEX: #0F172A</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details & Press Contact */}
          <div className="glass-card p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Media Inquiries</h2>
            <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              If you are a member of the press and need additional resources or an interview with our founding team, please reach out to our media relations department.
            </p>
            <div className="space-y-2">
              <p className="font-bold text-slate-800 dark:text-white">Press Email</p>
              <a href="mailto:press@bookstore.com" className="text-blue-600 hover:text-amber-500 transition-colors duration-300 font-mono text-lg">
                press@bookstore.com
              </a>
            </div>
            <div className="pt-4">
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 active:scale-95">
                Download Full Press Kit (.ZIP)
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default PressKit;
