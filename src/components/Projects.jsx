import React from "react"
import styles from "./Projects.module.css"
import Viewer from "./projectViewer/Viewer.jsx"

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <h5 className={styles.titulo}>Projects</h5>
      <div className={styles.headerContainer}>
        <span className={styles.headerText}>
          Aqui podrás ver algunos de mis proyectos personales y sus diferentes casos de
          estudos con sus diferentes tecnologias aplicadas en cada una de ellas
        </span>
      </div>
      <Viewer imagePosition={true}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid enim
        possimus ipsam placeat perspiciatis at minus, sapiente eligendi est neque? Sunt
        facilis, ea perspiciatis dolor quibusdam, modi in ut nesciunt non nulla et quia
        similique maiores consectetur ad voluptates officia officiis hic eius reiciendis
        deleniti. Velit aperiam error corrupti? s
      </Viewer>
    </div>
  )
}

export default Projects
