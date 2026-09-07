import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Icon from '../ui/Icon'

export default function Navbar({ brand, navigation, activeSection, theme, setTheme, themeConfig, ui }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${scrolled ? 'border-b border-base-content/10 bg-base-100/80 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label={ui.mainNavigationLabel}>
        <a href="#home" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid size-10 place-items-center rounded-2xl border border-primary/30 bg-primary/10 font-black text-primary glow-soft transition group-hover:rotate-3 group-hover:scale-105">
            {brand.logo}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-tight text-base-content">{brand.name}</span>
            <span className="block text-[10px] tracking-[0.2em] text-base-content/45">{brand.descriptor}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const id = item.target.replace('#', '')
            const active = activeSection === id
            return (
              <a
                key={item.target}
                href={item.target}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${active ? 'text-primary' : 'text-base-content/65 hover:text-base-content'}`}
              >
                {item.label}
                {active && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 rounded-full border border-base-content/10 bg-base-200/65 px-2 py-1.5" title={themeConfig.label}>
            <Icon name="palette" size={17} className="text-primary" />
            <select
              className="select select-ghost select-xs w-24 bg-transparent focus:outline-none sm:w-28"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              aria-label={themeConfig.label}
            >
              {themeConfig.options.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
          </label>
          <button type="button" className="btn btn-ghost btn-circle lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? ui.closeMenu : ui.openMenu} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-base-content/10 bg-base-100/95 px-4 pb-4 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 pt-3">
              {navigation.map((item) => {
                const active = activeSection === item.target.replace('#', '')
                return (
                  <a key={item.target} href={item.target} onClick={() => setMenuOpen(false)} className={`rounded-2xl px-4 py-3 text-sm font-medium ${active ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:bg-base-200'}`}>
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
