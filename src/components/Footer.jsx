export function Footer() {
  return (
    <footer className="container-max py-10">
      <div className="flex flex-col items-start justify-between gap-3 border-t border-[color:var(--hairline)] pt-8 md:flex-row md:items-center">
        <div className="text-sm font-medium text-[color:var(--muted)]">
          © {new Date().getFullYear()} · gengcanwei · R&D
        </div>
        <div className="text-xs text-[color:var(--muted)]">React · Tailwind CSS · Framer Motion</div>
      </div>
    </footer>
  )
}

