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
        </div>
        <div className={styles.logo}>
          <Css3LogoIcon className={styles.css} />
        </div>
        <div className={styles.logo}>
          <JavaScriptLogoIcon className={styles.javascript} />
        </div>
        <div className={styles.logo}>
          <ReactIcon className={styles.react} />
        </div>
        <div className={styles.logo}>
          <GitIcon className={styles.git} />
        </div>
      </div>
    </div>
  )
}

export default Stack
