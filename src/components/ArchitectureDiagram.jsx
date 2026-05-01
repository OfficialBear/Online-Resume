import { useEffect, useMemo, useRef, useState } from 'react'

function useResizeObserver(targetRef) {
  const [rect, setRect] = useState(null)
  useEffect(() => {
    const el = targetRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setRect(el.getBoundingClientRect())
    })
    ro.observe(el)
    setRect(el.getBoundingClientRect())
    return () => ro.disconnect()
  }, [targetRef])
  return rect
}

function centerOf(el, rootRect) {
  const r = el.getBoundingClientRect()
  return {
    x: r.left - rootRect.left + r.width / 2,
    y: r.top - rootRect.top + r.height / 2,
  }
}

export function ArchitectureDiagram({ nodes, edges }) {
  const rootRef = useRef(null)
  const rootRect = useResizeObserver(rootRef)
  const nodeRefs = useRef(new Map())

  const idToIndex = useMemo(() => new Map(nodes.map((n, i) => [n.id, i])), [nodes])

  const [lines, setLines] = useState([])

  useEffect(() => {
    if (!rootRect) return
    const rootEl = rootRef.current
    if (!rootEl) return

    const next = []
    for (const [from, to] of edges) {
      const fromEl = nodeRefs.current.get(from)
      const toEl = nodeRefs.current.get(to)
      if (!fromEl || !toEl) continue
      const a = centerOf(fromEl, rootRect)
      const b = centerOf(toEl, rootRect)
      next.push({ from, to, ax: a.x, ay: a.y, bx: b.x, by: b.y })
    }
    setLines(next)
  }, [edges, idToIndex, rootRect])

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white/50 p-4 shadow-[var(--shadow-subtle)] backdrop-blur dark:bg-white/5 md:p-5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65]"
        style={{ backgroundImage: 'var(--tw-gradient-stops), var(--tw-gradient-stops)' }}
      />

      <svg className="pointer-events-none absolute inset-0" width="100%" height="100%">
        <defs>
          <linearGradient id="archStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(37,99,235,.45)" />
            <stop offset="55%" stopColor="rgba(124,58,237,.35)" />
            <stop offset="100%" stopColor="rgba(6,182,212,.25)" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(37,99,235,.35)" />
          </marker>
        </defs>
        {lines.map((l) => (
          <path
            key={`${l.from}->${l.to}`}
            d={`M ${l.ax} ${l.ay} C ${l.ax} ${(l.ay + l.by) / 2} ${l.bx} ${(l.ay + l.by) / 2} ${l.bx} ${l.by}`}
            fill="none"
            stroke="url(#archStroke)"
            strokeWidth="1.4"
            opacity="0.9"
            markerEnd="url(#arrow)"
          />
        ))}
      </svg>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {nodes.map((n) => (
          <div
            key={n.id}
            ref={(el) => {
              if (el) nodeRefs.current.set(n.id, el)
              else nodeRefs.current.delete(n.id)
            }}
            className="rounded-2xl border border-[color:var(--hairline)] bg-white/70 px-3 py-3 shadow-[0_1px_0_rgba(15,23,42,.04)] dark:bg-white/5"
          >
            <div className="text-sm font-semibold tracking-tight text-ink-1 dark:text-slate-1">
              {n.title}
            </div>
            <div className="mt-1 text-xs leading-5 text-[color:var(--muted)]">{n.caption}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

