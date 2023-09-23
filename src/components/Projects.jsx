import { t } from "i18next"
import React from "react"
import styles from "./Projects.module.css"
import Viewer from "./projectViewer/Viewer.jsx"

const Projects = () => {
  return (
    <div id={"projects"} className={styles.containerProject}>
      <h5 className={styles.titulo}>{t("projects", "Proyectos")}</h5>
      <div className={styles.headerContainer}>
        <p className={styles.headerText}>
          Aqui podrás ver algunos de mis proyectos personales y sus diferentes casos de
          estudios con sus diferentes tecnologias aplicadas en cada una de ellas.
        </p>
      </div>
      <Viewer imagePosition={true} src="/project1.PNG">
        Mi objetivo con este portafolio es compartir mi trabajo y mostrar cómo puedo
        contribuir a proyectos emocionantes. La primera parte me ha requerido tiempo ya y
        que hice un diseño del figma. Una vez hecho esa primera parte, lo siguiente era
        maquetarlo e implementar funciones como DarkMode y traducciones.
      </Viewer>
    </div>
  )
}

export default Projects
