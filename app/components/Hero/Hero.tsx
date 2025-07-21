"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import styles from "./Hero.module.css"

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.textContent}
        >
          <h1 className={styles.title}>
            <span className={styles.greeting}>Hello, I'm</span>
            <span className={styles.name}>Your Name</span>
            <span className={styles.role}>Full Stack Developer</span>
          </h1>
          <p className={styles.description}>
            I create amazing digital experiences with cutting-edge technologies. Passionate about building innovative
            solutions that make a difference.
          </p>
          <div className={styles.buttons}>
            <motion.a
              href="#projects"
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.canvasContainer}
        >
          <Canvas>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 5]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
