import React from "react"
import styles from "./Projects.module.css"
import captura_1 from "../assets/captura1.png"

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <h5 className={styles.titulo}>My work</h5>
      <div className={styles.view}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid enim
          possimus ipsam placeat perspiciatis at minus, sapiente eligendi est neque? Sunt
          facilis, ea perspiciatis dolor quibusdam, modi in ut nesciunt non nulla et quia
          similique maiores consectetur ad voluptates officia officiis hic eius reiciendis
          deleniti. Velit aperiam error corrupti?
        </span>
      </div>
    </div>
  )
}

export default Projects
