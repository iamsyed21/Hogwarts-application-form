import Form from "@/components/Form.jsx";
import Navbar from "@/components/Navbar";
import { toggleTheme } from "@/context/theme/themeActions.js"
import { useTheme } from "@/hooks/useTheme.js"
import { useEffect } from "react";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Form />
    </>
  )
}
