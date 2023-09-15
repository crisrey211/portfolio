import React from "react"
import styles from "./Viewer.module.css"

const Viewer = ({ children, imagePosition, src }) => {
  return (
    <div className={styles.viewContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}>Portafolio</h3>
        <div className={styles.description}>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </div>
  )
}
export default Viewer
