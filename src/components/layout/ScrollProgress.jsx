import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollProgress({ progress, label }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      aria-label={label}
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-primary"
      style={{ scaleX: reduceMotion ? 0 : progress }}
    />
  )
}
