"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./ProjectsPage.module.css"
import StarField from "../components/StarField/StarField"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI integration",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "OpenAI", "Socket.io"],
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for data analytics",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "D3.js", "Python"],
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Solidity", "Web3.js", "React"],
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Tool for analyzing social media engagement",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: 7,
    title: "AR Shopping Experience",
    description: "Augmented reality shopping application",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Unity", "ARCore", "C#"],
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
