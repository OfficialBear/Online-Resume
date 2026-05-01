import { Reveal } from './Reveal.jsx'
import { cn } from '../utils/cn.js'

export function SectionHeader({ eyebrow, title, desc, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <Reveal className={cn(isCenter && 'text-center')}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-white/50 px-3 py-1 text-xs font-medium text-[color:var(--muted)] shadow-[var(--shadow-subtle)] dark:bg-white/5">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-1 to-brand-2" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={cn('mt-4 text-3xl font-semibold tracking-tight text-ink-1 dark:text-slate-1 md:text-4xl', isCenter && 'mx-auto max-w-2xl')}>
        {title}
      </h2>
      {desc ? (
        <p className={cn('mt-3 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-[17px]', isCenter ? 'mx-auto' : '')}>
          {desc}
        </p>
      ) : null}
    </Reveal>
  )
}

