"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import styles from "./Projects.module.css"

const featuredProjects = [
  {
    id: 1,
    title: "AI Tools Suite ( AI hub )",
    description: "Full-stack application featuring a variety of tools powered by Gemini API with modern UI",
    image: "/AI_Tools.png?height=300&width=400",
    tech: ["Next.js", "Gemini", "React","Typescript","Express","MongoDB","AWS Elastic Beanstalk"],
  },
  {
    id: 2,
    title: "ATS Resume Analyzer",
    description: "An AI-driven resume analyzer for ATS scoring, built with React and FastAPI using scikit-learn models.",
    image: "/resume.png?height=300&width=400",
    tech: ["React", "FastAPI", "Python","scikit-learn"],
  },
  {
    id: 3,
    title: "Monster Hunter 3D",
description: "A Unity-powered 3D WebGL game where players hunt monsters — built with Unity3D and deployed via Firebase Hosting for seamless web play.",

    image: "/monster.png?height=300&width=400",
    tech: ["Unity3D","Firebase"],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>Some of my recent work</p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.overlay}>
                  <Link href={`/projects/${project.id}`} className={styles.viewButton}>
                    View Details
                  </Link>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.viewAllContainer}
        >
          <Link href="/projects" className={styles.viewAllButton}>
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
