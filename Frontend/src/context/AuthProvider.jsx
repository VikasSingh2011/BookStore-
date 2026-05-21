import React, {createContext, useContext, useState} from 'react';//import createContext from react

export const AuthContext = createContext();//here exporting AuthContext
export default function AuthProvider({children}){//create AuthProvider function
  const initialAuthUser = localStorage.getItem("Users");//here we are getting the user data from local storage
  const [authUser,setAuthUser]=useState(
    initialAuthUser ? JSON.parse(initialAuthUser): undefined
  );
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);

//we make this because we access our user in globly