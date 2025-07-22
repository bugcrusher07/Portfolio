"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./ProjectsPage.module.css"
import StarField from "../components/StarField/StarField"

const projects = [

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
  {
    id: 4,
    title: "Java Platformer Game",
    description: "Classic 2D platformer built from scratch in Java, featuring character movement, obstacles, and robust movement physics.",
    image: "/java.png?height=300&width=400",
    tech: ["Java"],
  },
  {
    id: 5,
    title: "3D Godot Game",
    description: "Lightweight 3D action game made with Godot Engine — players eliminate enemies by stepping on them in a dynamic environment.",
    image: "/godot.png?height=300&width=400",
    tech: ["Godot Engine", "GDScript"],
  },
  {
    id: 6,
    title: "Fushii Media Agency Site",
    description: "Single-page web application for an advertisement agency, built with Next.js and PostgreSQL for backend data management.",
    image: "/media.png?height=300&width=400",
    tech: ["Next.js", "React", "PostgreSQL"],
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    description: "My professional portfolio showcasing projects and experience, developed using Next.js, React, and TypeScript.",
    image: "/portfolio_ss.png?height=300&width=400",
    tech: ["Next.js", "React", "TypeScript"],
  },
]

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <StarField />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>All Projects</h1>
          <p className={styles.subtitle}>Explore my complete portfolio of work</p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

        <Link href="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
