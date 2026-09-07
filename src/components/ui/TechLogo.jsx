import { motion, useReducedMotion } from 'framer-motion'
import { getTechLogo } from '../../utils/techLogoMap'

export default function TechLogo({ tech }) {
  const reduceMotion = useReducedMotion()
  const item = typeof tech === 'string' ? { name: tech, logo: tech.toLowerCase() } : tech
  const Logo = getTechLogo(item?.logo)

  if (!Logo) return null

  const content = (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className="group relative grid size-16 place-items-center rounded-2xl border border-base-content/10 bg-base-200/55 shadow-sm backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/30 hover:bg-base-200/85 hover:shadow-lg hover:shadow-primary/10 sm:size-[4.5rem]"
      aria-label={item.name}
    >
      <Logo
        aria-hidden="true"
        className="size-8 transition-transform duration-300 group-hover:scale-110 sm:size-9"
        style={{ color: item.color || 'currentColor' }}
      />
      <span className="pointer-events-none absolute inset-x-2 -bottom-8 z-20 translate-y-1 rounded-lg border border-base-content/10 bg-base-300/95 px-2 py-1 text-center text-[10px] font-semibold whitespace-nowrap text-base-content opacity-0 shadow-lg backdrop-blur transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {item.name}
      </span>
    </motion.div>
  )

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        title={item.name}
        aria-label={`${item.name} — ouvrir le site officiel`}
      >
        {content}
      </a>
    )
  }

  return <div title={item.name}>{content}</div>
}
