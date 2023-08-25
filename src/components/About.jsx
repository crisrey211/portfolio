import React from "react"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <text className={styles.name}>BRO, I'M CHRISTIAN REYNALTT</text>
        <span className={styles.paragraph1}>
          A Frontend focused Web Developer building the Frontend of Websites and Web
          Applications and interested in Big data and new Web technologies
        </span>
      </div>
      <div className={styles.about} id="about">
        <section className={styles.me}>
          <h5 className={styles.titulo}>ABOUT ME</h5>
          <p className={styles.section}>
            I am a responsible, serious person who is eager to work and learn. As an
            organised and highly motivated person, I am able to adapt myself to any
            circumstance and always give the best of myself in any project, at the same
            time. I strive to work in a team and to develop myself personally and
            professionally.
          </p>
        </section>
        <section className={styles.work}>
          <h5 className={styles.titulo}>WORK EXPERIENCE</h5>
          <span>CMZ</span>
        </section>
      </div>
    </div>
  )
}

export default About
