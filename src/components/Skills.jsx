import React from "react"
import Accordion from "@/components/accordion/Accordion.jsx"
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={styles.main} id="skills">
      <h5 className={styles.titulo}>Professional Experience</h5>
      <Accordion
        occupation={"Front-end Developer"}
        company={"CMZ Machinery Group SA"}
        date={"2022-present"}
        isOpen={true}
        description={"Empecé en CMZ como desarrollador web en el 2022"}
        location={"Zaldibar, España"}
        web={"www.CMZ.com"}
        stack={["React", "HTML5", "CSS3", "JavaScript"]}
        logo={""}
      />
    </div>
  )
}

export default Skills
