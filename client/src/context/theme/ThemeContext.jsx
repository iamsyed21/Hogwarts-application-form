import { createContext, useEffect, useReducer, useState } from "react"
import themeReducer from "./themeReducer.js";

// this will be our default theme when application is first started
const initialState = {
    theme:'light',
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: { theme: savedTheme } });
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', state.theme);
      document.body.className = '';
      document.body.classList.add(`${state.theme}-theme`);
    }
  }, [state.theme, mounted]);

    return (
      <ThemeContext.Provider value={{ state, dispatch }}>
        {mounted && children}
      </ThemeContext.Provider>
    );
  };