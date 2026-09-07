import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Skills({ skills }) {
  const [activeId, setActiveId] = useState(skills.categories[0]?.id)
  const reduceMotion = useReducedMotion()
  const active = skills.categories.find((category) => category.id === activeId) || skills.categories[0]

  return (
    <Section id="skills" className="border-y border-base-content/5 bg-base-200/25">
      <SectionHeader eyebrow={skills.eyebrow} title={skills.title} description={skills.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[.38fr_.62fr]">
        <Reveal className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
          {skills.categories.map((category) => (
            <button key={category.id} type="button" onClick={() => setActiveId(category.id)} className={`flex min-w-max items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition lg:w-full ${active?.id === category.id ? 'border-primary/30 bg-primary/10 text-primary' : 'border-base-content/10 bg-base-100/50 text-base-content/60 hover:bg-base-100'}`}>
              <Icon name={category.icon} size={18} />{category.name}
            </button>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <AnimatePresence mode="wait">
            <motion.div key={active?.id} initial={reduceMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, x: -8 }} transition={{ duration: 0.25 }} className="rounded-3xl border border-base-content/10 bg-base-100/70 p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon name={active?.icon} /></span><h3 className="text-xl font-semibold text-base-content">{active?.name}</h3></div>
              <div className="space-y-6">
                {active?.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm"><span className="flex items-center gap-2 font-medium text-base-content"><Icon name={skill.icon} size={16} className="text-primary" />{skill.name}</span><span className="font-mono text-xs text-base-content/45">{skill.level}%</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-base-200"><motion.div initial={reduceMotion ? false : { width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="h-full rounded-full bg-linear-to-r from-primary to-secondary" /></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  )
}
