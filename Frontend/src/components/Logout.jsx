import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      localStorage.removeItem("Users");
      setAuthUser(null);
      toast.success("Logged out Successfully");
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };
  return (
    <div>
      <button 
        className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white font-medium rounded-lg backdrop-blur-md shadow-lg shadow-red-500/20 hover:shadow-red-500/40 border border-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer" 
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
