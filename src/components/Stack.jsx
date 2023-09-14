import React from "react"
import styles from "./Stack.module.css"
import Css3LogoIcon from "./icons/Css3LogoIcon"
import Html5LogoIcon from "./icons/Html5LogoIcon.jsx"
import JavaScriptLogoIcon from "./icons/JavaScriptLogoIcon"
import ReactIcon from "./icons/ReactIcon"
import GitIcon from "./icons/GitIcon"

const Stack = () => {
  return (
    <div className={styles.stackContainer} id="stack">
      <h5 className={styles.titulo}>Software Stack</h5>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <Html5LogoIcon className={styles.html5} />
          <span>HTML5</span>
        </div>
        <div className={styles.logo}>
          <Css3LogoIcon className={styles.css} />
          <span>CSS3</span>
        </div>
        <div className={styles.logo}>
          <JavaScriptLogoIcon className={styles.javascript} />
          <span>Javascript</span>
        </div>
        <div className={styles.logo}>
          <ReactIcon className={styles.react} />
          <span>React</span>
        </div>
        <div className={styles.logo}>
          <GitIcon className={styles.git} />
          <span>Git</span>
        </div>
      </div>
    </div>
  )
}

export default Stack
