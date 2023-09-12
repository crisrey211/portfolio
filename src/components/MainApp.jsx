import React from "react"
import styles from "./MainApp.module.css"

export const MainApp = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
