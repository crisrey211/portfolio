import React from "react"
import styles from "./Viewer.module.css"

const Viewer = ({ children, imagePosition }) => {
  return (
    <div className={styles.view}>
      <div className={styles.imageContainer}>
        <img src="/project1.PNG" width="100%" height="100%" className={styles.image} />
      </div>
      <span className={styles.description}>
        <h3>Portafolio</h3>
        {children}
      </span>
    </div>
  )
}
export default Viewer
