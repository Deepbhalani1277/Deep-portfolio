"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 75 },
    ],
    color: "from-primary to-primary/70",
  },
  {
    title: "Cloud & Data",
    skills: [
      { name: "Google Cloud Platform", level: 65 },
      { name: "Google BigQuery", level: 60 },
      { name: "Data Engineering", level: 50 },
    ],
    color: "from-emerald-400 to-emerald-600",
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="relative py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Skills
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            My Expertise
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 blur-lg transition-all group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all group-hover:border-primary/30">
                <div className={`mb-6 inline-block rounded-lg bg-gradient-to-r ${category.color} p-3`}>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["React", "Next.js", "Node.js", "Git", "VS Code", "Linux", "APIs", "REST"].map(
            (tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="cursor-default rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
