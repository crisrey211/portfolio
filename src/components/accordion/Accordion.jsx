import React from "react"
import styles from "./Accordion.module.css"
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.jsx"
import ChevronUpIcon from "@/components/icons/ChevronUpIcon.jsx"
import { AccordionContent } from "../accordionContent/AccordionContent"

const Accordion = ({
  occupation,
  isOpen = false,
  date,
  company,
  stack,
  description,
  location,
  logo,
  web,
}) => {
  const [isOpened, setIsOpened] = React.useState(isOpen)

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionItemTitle}>
        <div className={styles.leftInformation}>
          {occupation} @ {company}
        </div>
        <div className={styles.rigthInformation}>
          <div>{date}</div>
          <div
            onClick={() => {
              setIsOpened(!isOpened)
            }}
            className={styles.boton}
          >
            {isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
      </div>
      {isOpened ? (
        <div className={styles.accordionItemContent}>
          <AccordionContent
            description={description}
            location={location}
            web={web}
            logo={logo}
            stack={stack}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Accordion
