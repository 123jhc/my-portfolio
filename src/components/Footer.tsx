import { portfolioData } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto max-w-4xl px-6 text-center text-sm text-[var(--color-muted)]">
        <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
