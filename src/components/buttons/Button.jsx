import React from "react"
import styles from "./Button.module.css"

const Button = ({ text, href }) => {
  /* href = { href } */
  return (
    <div className={styles.container} href={href}>
      <button type="button" className={styles.button} href={href}>
        {text}
      </button>
    </div>
  )
}

export default Button
