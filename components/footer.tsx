"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Deepbhalani1277",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/deep-bhalani-bb013425a",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:deepbhalani1277@gmail.com",
    icon: Mail,
  },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold text-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary">Deep</span> Bhalani
          </motion.a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Deep Bhalani
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Scroll to top */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  )
}
