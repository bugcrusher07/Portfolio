"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./About.module.css"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <p className={styles.description}>
I am a full-stack developer with a strong focus on building scalable web applications and AI-powered tools. With experience in React, Next.js, TypeScript, and backend frameworks like Express.js and FastAPI, I love creating solutions that are both technically robust and user-centric.
              </p>
              <p className={styles.description}>
               From leading university tech projects to developing real-world products during my internships, I thrive on solving complex problems and bringing ideas to life. I’m passionate about clean code, collaborative teamwork, and delivering meaningful impact through technology..
              </p>
              <div className={styles.skills}>
                <h3>Skills & Technologies</h3>
                <div className={styles.skillGrid}>
                  {["React", "Next.js", "TypeScript", "Express.js", "FastAPI", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel","Unity","Firebase"].map(
                    (skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={styles.skillTag}
                      >
                        {skill}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={styles.imageContainer}
            >
              <div className={styles.profileImage}>
                <img src="/profile_pic_innit.jpg?height=400&width=400" alt="Profile" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
