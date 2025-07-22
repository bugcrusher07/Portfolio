"use client"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import StarField from "./components/StarField/StarField"
import ScrollAnimations from "./components/ScrollAnimations/ScrollAnimations"
import {NavBar} from './NavBar';

export default function Home() {
  return (
    <main>
      <StarField />
      <ScrollAnimations />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
