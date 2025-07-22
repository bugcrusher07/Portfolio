"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./ProjectDetail.module.css"
import StarField from "../../components/StarField/StarField"

const projectData = {
  1: {
    title: "AI Tools Suite",
    description: "A modern web app offering a suite of AI-powered tools like fitness plans, code suggestions, AI therapist, and more.",
    longDescription:
      "AI Tools Suite is a multi-functional web application designed to provide users with a variety of AI-powered utilities, from personalized fitness plan generation to coding advice, AI-based therapy sessions and email or letter generation. Built with React on the frontend, the backend leverages Express, Typescript and integrates Google's Gemini API for intelligent outputs. Hosted on AWS Elastic Beanstalk, this app showcases both robust backend design and a visually stunning user interface.",
    technologies: ["React", "TypeScript", "Express.js", "Gemini API", "AWS Elastic Beanstalk"],
    images: ["/hub1.png","/hub2.png","/hub3.png"],
    codeLink: "https://github.com/bugcrusher07/ai-grub-hub-ts",
    liveLink: "https://ai-grub-hub-ts.vercel.app/",
    features: [
      "AI-Powered Fitness Plan Generator",
      "Code Advice Assistant",
      "AI Therapist Chat",
      "Email & Letter Generator",
      "Gemini API Integration",
      "Hosted on AWS Elastic Beanstalk",
      "Responsive & Polished UI",
    ],
  },

  2: {
    title: "ATS Resume Analyzer",
    description: "Web tool that analyzes your resume and generates an ATS score based on key hiring metrics.",
    longDescription:
      "ATS Resume Analyzer is a specialized tool designed to evaluate resumes for compatibility with Applicant Tracking Systems (ATS). Built with Python using FastAPI, SlowAPI, and scikit-learn for backend logic and analysis, and a simple React frontend for user interaction. This tool helps job seekers optimize their resumes for better visibility in hiring pipelines.",
    technologies: ["Render","Vercel","React", "Python", "FastAPI", "SlowAPI", "scikit-learn"],
    images: ["/res2.png","/resu1.png","/resu3.png"],
    codeLink: "https://github.com/bugcrusher07/resume_analyzer_backend",
    liveLink: "https://resume-analyzer-frontend-lime.vercel.app/",
    features: [
      "ATS Score Generation",
      "Keyword & Formatting Analysis",
      "Scikit-learn Powered Evaluation",
      "FastAPI & SlowAPI Backend",
      "Simple React Frontend",
      "User-Friendly Interface",
    ],
  },

  3: {
    title: "Monster Hunter 3D",
    description: "A Unity 3D action game with real-time combat mechanics, exported to WebGL and hosted on Firebase.",
    longDescription:
      "Monster Hunter 3D is a fast-paced action game built in Unity 3D, featuring simple yet engaging gameplay mechanics where players hunt monsters in a dynamic environment. Exported via WebGL for browser playability and deployed on Firebase Hosting, this project showcases game development, physics, and deployment workflows.",
    technologies: ["Unity 3D", "C#", "WebGL", "Firebase Hosting"],
    images: ["/game1.png","/game2.png","/game3.png"],
    codeLink: "https://github.com/bugcrusher07/FPS_Unity_WebGL",
    liveLink: "https://fpswebglunity.web.app/",
    features: [
      "3D Game Physics & Mechanics",
      "WebGL Export for Browser Play",
      "Firebase Hosting Deployment",
      "Unity Engine Powered",
      "Basic Combat System",
    ],
  },

  4: {
    title: "Java Platformer Game",
    description: "A classic 2D platformer game built entirely from scratch in Java, inspired by old-school side scrollers.",
    longDescription:
      "This Java Platformer Game is a fully custom-built 2D side-scrolling game coded purely in Java. It features character movement, jumping mechanics, obstacles, and simple enemy interactions—an homage to retro platformers like Mario. Designed to demonstrate core Java programming, game loops, and collision detection.",
    technologies: ["Java"],
    images: ["/java1.png"],
    codeLink: "https://github.com/bugcrusher07/PiCorama",
    features: [
      "Classic 2D Platformer Gameplay",
      "Built Entirely in Java",
      "Game Loops & Collision Detection",
      "Simple Graphics & Controls",
      "Inspired by Retro Platformers",
    ],
  },

  5: {
    title: "Simple 3D Godot Game",
    description: "Lightweight 3D game created in Godot Engine where players eliminate enemies by stepping on them.",
    longDescription:
      "Built with the Godot Engine, this simple 3D game focuses on straightforward mechanics—players eliminate enemies by jumping on them. Designed as a learning project in 3D game development, it highlights basic physics, collision, and animation features within the Godot framework.",
    technologies: ["Godot Engine", "GDScript"],
    images: ["/godot1.png","/godot2.png"],
    codeLink: "https://github.com/bugcrusher07/Godot_game",
    liveLink: "",
    features: [
      "Basic 3D Gameplay Mechanics",
      "Enemy Collision & Physics",
      "Godot Engine Framework",
      "Simple Visuals & Effects",
      "Lightweight & Browser Ready",
    ],
  },

  6: {
    title: "Fushii Media Agency Website",
    description: "Single-page business website for a advertisement agency built with Next.js and PostgreSQL backend.",
    longDescription:
      "Fushii Media Agency Website is a sleek, single-page application developed for an advertisment agency. Built using Next.js for the frontend with a PostgreSQL-powered backend, it showcases services, portfolio, and contact information in a clean, user-friendly interface. Designed for simplicity and effective brand presentation.",
    technologies: ["Next.js", "React","Vercel", "PostgreSQL"],
    images: ["/fushi1.png","/fushi2.png"],
    codeLink: "https://github.com/bugcrusher07/FushiiMedia",
    liveLink: "https://fushii-media-sable.vercel.app/",
    features: [
      "Single-Page Application",
      "Built with Next.js",
      "Backend with PostgreSQL",
      "Modern, Minimalist Design",
      "Responsive Layout",
    ],
  },

  7: {
    title: "Personal Portfolio Website",
    description: "My professional portfolio built with Next.js and TypeScript, showcasing projects and skills.",
    longDescription:
      "This is my personal portfolio website designed to present my skills, projects, and professional experience. Built with Next.js, React, and TypeScript, it features dynamic project displays, animations, and a modern responsive design. The site serves as a central hub for my professional presence.",
    technologies: ["Vercel","Next.js", "React", "TypeScript"],
    images: [],
    codeLink: "https://github.com/yourusername/portfolio-website",
    liveLink: "https://your-portfolio.vercel.app",
    features: [
      "Dynamic Project Showcase",
      "Next.js & TypeScript Stack",
      "Responsive & Interactive Design",
      "Framer Motion Animations",
      "Professional Portfolio Layout",
    ],
  },
}


export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[Number(projectId) as keyof typeof projectData]||null;

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
          { project?.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveButton}>
            Live Demo
          </a>}
        </motion.div>

        <Link href="/projects" className={styles.backButton}>
          ← Back to All Projects
        </Link>
      </div>
    </div>
  )
}
