import React from "react"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.name}>BRO, I'M CHRISTIAN REYNALTT</div>
        <span className={styles.paragraph1}>
          A Frontend focused Web Developer building the Frontend of Websites and Web
          Applications and interested in Big data and new Web technologies
        </span>
      </div>
      <div className={styles.about} id="about">
        <h5>About me</h5>
        <div className={styles.paragraph2}>
          I am a responsible, serious person who is eager to work and learn. As an
          organised and highly motivated person, I am able to adapt myself to any
          circumstance and always give the best of myself in any project, at the same
          time. I strive to work in a team and to develop myself personally and
          professionally.
        </div>
        <h5>Work experience</h5>
        <div className={styles}>CMZ</div>
      </div>
    </div>
  )
}

export default About
