import React from "react"
import styles from "./Button.module.css"

const Button = ({ text, href }) => {
  /* href = { href } */
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.button}>
        <a href={href}>{text}</a>
      </button>
    </div>
  )
}

export default Button
