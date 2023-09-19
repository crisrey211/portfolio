import React from "react"
import { DropDown } from "./dropDown/DropDown"
import MenuIcon from "./icons/MenuIcon"
import styles from "./NavBar.module.css"

const Home = () => {
  const menuItems = ["Home", "About", "Stack", "Experience", "Projects", "Contact"]

  return (
    <nav className={styles.containerHome}>
      <div className={styles.name}>Christian</div>
      <ul className={styles.navbar}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLocaleLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className={styles.iconNav}>
        <MenuIcon />
        <div></div>
      </div>
      {/* <DropDown /> */}
    </nav>
  )
}

export default Home
