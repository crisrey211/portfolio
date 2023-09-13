import { useState } from "react"
import "./App.css"
import NavBar from "@/components/NavBar.jsx"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Projects from "./components/Projects"
import Main from "./components/Main"
import { MainApp } from "./components/MainApp"

function App() {
  return (
    <MainApp>
      <NavBar />
      <Main />
      {/* <About />
      <Skills />
      <Projects />
      <Footer /> */}
    </MainApp>
  )
}

export default App
