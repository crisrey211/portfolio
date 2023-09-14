import React from "react"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about} id="about">
      <section className={styles.work}>
        <div className={styles.leftSide}>
          <h5 className={styles.titulo}>Mi foto</h5>
          <div className={styles.fotoContainer}>
            <img src="../../src/assets/chris.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.me}>
        <div className={styles.rightSide}>
          <h5 className={styles.titulo}>About me</h5>
          <div className={styles.information}>
            <p className={styles.section}>
              Soy un desarrollador Front-end Web que crea diversas aplicaciones
              entendiendo el producto y buscando su éxito. Mira algunos de mis proyectos
              personales.
            </p>
            <p className={styles.section}>
              Me gusta compartir los conocimientos que he adquirido a lo largo de mi
              carrera como desarrollador, por lo que puedo ayudar a la gente en lo que
              pueda. Siente libre de contactarme o seguirme en LinkedIn.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
