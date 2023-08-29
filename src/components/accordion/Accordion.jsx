import React from "react"
import styles from "./Accordion.module.css"
import ChevronUpIcon from "../icons/ChevronUpIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import ButtonToogle from "@/components/accordion/Accordion.jsx"

const Accordion = ({ occupation, isOpen = false, date, company, description }) => {
  const [isOpened, setIsOpened] = React.useState(isOpen)

  return (
    <div className={styles.container}>
      <div className={styles.accordionItemTitle}>
        <div>
          {occupation} @ {company}
        </div>
        <div>{date}</div>
        <ButtonToogle />
        <div>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
        {isOpen ? <div className={styles.accordionItemContent}>{description}</div> : ""}
      </div>
    </div>
  )
}

export default Accordion
