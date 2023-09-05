import React from "react"
import styles from "./Viewer.module.css"
import captura_1 from "../../assets/frame1.jpg"

const Viewer = ({ children, imagePosition }) => {
  return (
    <div className={styles.view}>
      <div className={styles.imageContainer}>
        <img src={captura_1} alt="" width="100%" height="100%" className={styles.image} />
      </div>
      <span className={styles.description}>
        <h3>Portafolio</h3>
        {children}
      </span>
    </div>
  )
}
export default Viewer
