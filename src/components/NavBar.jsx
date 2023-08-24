import React from "react"
import styles from "./NavBar.module.css"

const Home = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>Christian</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Home
