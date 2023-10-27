import { ThemeContext } from "@/context/theme/ThemeContext.jsx";
import { useContext } from "react";



export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('Ohhh no the context is missing! Who am i?');
    }
    return context;
  };