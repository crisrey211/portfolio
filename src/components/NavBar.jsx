import React, { useState } from "react"
import { DropDown } from "./dropDown/DropDown"
import MenuIcon from "./icons/MenuIcon"
import "./NavBar.css"
import { t } from "i18next"

/* import detectarTipoDeDispositivo from "../helpers/deviceDetector" */
import { useEffect } from "react"
import Logo from "./icons/Logo.jsx"

const Home = () => {
  const [menu, setMenu] = useState(true)
  const toogleMenu = () => {
    setMenu(!menu)
  }

  const menuItems = [
    t("home", "principal"),
    t("about", "sobre"),
    "stack",
    t("experience", "Experiencia"),
    t("projects", "Proyectos"),
    t("contact", "Contacto"),
  ]

  return (
    <header className="Cabecera">
      <h1 className="Cabecera-h1">
        <a href="#" className="Cabecera-a">
          <Logo />
        </a>
      </h1>
      <div className="Cabecera-button" onClick={toogleMenu}>
        <MenuIcon className="Cabecera-svg" />
      </div>
      <nav className={`Cabecera-nav ${!menu ? `isActive` : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <a href="#about" className="Cabecera-a">
              {t("about", "sobre")}
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#stack" className="Cabecera-a">
              {t("stack", "Stack")}
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#experience" className="Cabecera-a">
              {t("experience", "Experiencia")}
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#projects" className="Cabecera-a">
              {t("projects", "Proyectos")}
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#contact" className="Cabecera-a">
              {t("contact", "Contacto")}
            </a>
          </li>
        </ul>
      </nav>
      {/* <DropDown /> */}
    </header>
  )
}

export default Home
