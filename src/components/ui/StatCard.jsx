import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import Icon from './Icon'

function parseValue(value) {
  const match = String(value ?? '').match(/-?\d+(?:\.\d+)?/)
  if (!match) return null
  const number = Number(match[0])
  const suffix = String(value).replace(match[0], '')
  return { number, suffix }
}

export default function StatCard({ item }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const parsed = useMemo(() => parseValue(item.value), [item.value])
  const [display, setDisplay] = useState(reduceMotion || !parsed ? parsed?.number ?? item.value : 0)

  useEffect(() => {
    if (!parsed || !inView || reduceMotion) return undefined
    let frame
    const duration = 1100
    const start = performance.now()
    const tick = (time) => {
      const progress = Math.min(1, (time - start) / duration)
      const eased = 1 - (1 - progress) ** 3
      const value = parsed.number % 1 === 0 ? Math.round(parsed.number * eased) : (parsed.number * eased).toFixed(1)
      setDisplay(value)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, parsed, reduceMotion])

  return (
    <article ref={ref} className="group rounded-3xl border border-base-content/10 bg-base-200/55 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-semibold tracking-tight text-base-content sm:text-4xl">
            {item.textValue || (parsed ? `${display}${parsed.suffix}` : item.value)}
          </div>
          <p className="mt-2 text-sm text-base-content/60">{item.label}</p>
          {item.suffix && <p className="mt-1 text-xs font-medium text-primary/80">{item.suffix}</p>}
        </div>
        <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Icon name={item.icon} size={21} />
        </span>
      </div>
    </article>
  )
}
