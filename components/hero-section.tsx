"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Download, Github, Linkedin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const roles = [
  "Computer Science Student",
  "Web Developer",
  "Problem Solver",
  "Cloud Enthusiast",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const ref = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      style={{ y, opacity }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="block">Hi, I&apos;m</span>
          <span className="mt-2 block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Deep Bhalani
          </span>
        </motion.h1>

        <motion.div
          className="mb-8 h-12 text-xl text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="font-mono">{displayText}</span>
          <motion.span
            className="inline-block w-0.5 bg-primary"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            |
          </motion.span>
        </motion.div>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Passionate about building innovative solutions and exploring the world of
          software development. Currently pursuing B.Tech in Computer Science at CHARUSAT.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="mb-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/deep-bhalani-bb013425a"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:border-primary hover:bg-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-4 w-4 text-primary" />
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/Deepbhalani1277"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:border-primary hover:bg-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4 text-primary" />
            GitHub
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:border-primary hover:bg-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-4 w-4 text-primary" />
            Resume
          </motion.a>
        </motion.div>

        </div>

      
    </motion.section>
  )
}
