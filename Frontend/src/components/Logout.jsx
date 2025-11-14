import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser, //set authuser to null
        User: null,
      });
      localStorage.removeItem("Users"); //remove user from local storage
      toast.success("Logout Successfully");
      setTimeout(() => { 
        window.location.reload();//to reload the page after login
      }, 2000);//to close the model after 3 sec
    } catch (error) {
      toast.error("Error:" + error);
      setTimeout( ()=> {},2000);
    };

  };
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
