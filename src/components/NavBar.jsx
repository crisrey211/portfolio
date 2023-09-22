import React, { useState } from "react"
import { DropDown } from "./dropDown/DropDown"
import MenuIcon from "./icons/MenuIcon"
import styles from "./NavBar.module.css"
import { t } from "i18next"

/* import detectarTipoDeDispositivo from "../helpers/deviceDetector" */
import { useEffect } from "react"

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = [
    t("home", "principal"),
    t("about", "sobre"),
    "stack",
    t("experience", "Experiencia"),
    t("projects", "Proyectos"),
    t("contact", "Contacto"),
  ]
  console.log(isMobileMenuOpen)
  return (
    <nav
      className={`${styles.containerHome} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}
    >
      <div className={styles.logo}>Christian</div>

      <div className={`${styles.burguer}`} onClick={toggleMobileMenu}>
        <MenuIcon />
      </div>
      <ul className={`${styles.navbar} `}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* <DropDown /> */}
    </nav>
  )
}

export default Home
