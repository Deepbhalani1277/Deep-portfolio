"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useRef } from "react"

const educationData = [
  {
    degree: "B.Tech Computer Science",
    institution: "CHARUSAT",
    location: "Gujarat, India",
    duration: "2025 - 2028",
    description:
      "Currently pursuing Bachelor of Technology in Computer Science. Focusing on software development, algorithms, and data structures.",
    highlights: ["Data Structures", "Algorithms", "Software Engineering", "Cloud Computing"],
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Gujarat Technological University (GTU)",
    location: "Gujarat, India",
    duration: "2022 - 2025",
    description:
      "Completed diploma with focus on programming fundamentals, web technologies, and database management.",
    highlights: ["Web Development", "Database Management", "Programming", "Networking"],
  },
]

export function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])

  return (
    <section id="education" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Education
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Academic Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-primary/30"
              style={{ height: lineHeight }}
            />
          </div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.3 + 0.2 }}
                className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-auto md:right-0 md:translate-x-1/2"
                style={{
                  [index % 2 === 0 ? "right" : "left"]: "-16px",
                  [index % 2 === 0 ? "left" : "right"]: "auto",
                }}
              >
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all group-hover:border-primary/30">
                  <div className={`mb-4 flex flex-wrap items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Calendar className="h-3 w-3" />
                      {edu.duration}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  
                  <div className={`mb-3 flex items-center gap-2 text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <MapPin className="h-4 w-4" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="mb-4 text-muted-foreground">{edu.description}</p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
