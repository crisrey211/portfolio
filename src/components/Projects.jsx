import React from "react"
import styles from "./Projects.module.css"
import Viewer from "./projectViewer/Viewer.jsx"

const Projects = () => {
  return (
    <div id="projects" className={styles.containerProject}>
      <h5 className={styles.titulo}>Projects</h5>
      <div className={styles.headerContainer}>
        <span className={styles.headerText}>
          Aqui podrás ver algunos de mis proyectos personales y sus diferentes casos de
          estudos con sus diferentes tecnologias aplicadas en cada una de ellas
        </span>
      </div>
      <Viewer imagePosition={true}>
        Mi primer proyecto a nivel personal ha sido el portafolio, que aunque no es nada
        complicado, requiere tiempo en el diseño del figma. Una vez hecho esa primera
        parte, lo siguiente era maquetarlo para poder publicar mi portafolio.
      </Viewer>
    </div>
  )
}

export default Projects
