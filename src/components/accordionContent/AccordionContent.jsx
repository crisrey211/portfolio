import React from "react"
import styles from "./AccordionContent.module.css"

import LocationIcon from "@/components/icons/LocationIcon.jsx"
import Badge from "../badge/Badge"
import HouseDoorIcon from "@/components/icons/HouseDoorIcon.jsx"

export const AccordionContent = ({ description, location, web, logo, stack }) => {
  const stacky = stack.map((item) => item)

  return (
    <div className={styles.accordionItemContent}>
      <div className={styles.leftside}>
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
        <div className={styles.lowerContent}>
          {stack.map((item, key) => (
            <Badge key={key}>{item}</Badge>
          ))}
        </div>
      </div>
      <div className={styles.rightside}>{logo}</div>
    </div>
  )
}
