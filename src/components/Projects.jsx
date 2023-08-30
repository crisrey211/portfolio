import React from "react"
import styles from "./Projects.module.css"
import captura_1 from "../assets/captura1.png"

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <h5 className={styles.titulo}>Projects</h5>
      <div className={styles.view}>
        <div className={styles.imageContainer}>
          <img
            src={captura_1}
            alt=""
            width="100%"
            height="100%"
            className={styles.image}
          />
        </div>
        <span className={styles.description}>
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
