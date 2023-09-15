import React from "react"
import MenuIcon from "./icons/MenuIcon"
import styles from "./NavBar.module.css"

const Home = () => {
  const menuItems = ["Home", "About", "Stack", "Projects", "Contact"]

  return (
    <nav className={styles.containerHome}>
      <div className={styles.name}>Christian</div>
      <ul className={styles.navbar}>
        {menuItems.map((item) => (
          <li>
            <a href={`#${item.toLocaleLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className={styles.iconNav}>
        <MenuIcon />
        <div></div>
      </div>
    </nav>
  )
}

export default Home
