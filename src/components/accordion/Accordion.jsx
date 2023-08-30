import React from "react"
import styles from "./Accordion.module.css"
import LocationIcon from "@/components/icons/LocationIcon.jsx"
import HouseDoorIcon from "@/components/icons/HouseDoorIcon.jsx"

const Accordion = ({
  occupation,
  isOpen = false,
  date,
  company,
  description,
  location,
  web,
  stack,
  logo,
}) => {
  const [isOpened, setIsOpened] = React.useState(isOpen)
  console.log("object", isOpened)

  return (
    <div className={styles.container}>
      <div className={styles.accordionItemTitle}>
        <div className={styles.leftInformation}>
          {occupation} @ {company}
        </div>
        <div className={styles.rigthInformation}>
          <div>{date}</div>
          <button
            onClick={() => {
              setIsOpened(!isOpened)
            }}
          >
            Pulsame
          </button>
        </div>
      </div>
      {isOpened ? (
        <div className={styles.accordionItemContent}>
          <div className={styles.upperContent}>
            <div className={styles.location}>
              <LocationIcon className={styles.logo} />
              {location}
            </div>
            <div className={styles.website}>
              <HouseDoorIcon className={styles.logo} />
              {web}
            </div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.lowerContent}>holas</div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Accordion
