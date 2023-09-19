import React from "react"
import Accordion from "@/components/accordion/Accordion.jsx"
import styles from "./Experience.module.css"
import CmzIcon from "./icons/CmzIcon"

const Stack = () => {
  return (
    <div className={styles.mainExperience} id="experience">
      <h5 className={styles.titulo}>Professional Experience</h5>
      <div className={styles.container}>
        <Accordion
          occupation={"Front-end Developer"}
          company={"CMZ Machinery Group SA"}
          date={"2022-present"}
          isOpen={true}
          description={
            "Empecé en CMZ como desarrollador web en el 2022 y mi función principal es programar un software ERP para un uso interno de la empresa"
          }
          location={"Zaldibar, España"}
          web={"www.cmz.com"}
          stack={["React", "HTML5", "CSS3", "JavaScript"]}
          logo={<CmzIcon />}
        />
      </div>
    </div>
  )
}

export default Stack
