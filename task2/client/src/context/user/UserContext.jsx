import { createContext, useReducer, useState, useEffect } from "react";
import userReducer,{ initialState } from "./userReducer.js";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [state, dispatch] = useReducer(userReducer, initialState);
  
    useEffect(() => {
      setMounted(true);
      const savedUserData = localStorage.getItem('user_data');
      if (savedUserData) {
        const userData = JSON.parse(savedUserData);
        dispatch({ type: 'UPDATE_USER', payload: userData });
      }
    }, []);
  
    useEffect(() => {
      if (mounted) {
        localStorage.setItem('user_data', JSON.stringify(state));
      }
    }, [state, mounted]);
  
    
  
    return (
      <UserContext.Provider value={{ state, dispatch}}>
        {mounted && children}
      </UserContext.Provider>
    );
  };