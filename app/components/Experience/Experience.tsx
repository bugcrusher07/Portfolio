"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./Experience.module.css"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.experienceCard}
        >
          <div className={styles.timeline}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
          </div>
          <div className={styles.content}>
            <div className={styles.period}>2024 - 2025</div>
            <h3 className={styles.position}>Full Stack Developer ( Intern )</h3>
            <h4 className={styles.company}>NEW EIC</h4>
            <p className={styles.description}>
              Developed and maintained web applications using React, Node.js, and modern technologies. Collaborated with
              cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and
              optimized application performance.
            </p>
            <div className={styles.technologies}>
              <span className={styles.tech}>React</span>
              <span className={styles.tech}>Node.js</span>
              <span className={styles.tech}>TypeScript</span>
              <span className={styles.tech}>MongoDB</span>
              <span className={styles.tech}>AWS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
