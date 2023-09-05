import React from "react"
import MenuIcon from "./icons/MenuIcon"
import styles from "./NavBar.module.css"

const Home = () => {
  return (
    <nav className={styles.container}>
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
      <MenuIcon className={styles.iconNav} />
    </nav>
  )
}

export default Home
