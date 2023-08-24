import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import NavBar from "@/components/NavBar.jsx"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <About />
      <Skills />
      <Footer />
    </main>
  )
}

export default App
