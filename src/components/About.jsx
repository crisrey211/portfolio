import React from "react"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.name}>I'm Christian Reynaltt</h1>
        <span className={styles.paragraph1}>
          A Frontend focused Web Developer building the Frontend of Websites and Web
          Applications and interested in Big data and new Web technologies
        </span>
      </div>
      <div className={styles.about} id="about">
        <section className={styles.me}>
          <h5 className={styles.titulo}>About me</h5>
          <p className={styles.section}>
            Free developers from time-consuming, unnecessary processes that slow your
            work, so you and your team can focus on creating.
          </p>
        </section>
        <section className={styles.work}>
          <h5 className={styles.titulo}>Work experience</h5>
          <span>CMZ</span>
        </section>
      </div>
    </div>
  )
}

export default About
