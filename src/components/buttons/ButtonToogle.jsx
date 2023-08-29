import React from "react"
import styles from "./ButtonToogle.module.css"

const ButtonToogle = ({ text }) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        {text}
      </button>
    </div>
  )
}

export default ButtonToogle
