import React from "react"
import Button from "./buttons/Button"
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        <span className={`${styles.overlayTitle}  ${styles.title1}`}>I'm</span>
        <span className={`${styles.overlayTitle}  ${styles.title2}`}>Christian</span>
        <span className={`${styles.overlayTitle}  ${styles.title3}`}>Reynaltt</span>
      </div>
      <span className={styles.paragraph1}>
        Vercel's frontend cloud gives developers the frameworks, workflows, and
        infrastructure to build a faster, more personalized Web.
      </span>
      <div className={styles.botones}>
        <Button text="Projects" />
        <Button text="Contact me" />
      </div>
    </div>
  )
}
export default Main
