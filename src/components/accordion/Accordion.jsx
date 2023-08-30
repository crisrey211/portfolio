import React from "react"
import styles from "./Accordion.module.css"
import ChevronUpIcon from "../icons/ChevronUpIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import ButtonToogle from "../buttons/ButtonToogle"

const Accordion = ({ occupation, isOpen = false, date, company, description }) => {
  const [isOpened, setIsOpened] = React.useState(isOpen)
  console.log("object", isOpened)

  return (
    <div className={styles.container}>
      <div className={styles.accordionItemTitle}>
        <div>
          {occupation} @ {company}
        </div>
        <div>{date}</div>
        <button
          onClick={() => {
            setIsOpened(!isOpened)
          }}
        >
          Pulsame
        </button>
      </div>
      {isOpened ? <div className={styles.accordionItemContent}>{description}</div> : ""}
    </div>
  )
}

export default Accordion
