"use client"

import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send, MapPin, MessageSquare } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Deepbhalani1277",
    icon: Github,
    color: "hover:text-white hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/deep-bhalani-bb013425a",
    icon: Linkedin,
    color: "hover:text-white hover:bg-blue-600",
  },
  {
    name: "Email",
    href: "mailto:deepbhalani1277@gmail.com",
    icon: Mail,
    color: "hover:text-white hover:bg-red-500",
  },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground">
                I&apos;m always interested in new opportunities and collaborations. 
                Whether you have a project idea, a question, or just want to say hi, 
                my inbox is always open.
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:deepbhalani1277@gmail.com"
                    className="font-medium text-foreground hover:text-primary"
                  >
                    deepbhalani1277@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Gujarat, India</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-medium text-foreground">Within 24 hours</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-sm text-muted-foreground">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-xl border border-border bg-card/30 p-4 text-muted-foreground transition-all ${link.color}`}
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-border bg-card/30 px-4 py-3 text-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-card/30 px-4 py-3 text-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-5 w-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                  />
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
