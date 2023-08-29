import React from "react"
import Accordion from "@/components/accordion/Accordion.jsx"
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={styles.main} id="skills">
      <h5 className={styles.titulo}>Professional Experience</h5>
      <Accordion
        occupation={"Front-end Developer"}
        company={"CMZ"}
        date={"2022-present"}
        isOpen={true}
        description={"Empecé en CMZ como desarrollador web en el 2022"}
      />
    </div>
  )
}

export default Skills
