import React from "react"
import styles from "./About.module.css"
import Css3LogoIcon from "./icons/Css3LogoIcon"
import Html5LogoIcon from "./icons/Html5LogoIcon.jsx"
import JavaScriptLogoIcon from "./icons/JavaScriptLogoIcon"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about} id="about">
        <section className={styles.me}>
          <h5 className={styles.titulo}>About me</h5>
          <p className={styles.section}>
            Free developers from time-consuming, unnecessary processes that slow your
            work, so you and your team can focus on creating.
          </p>
        </section>
        <section className={styles.work}>
          <h5 className={styles.titulo}>Software Stack</h5>
          <div className={styles.logos}>
            <div className={styles.logo}>
              <Html5LogoIcon className={styles.html5} />
            </div>
            <div className={styles.logo}>
              <Css3LogoIcon className={styles.css} />
            </div>
            <div className={styles.logo}>
              <JavaScriptLogoIcon className={styles.javascript} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
