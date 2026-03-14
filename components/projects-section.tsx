"use client"

import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations, parallax effects, and interactive UI elements.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Deepbhalani1277",
    live: "#",
    featured: true,
  },
  {
    title: "Web Development Projects",
    description:
      "Collection of web development projects showcasing HTML, CSS, JavaScript, and PHP skills. Includes responsive designs and interactive features.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/Deepbhalani1277",
    featured: true,
  },
  {
    title: "Python Applications",
    description:
      "Various Python projects including automation scripts, data analysis tools, and problem-solving applications.",
    technologies: ["Python", "APIs", "Data Analysis"],
    github: "https://github.com/Deepbhalani1277",
    featured: false,
  },
  {
    title: "Database Projects",
    description:
      "MySQL database projects demonstrating database design, queries, and integration with web applications.",
    technologies: ["MySQL", "PHP", "Database Design"],
    github: "https://github.com/Deepbhalani1277",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" ref={ref} className="relative py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Projects
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Featured Work
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 to-primary/20 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30">
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-border p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Folder className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Featured Project
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground">Other Projects</h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all group-hover:border-primary/30">
                <div className="mb-4 flex items-center justify-between">
                  <Folder className="h-8 w-8 text-primary/50 transition-colors group-hover:text-primary" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
          >
            <a
              href="https://github.com/Deepbhalani1277"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
