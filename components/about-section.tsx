"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"
import { useRef } from "react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Adapting to new technologies quickly",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with teams",
  },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            About Me
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl"
                style={{ y }}
              />
              <div className="relative space-y-6 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I am a <span className="font-semibold text-foreground">B.Tech Computer Science</span> student 
                  at <span className="text-primary">CHARUSAT</span> with a Diploma in Information Technology 
                  from GTU. Passionate about software development and problem solving.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey in tech started with curiosity about how things work, which led me to 
                  explore <span className="text-primary">web development</span>, <span className="text-primary">cloud technologies</span>, 
                  and <span className="text-primary">data engineering</span>.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I believe in continuous learning and actively participate in hackathons and technical 
                  competitions to sharpen my skills and collaborate with like-minded individuals.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/50 to-primary/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-full flex-col items-center rounded-xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm transition-colors group-hover:border-primary/50">
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
