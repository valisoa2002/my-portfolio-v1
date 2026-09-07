import { lazy, Suspense, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import ProjectCard from './ProjectCard'

const ProjectModal = lazy(() => import('./ProjectModal'))

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const reduceMotion = useReducedMotion()
  const categories = useMemo(() => [...new Set(projects.items.map((project) => project.category))], [projects.items])
  const filtered = filter === 'all' ? projects.items : projects.items.filter((project) => project.category === filter)

  return (
    <Section id="projects" className="border-y border-base-content/5 bg-base-200/25">
      <SectionHeader eyebrow={projects.eyebrow} title={projects.title} description={projects.description} />
      <Reveal className="mt-8 flex flex-wrap gap-2">
        <button type="button" onClick={() => setFilter('all')} className={`btn btn-sm rounded-full ${filter === 'all' ? 'btn-primary' : 'btn-ghost bg-base-100'}`}>{projects.allFilterLabel}</button>
        {categories.map((category) => <button key={category} type="button" onClick={() => setFilter(category)} className={`btn btn-sm rounded-full ${filter === category ? 'btn-primary' : 'btn-ghost bg-base-100'}`}>{category}</button>)}
      </Reveal>
      <motion.div layout={!reduceMotion} className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div key={project.id} layout={!reduceMotion} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
              <ProjectCard project={project} labels={projects} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <Suspense fallback={null}><ProjectModal project={selected} config={projects} onClose={() => setSelected(null)} /></Suspense>
    </Section>
  )
}
