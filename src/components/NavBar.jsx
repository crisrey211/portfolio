import React from "react"
import MenuIcon from "./icons/MenuIcon"
import styles from "./NavBar.module.css"

const Home = () => {
  return (
    <nav className={styles.containerHome}>
      <div className={styles.name}>Christian</div>
      <ul className={styles.navbar}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#stack">Stack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.iconNav}>
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Home
