"use client"

import { portfolioData } from "@/data/portfolio"

export function About() {
  const { bio } = portfolioData.personalInfo

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          关于我
        </h2>
        <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
