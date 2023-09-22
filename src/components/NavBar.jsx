import React, { useState } from "react"
import { DropDown } from "./dropDown/DropDown"
import MenuIcon from "./icons/MenuIcon"
import styles from "./NavBar.module.css"
import { t } from "i18next"

/* import detectarTipoDeDispositivo from "../helpers/deviceDetector" */
import { useEffect } from "react"

const Home = () => {
  const [tipoDeDispositivo, setTipoDeDispositivo] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  console.log(isOpen)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect
        let type

        if (width <= 768) {
          type = "Móvil"
        } else if (width <= 1024) {
          type = "Tablet"
        } else {
          type = "Ordenador"
        }

        setTipoDeDispositivo(type)
      }
    })

    // Observar el tamaño de la ventana
    observer.observe(window.document.body)

    // Limpieza del efecto
    return () => {
      observer.disconnect()
    }
  }, [])

  const menuItems = [
    t("home", "principal"),
    t("about", "sobre"),
    "stack",
    t("experience", "Experiencia"),
    t("projects", "Proyectos"),
    t("contact", "Contacto"),
  ]

  return (
    <nav className={styles.containerHome}>
      <div className={styles.name}>Christian</div>

      {tipoDeDispositivo === "Ordenador" && (
        <ul className={styles.navbar}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
      {tipoDeDispositivo !== "Ordenador" ? (
        <div className={styles.iconNav}>
          <div className={styles.name}>Christian</div>

          <div className={styles.menuContainer}>
            <div
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <MenuIcon />
            </div>
            {isOpen &&
              menuItems.map((item, index) => (
                <li key={index}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <DropDown /> */}
    </nav>
  )
}

export default Home
