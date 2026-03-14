"use client"

import { motion, useInView } from "framer-motion"
import { Trophy, Users, Brain, Shield, BarChart3 } from "lucide-react"
import { useRef } from "react"

const hackathons = [
  {
    title: "Hackout'26",
    organization: "DAIICT",
    icon: Users,
    description:
      "Participated in a competitive hackathon where I improved problem solving, teamwork, and rapid prototyping skills. Collaborated with talented developers to build innovative solutions.",
    skills: ["Problem Solving", "Teamwork", "Rapid Prototyping", "Innovation"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Codeversity'26",
    organization: "IIT Gandhinagar",
    icon: Brain,
    description:
      "Participated in a technical competition that improved logical thinking and coding efficiency. Solved complex algorithmic challenges under time pressure.",
    skills: ["Logical Thinking", "Coding Efficiency", "Algorithms", "Time Management"],
    color: "from-primary to-primary/70",
  },
  {
    title: "CTF Event",
    organization: "IIT BHU",
    icon: Shield,
    description:
      "Explored cybersecurity challenges involving cryptography and web security concepts. Gained hands-on experience with security vulnerabilities and defense mechanisms.",
    skills: ["Cryptography", "Web Security", "CTF Challenges", "Security Analysis"],
    color: "from-rose-400 to-rose-600",
  },
  {
    title: "KDSH 2026",
    organization: "IIT Kharagpur",
    icon: BarChart3,
    description:
      "Kharagpur Data Science Hackathon - Worked with real world datasets and practiced data analysis and analytical thinking. Applied machine learning techniques to solve practical problems.",
    skills: ["Data Analysis", "Machine Learning", "Analytical Thinking", "Statistics"],
    color: "from-amber-400 to-amber-600",
  },
]

export function HackathonsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hackathons" ref={ref} className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Hackathons & Competitions
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Competitive Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Participated in various hackathons and technical competitions at premier institutions
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group perspective-1000"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30">
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${hackathon.color}`} />
                
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`rounded-xl bg-gradient-to-br ${hackathon.color} p-2.5`}
                        >
                          <hackathon.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {hackathon.title}
                          </h3>
                          <p className="text-sm text-primary">
                            {hackathon.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Trophy className="h-5 w-5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {hackathon.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {hackathon.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + skillIndex * 0.05 + 0.3,
                        }}
                        className="rounded-full border border-border bg-secondary/30 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary/80"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute -inset-[100%] bg-gradient-to-r ${hackathon.color} opacity-5 blur-3xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
