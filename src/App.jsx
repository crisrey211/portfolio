import { useState } from "react"
import "./App.css"
import NavBar from "@/components/NavBar.jsx"
import About from "@/components/About"
import Stack from "@/components/Stack"
import Footer from "@/components/Footer"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Main from "./components/Main"
import { MainApp } from "./components/MainApp"

function App() {
  return (
    <MainApp>
      <NavBar />
      <Main />
      <About />
      {/* <Stack /> */}
      {/* <Experience />
      <Projects />
      <Footer /> */}
    </MainApp>
  )
}

export default App
