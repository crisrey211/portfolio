import React from "react"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <nav>
      <div className={styles.name}>Christian</div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Home
