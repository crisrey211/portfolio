import React from "react"
import styles from "./Footer.module.css"
import LinkedInIcon from "./icons/LinkedInIcon"
import GithubIcon from "./icons/GithubIcon"
import EnvelopeIcon from "./icons/EnvelopeIcon"

const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.footerUpper}>
        <div className={styles.contact}>
          <span className={styles.name}>Christian Reynaltt</span>
          <h5 className={styles.content}>
            A Frontend focused Web Developer building the Frontend of Websites and Web
            Applications that leads to the success of the overall product
          </h5>
        </div>
        <div className={styles.social}>
          <div>
            <span className={styles.name}>Social</span>
          </div>
          <div className={styles.logos}>
            <LinkedInIcon className={styles.logo} />
            <GithubIcon className={styles.logo} />
            <EnvelopeIcon className={styles.logo} />
          </div>
        </div>
      </div>
      <div className={styles.footerLowest}>
        <span>© Copyright 2023. Made by Christian Reynaltt</span>
      </div>
    </footer>
  )
}

export default Footer
