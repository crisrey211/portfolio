import { t } from "i18next"
import React from "react"
import styles from "./Projects.module.css"
import Viewer from "./projectViewer/Viewer.jsx"

const Projects = () => {
  return (
    <div id={"projects"} className={styles.containerProject}>
      <h5 className={styles.titulo}>{t("projects", "Proyectos")}</h5>
      <div className={styles.headerContainer}>
        <p className={styles.headerText}>{t("projects_header")}</p>
      </div>
      <Viewer imagePosition={true} src="/project1.PNG">
        {t("project1_description")}
      </Viewer>
    </div>
  )
}

export default Projects
