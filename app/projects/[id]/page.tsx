"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./ProjectDetail.module.css"
import StarField from "../../components/StarField/StarField"

const projectData = {
  1: {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    longDescription:
      "This full-stack e-commerce platform represents a complete online shopping solution designed for scalability and user experience. The project incorporates modern web development practices and includes features such as real-time inventory management, secure payment processing, and responsive design.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT", "Redux"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    codeLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://your-ecommerce-demo.vercel.app",
    features: [
      "User Authentication & Authorization",
      "Product Catalog with Search & Filters",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing",
      "Order Management System",
      "Admin Dashboard",
      "Responsive Design",
    ],
  },
  2: {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI integration for intelligent conversations and automated responses.",
    longDescription:
      "An innovative chat application that combines real-time messaging with artificial intelligence. Users can engage in conversations with AI assistants while also chatting with other users in a seamless interface.",
    technologies: ["Next.js", "OpenAI API", "Socket.io", "TypeScript", "Prisma", "PostgreSQL"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    codeLink: "https://github.com/yourusername/ai-chat-app",
    liveLink: "https://your-chat-demo.vercel.app",
    features: [
      "Real-time Messaging",
      "AI-Powered Responses",
      "User Authentication",
      "Chat Rooms & Private Messages",
      "File Sharing",
      "Message History",
      "Mobile Responsive",
    ],
  },
  // Add more projects as needed...
}

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[projectId as keyof typeof projectData]

  if (!project) {
    return (
      <div className={styles.container}>
        <StarField />
        <div className={styles.content}>
          <h1>Project Not Found</h1>
          <Link href="/projects">← Back to Projects</Link>
        </div>
      </div>
    )
  }

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
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.imageGallery}
        >
          {project.images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image || "/placeholder.svg"} alt={`${project.title} screenshot ${index + 1}`} />
            </div>
          ))}
        </motion.div>

        <div className={styles.projectDetails}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.detailSection}
          >
            <h2>About This Project</h2>
            <p>{project.longDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.detailSection}
          >
            <h2>Technologies Used</h2>
            <div className={styles.techGrid}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.detailSection}
          >
            <h2>Key Features</h2>
            <ul className={styles.featureList}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={styles.actionButtons}
        >
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.codeButton}>
            View Code
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveButton}>
            Live Demo
          </a>
        </motion.div>

        <Link href="/projects" className={styles.backButton}>
          ← Back to All Projects
        </Link>
      </div>
    </div>
  )
}
