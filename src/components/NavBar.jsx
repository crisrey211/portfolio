import React, { useState } from "react"
import { DropDown } from "./dropDown/DropDown"
import MenuIcon from "./icons/MenuIcon"
import "./NavBar.css"
import { t } from "i18next"

/* import detectarTipoDeDispositivo from "../helpers/deviceDetector" */
import { useEffect } from "react"

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
          Christian
        </a>
      </h1>
      <div className="Cabecera-button" onClick={toogleMenu}>
        <MenuIcon className="Cabecera-svg" />
      </div>
      <nav className={`Cabecera-nav ${!menu ? `isActive` : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <a href="" className="Cabecera-a">
              item
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="" className="Cabecera-a">
              item
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="" className="Cabecera-a">
              item
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="" className="Cabecera-a">
              item
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="" className="Cabecera-a">
              item
            </a>
          </li>
        </ul>
      </nav>
      {/* <DropDown /> */}
    </header>
  )
}

export default Home
