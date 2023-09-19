import React from "react"
import styles from "./DropDown.module.css"
import SpainFlagIcon from "../icons/SpainFlagIcon"
import UKFlagIcon from "../icons/UKFlagIcon"

export const DropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  console.log(isOpen)
  return (
    <div className={styles.containerDropdown}>
      <div
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <SpainFlagIcon />
      </div>
      {isOpen ? (
        <div className={styles.content}>
          <UKFlagIcon />
          <SpainFlagIcon />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
