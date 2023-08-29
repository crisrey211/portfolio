import React from "react"
import Button from "./buttons/Button"
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.name}>I'm Christian Reynaltt</h1>
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
