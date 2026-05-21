import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Cards({ item }) {
  const isFree = item.category === "Free";
  const [authUser] = useAuth();
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent card click event from firing
    if (!authUser) {
      toast.error("Please login to purchase books");
      setTimeout(() => {
        const modal = document.getElementById("my_modal_3");
        if (modal) modal.showModal();
        else navigate("/signup");
      }, 1000);
    } else {
      navigate("/checkout", { state: item });
    }
  };

  return (
    <>
      <div className="mt-6 my-3 p-3">
        <div 
          onClick={() => navigate(`/read/${item._id || item.id}`, { state: item })}
          className="card w-full glass-card hover:-translate-y-2 duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-black/40 overflow-hidden rounded-2xl group border border-slate-300/20 dark:border-white/5 premium-glow cursor-pointer"
        >
          <figure className="relative overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-950">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Elegant overlay blur */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </figure>
          <div className="card-body p-5 space-y-3">
            <h2 className="card-title text-lg font-bold flex items-center justify-between tracking-tight text-slate-800 dark:text-white">
              <span className="truncate pr-2">{item.name}</span>
              <span className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full ${
                isFree 
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20" 
                  : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              }`}>
                {item.category}
              </span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400/80 leading-relaxed font-light min-h-[40px] line-clamp-2">
              {item.title}
            </p>
            <div className="card-actions justify-between items-center pt-2">
              <div className="text-base font-semibold text-slate-800 dark:text-slate-200">
                {isFree ? (
                  <span className="text-emerald-500 font-extrabold uppercase tracking-wide">Free</span>
                ) : (
                  <span>${item.price}</span>
                )}
              </div>
              <div 
                onClick={handleBuyNow}
                className="px-4 py-1.5 text-xs font-semibold text-slate-800 dark:text-white rounded-full border border-slate-300/40 dark:border-white/10 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
