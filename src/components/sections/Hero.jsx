import { motion, useReducedMotion } from 'framer-motion'
import Icon from '../ui/Icon'
import TechLogo from '../ui/TechLogo'

export default function Hero({ hero, personal, socials, ui }) {
  const reduceMotion = useReducedMotion()
  const initials = personal.fullName?.trim()?.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'V'

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 tech-grid opacity-70" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="badge badge-primary badge-outline gap-2 py-3 text-xs font-bold tracking-[0.2em]">
              <Icon name="sparkles" size={14} /> {hero.eyebrow}
            </span>
            {personal.availableForWork && <span className="inline-flex items-center gap-2 text-xs font-medium text-base-content/55"><span className="status status-success status-sm animate-pulse" />{hero.availabilityText}</span>}
          </div>
          <p className="text-lg font-medium text-base-content/60 sm:text-xl">{hero.greeting}</p>
          <h1 className="mt-2 text-6xl font-black tracking-[-0.055em] text-base-content sm:text-7xl lg:text-[6.8rem] lg:leading-[0.92]">{hero.title}</h1>
          <p className="mt-5 max-w-3xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl lg:text-4xl">{hero.subtitle}</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-base-content/65 sm:text-lg">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryButton.target} className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/15">
              {hero.primaryButton.label}<Icon name={hero.primaryButton.icon} size={18} />
            </a>
            <a href={hero.secondaryButton.target} className="btn btn-outline rounded-full px-6">
              <Icon name={hero.secondaryButton.icon} size={18} />{hero.secondaryButton.label}
            </a>
            {personal.resumeUrl && <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-ghost rounded-full">{personal.resumeLabel}<Icon name="external-link" size={16} /></a>}
          </div>
          <div className="mt-9">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-base-content/35">{hero.technologiesLabel}</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {hero.technologies.map((tech) => (
                <TechLogo key={typeof tech === 'string' ? tech : tech.name} tech={tech} />
              ))}
            </div>
          </div>
          <div className="mt-7 flex gap-2">
            {socials.filter((social) => social.url).map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle btn-sm" aria-label={social.name}>
                <Icon name={social.icon} size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }} className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-8 -z-10 rounded-[3rem] bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-base-content/10 bg-base-200/55 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-base-content/10 pb-4">
              <span className="text-[10px] font-bold tracking-[0.25em] text-base-content/45">{hero.visual.badge}</span>
              <div className="flex gap-1.5"><span className="size-2 rounded-full bg-error/70" /><span className="size-2 rounded-full bg-warning/70" /><span className="size-2 rounded-full bg-success/70" /></div>
            </div>
            <div className="relative grid min-h-80 place-items-center overflow-hidden rounded-[1.5rem] border border-base-content/8 bg-base-100/65 p-6 sm:min-h-[26rem]">
              <div className="absolute inset-0 tech-grid opacity-40" />
              <motion.div animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10 grid size-44 place-items-center rounded-full border border-primary/30 bg-primary/10 glow-primary">
                {personal.profileImage ? <img src={personal.profileImage} alt={ui.profileAlt} className="size-40 rounded-full object-cover" /> : <span className="text-5xl font-black tracking-tight text-primary">{initials}</span>}
              </motion.div>
              {hero.visual.nodes.map((node, index) => {
                const positions = ['top-6 left-6', 'right-6 top-1/2 -translate-y-1/2', 'bottom-6 left-10']
                return (
                  <motion.div key={node.label} animate={reduceMotion ? undefined : { y: [0, index % 2 ? 5 : -5, 0] }} transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }} className={`absolute ${positions[index % positions.length]} z-10 flex items-center gap-2 rounded-2xl border border-base-content/10 bg-base-200/85 px-3 py-2 text-xs font-bold shadow-lg backdrop-blur`}>
                    <Icon name={node.icon} size={16} className="text-primary" />{node.label}
                  </motion.div>
                )
              })}
            </div>
            <div className="mt-5">
              <p className="text-lg font-semibold text-base-content">{hero.visual.headline}</p>
              <p className="mt-1 text-sm leading-6 text-base-content/55">{hero.visual.subline}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
