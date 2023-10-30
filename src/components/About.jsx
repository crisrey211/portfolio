import React from "react"
import styles from "./About.module.css"
import { t } from "i18next"

const About = () => {
  return (
    <div className={styles.about} id={"about"}>
      <section className={styles.work}>
        <div className={styles.leftSide}>
          <div className={styles.fotoContainer}>
            <img src="/chris.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.me}>
        <div className={styles.rightSide}>
          <h5 className={styles.titulo}>{t("aboutMe", "Sobre mí")}</h5>
          <div className={styles.information}>
            <p className={styles.section}>{t("aboutme_paragraph1")}</p>
            <p className={styles.section}>{t("aboutme_paragraph2")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
