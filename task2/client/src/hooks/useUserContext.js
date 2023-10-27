import { UserContext } from "@/context/user/UserContext.jsx";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('User context is missing!');
  }
  return context;
};
