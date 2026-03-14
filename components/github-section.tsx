"use client"

import { motion, useInView } from "framer-motion"
import { Github, Star, GitFork, ExternalLink, Code } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  PHP: "bg-indigo-400",
  Java: "bg-red-500",
  "C++": "bg-pink-500",
  Go: "bg-cyan-400",
  Rust: "bg-orange-600",
}

export function GithubSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Deepbhalani1277/repos?sort=updated&per_page=6"
        )
        if (!response.ok) throw new Error("Failed to fetch repositories")
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError("Could not load repositories")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <section id="github" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Open Source
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            GitHub Repositories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Check out my latest projects and contributions on GitHub
          </p>
        </motion.div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-xl border border-border bg-card/30"
              />
            ))}
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="mx-auto mb-8 max-w-md rounded-xl border border-border bg-card/30 p-8">
              <Github className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="mb-4 text-muted-foreground">{error}</p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href="https://github.com/Deepbhalani1277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GitHub Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative block"
                >
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all group-hover:border-primary/30">
                    <div className="mb-4 flex items-center justify-between">
                      <Code className="h-6 w-6 text-primary/70 transition-colors group-hover:text-primary" />
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                    </div>

                    <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                      {repo.name}
                    </h3>

                    <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex items-center justify-between">
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-3 w-3 rounded-full ${
                              languageColors[repo.language] || "bg-gray-400"
                            }`}
                          />
                          <span className="text-xs text-muted-foreground">
                            {repo.language}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href="https://github.com/Deepbhalani1277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View All Repositories
                </a>
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
