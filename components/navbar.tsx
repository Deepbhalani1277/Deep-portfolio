"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(8, 8, 20, 0)", "rgba(8, 8, 20, 0.9)"]
  )
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 px-6 py-4"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary">Deep</span> Bhalani
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-background/95 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-foreground transition-colors hover:text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
