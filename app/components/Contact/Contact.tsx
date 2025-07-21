"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>Ready to bring your ideas to life?</p>
        </motion.div>

        <div className={styles.contactGrid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.contactInfo}
          >
            <h3>Get in touch</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>

            <div className={styles.contactLinks}>
              <a href="mailto:your.email@example.com" className={styles.contactLink}>
                <span className={styles.icon}>✉️</span>
                your.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.icon}>💼</span>
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.icon}>🐙</span>
                GitHub Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.contactForm}
          >
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Your Message" rows={5} className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
