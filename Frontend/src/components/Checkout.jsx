import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;

  const [loading, setLoading] = useState(false);

  // If no item in state, go back
  if (!item) {
    navigate("/");
    return null;
  }

  const isFree = item.category === "Free";

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Payment Successful! Enjoy your book.");
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto md:px-20 px-4 pt-28 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Order Summary */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-6">Order Summary</h2>
            <div className="glass-card p-6 rounded-3xl flex flex-col md:flex-row gap-6 items-center md:items-start">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-32 h-40 object-cover rounded-xl shadow-lg shadow-blue-500/20"
              />
              <div className="space-y-3 w-full text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{item.title}</p>
                <div className="text-2xl font-black text-blue-600 pt-2">
                  {isFree ? "FREE" : `$${item.price}`}
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl space-y-4">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Subtotal</span>
                <span>{isFree ? "$0.00" : `$${item.price}`}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Taxes & Fees</span>
                <span>$0.00</span>
              </div>
              <hr className="border-slate-300/30 dark:border-white/10" />
              <div className="flex justify-between text-xl font-extrabold text-slate-800 dark:text-white">
                <span>Total</span>
                <span>{isFree ? "$0.00" : `$${item.price}`}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-6">Secure Checkout</h2>
            <form onSubmit={handlePayment} className="glass-card p-8 rounded-3xl space-y-6 premium-glow relative overflow-hidden">
              {/* Fake secure badge */}
              <div className="absolute top-4 right-4 text-emerald-500 opacity-50 flex items-center gap-1 text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SSL
              </div>

              {!isFree && (
                <div className="flex flex-col items-center space-y-6 text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-inner border border-slate-200">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=6386782044@nyes&pn=bookStore&cu=INR`} 
                      alt="UPI QR Code" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-slate-800 dark:text-white">Scan to Pay via Any UPI App</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">GPay, PhonePe, Paytm, BHIM</p>
                    <div className="inline-block mt-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-white/10 font-mono text-sm dark:text-slate-200 select-all">
                      UPI ID: 6386782044@nyes
                    </div>
                  </div>
                  <div className="w-full text-left space-y-2 pt-4">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Transaction ID (UTR)</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400" placeholder="Enter 12-digit UTR number after payment" />
                  </div>
                </div>
              )}

              {isFree && (
                <div className="py-8 text-center text-slate-600 dark:text-slate-300 font-light">
                  This book is completely free! Click the button below to instantly add it to your library.
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <span>{isFree ? "Claim Free Book" : "Verify Payment"}</span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
