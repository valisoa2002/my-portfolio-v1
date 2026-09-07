import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Icon from '../ui/Icon'

export default function BackToTop({ show, label }) {
  const reduceMotion = useReducedMotion()
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
          className="btn btn-circle btn-primary fixed right-4 bottom-4 z-50 shadow-xl sm:right-6 sm:bottom-6"
          aria-label={label}
          title={label}
        >
          <Icon name="arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
