import { t } from "i18next"
import React from "react"
import styles from "./Footer.module.css"
import EnvelopeIcon from "./icons/EnvelopeIcon"
import GithubIcon from "./icons/GithubIcon"
import LinkedInIcon from "./icons/LinkedInIcon"

const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.footerUpper}>
        <div className={styles.contact}>
          <span className={styles.name}>Christian Reynaltt</span>
          <h5 className={styles.content}>{t("footerDescription")}</h5>
        </div>
        <div className={styles.social}>
          <div className={styles.title}>
            <span className={styles.name}>{t("social", "Social")}</span>
          </div>
          <div className={styles.logos}>
            <LinkedInIcon
              className={styles.logo}
              href={"https://www.linkedin.com/in/christianreynaltt"}
            />
            <GithubIcon className={styles.logo} href={"https://github.com/crisrey211"} />
            <EnvelopeIcon
              className={styles.logo}
              href={"mailto:christian_reynaltt@hotmail.com"}
            />
          </div>
        </div>
      </div>
      <div className={styles.footerLowest}>
        <span className={styles.credits}>
          © Copyright 2023. Made by Christian Reynaltt
        </span>
      </div>
    </footer>
  )
}

export default Footer
