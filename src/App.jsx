import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Home from "@/components/Home.jsx"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

function App() {
  return (
    <>
      <Home />
      <Main />
      <Skills />
      <Footer />
    </>
  )
}

export default App
