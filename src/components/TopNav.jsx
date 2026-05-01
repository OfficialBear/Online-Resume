import { motion } from 'framer-motion'
import { profile } from '../content/profile.js'

const items = [
  { id: 'about', label: '定位' },
  { id: 'skills', label: '能力' },
  { id: 'projects', label: '项目' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function TopNav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50">
      <motion.div
        className="container-max pointer-events-auto"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="panel flex items-center justify-between px-4 py-2 md:px-5">
          <button
            type="button"
            onClick={() => scrollToId('top')}
            className="focus-ring inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1"
            aria-label="回到顶部"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-brand-1 to-brand-2" />
            <span className="hidden sm:inline">{profile.name}</span>
            <span className="sm:hidden">{profile.name}</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => scrollToId(it.id)}
                className="focus-ring rounded-xl px-3 py-2 text-sm text-[color:var(--muted)] hover:text-ink-1 dark:hover:text-slate-1"
              >
                {it.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToId('projects')}
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-ink-1 px-3 py-2 text-sm font-semibold text-white shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-lift)] dark:bg-white dark:text-black"
          >
            看核心项目
            <span aria-hidden className="text-white/70 dark:text-black">
              →
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

