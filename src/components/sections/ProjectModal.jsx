import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Icon from '../ui/Icon'
import TechBadge from '../ui/TechBadge'

export default function ProjectModal({ project, config, onClose }) {
  const closeRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!project) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    window.setTimeout(() => closeRef.current?.focus(), 0)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-neutral/70 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }} transition={{ duration: 0.28 }} className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-base-content/10 bg-base-100 shadow-2xl">
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-base-content/10 bg-base-100/90 px-5 py-4 backdrop-blur-xl sm:px-7">
              <div><p className="text-xs font-bold tracking-[0.18em] text-primary uppercase">{project.category} · {project.date}</p><h2 id="project-dialog-title" className="mt-1 text-xl font-semibold text-base-content sm:text-2xl">{project.title}</h2></div>
              <button ref={closeRef} type="button" onClick={onClose} className="btn btn-ghost btn-circle" aria-label={config.modal.closeLabel}><Icon name="x" /></button>
            </div>
            <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.15fr_.85fr] lg:p-9">
              <div>
                <p className="text-lg leading-8 text-base-content/70">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <TechBadge key={tech} tech={tech} />)}</div>
                <div className="mt-8 space-y-6">
                  {[
                    [config.modal.contextLabel, project.details?.context],
                    [config.modal.problemLabel, project.details?.problem],
                    [config.modal.solutionLabel, project.details?.solution],
                    [config.modal.architectureLabel, project.details?.architecture],
                  ].filter(([, value]) => value).map(([label, value]) => (
                    <div key={label}><h3 className="text-sm font-bold tracking-[0.14em] text-base-content/45 uppercase">{label}</h3><p className="mt-2 leading-7 text-base-content/65">{value}</p></div>
                  ))}
                </div>
              </div>
              <aside className="space-y-5">
                {[
                  [config.modal.featuresLabel, project.features, 'check'],
                  [config.modal.challengesLabel, project.challenges, 'shield'],
                  [config.modal.resultsLabel, project.results, 'rocket'],
                ].filter(([, list]) => list?.length).map(([label, list, icon]) => (
                  <div key={label} className="rounded-3xl border border-base-content/10 bg-base-200/45 p-5"><h3 className="flex items-center gap-2 font-semibold text-base-content"><Icon name={icon} size={18} className="text-primary" />{label}</h3><ul className="mt-4 space-y-3">{list.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-base-content/60"><Icon name="check" size={14} className="mt-1 shrink-0 text-success" />{item}</li>)}</ul></div>
                ))}
                {(project.github || project.demo || project.documentation) && <div className="flex flex-wrap gap-2">{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-sm"><Icon name="github" size={16} />{config.actions.github}</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><Icon name="external-link" size={16} />{config.actions.demo}</a>}{project.documentation && <a href={project.documentation} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">{config.actions.documentation}</a>}</div>}
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
