import { t } from "i18next"
import React from "react"
import styles from "./Projects.module.css"
import Viewer from "./projectViewer/Viewer.jsx"

const Projects = () => {
  return (
    <div id={t("projects", "Proyectos")} className={styles.containerProject}>
      <h5 className={styles.titulo}>{t("projects", "Proyectos")}</h5>
      <div className={styles.headerContainer}>
        <p className={styles.headerText}>
          Aqui podrás ver algunos de mis proyectos personales y sus diferentes casos de
          estudios con sus diferentes tecnologias aplicadas en cada una de ellas.
        </p>
      </div>
      <Viewer imagePosition={true} src="/project1.PNG">
        Mi primer proyecto a nivel personal ha sido el portafolio, que aunque no es nada
        complicado, requiere tiempo en el diseño del figma. Una vez hecho esa primera
        parte, lo siguiente era maquetarlo para poder publicar mi portafolio.
      </Viewer>
    </div>
  )
}

export default Projects
