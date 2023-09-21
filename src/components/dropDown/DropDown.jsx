import React from "react"
import styles from "./DropDown.module.css"
import SpainFlagIcon from "../icons/SpainFlagIcon"
import UKFlagIcon from "../icons/UKFlagIcon"
import useLocalization from "../../contexts/localization/useLocalization"

export const DropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { className, currentLanguage, changeLanguage, availableLanguages } =
    useLocalization()

  return (
    <div className={styles.containerDropdown}>
      <div
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {currentLanguage == "es" ? <SpainFlagIcon /> : ""}
        {currentLanguage == "en" ? <UKFlagIcon /> : ""}
      </div>
      {isOpen ? (
        <div className={styles.content}>
          <div
            className={styles.flag}
            onClick={() => {
              console.log("ingles")
              changeLanguage("en")
            }}
          >
            <UKFlagIcon />
          </div>
          <div
            className={styles.flag}
            onClick={() => {
              console.log("espalol")
              changeLanguage("es")
            }}
          >
            <SpainFlagIcon />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
