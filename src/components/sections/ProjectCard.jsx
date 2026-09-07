import { motion, useReducedMotion } from 'framer-motion'
import Icon from '../ui/Icon'
import TechBadge from '../ui/TechBadge'

export default function ProjectCard({ project, labels, onOpen }) {
  const reduceMotion = useReducedMotion()
  const status = labels.statusLabels?.[project.status] || project.status
  return (
    <motion.article layout={!reduceMotion} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-base-content/10 bg-base-200/45 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-2xl">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-base-content/8 bg-base-300/60">
        {project.image ? <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /> : (
          <div className="absolute inset-0 grid place-items-center overflow-hidden tech-grid">
            <div className="absolute size-48 rounded-full bg-primary/15 blur-3xl" />
            <span className="relative grid size-20 place-items-center rounded-3xl border border-primary/25 bg-base-100/75 text-primary shadow-xl backdrop-blur"><Icon name={project.icon} size={34} /></span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="badge badge-primary badge-sm font-semibold">{project.category}</span>
          {project.featured && <span className="badge badge-neutral badge-sm gap-1"><Icon name="sparkles" size={11} />{labels.featuredLabel}</span>}
        </div>
        <span className="absolute right-4 bottom-4 rounded-full border border-base-content/10 bg-base-100/80 px-2.5 py-1 text-[11px] font-medium text-base-content/65 backdrop-blur">{status}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold tracking-tight text-base-content sm:text-2xl">{project.title}</h3><span className="font-mono text-xs text-base-content/40">{project.date}</span></div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/60">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 5).map((tech) => <TechBadge key={tech} tech={tech} compact />)}</div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <button type="button" onClick={() => onOpen(project)} className="btn btn-primary btn-sm rounded-full">{labels.actions.details}<Icon name="arrow-right" size={15} /></button>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-circle" aria-label={`${labels.actions.github} — ${project.title}`}><Icon name="github" size={17} /></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-circle" aria-label={`${labels.actions.demo} — ${project.title}`}><Icon name="external-link" size={17} /></a>}
        </div>
      </div>
    </motion.article>
  )
}
