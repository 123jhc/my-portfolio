"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { SectionWrapper } from "./SectionWrapper"

export function Skills() {
  const { skills } = portfolioData

  return (
    <SectionWrapper id="skills" title="技能" subtitle="技术栈与工具">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
