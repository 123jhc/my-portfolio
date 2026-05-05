"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

function GitHubIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper } from "./SectionWrapper"

export function Projects() {
  const { projects } = portfolioData

  return (
    <SectionWrapper id="projects" title="项目" subtitle="部分项目作品">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-shadow hover:shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-[var(--color-muted)]">
                {project.role}
              </span>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                    aria-label={`${project.title} GitHub`}
                  >
                    <GitHubIcon size={16} />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                    aria-label={`${project.title} 链接`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="font-semibold text-[var(--color-foreground)]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[var(--color-primary-light)] px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
