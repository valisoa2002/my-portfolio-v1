import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import TechBadge from '../ui/TechBadge'

export default function Experience({ experience }) {
  return (
    <Section id="experience">
      <SectionHeader eyebrow={experience.eyebrow} title={experience.title} description={experience.description} />
      <div className="relative mt-12 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[1.15rem] before:w-px before:bg-base-content/10 sm:before:left-[8.75rem]">
        {experience.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06} className="relative grid gap-4 pl-12 sm:grid-cols-[7.2rem_1fr] sm:pl-0">
            <div className="hidden text-sm font-mono text-base-content/45 sm:block">{item.startDate}{item.endDate && ` — ${item.current ? experience.currentLabel : item.endDate}`}</div>
            <span className="absolute top-1.5 left-[0.7rem] z-10 size-4 rounded-full border-4 border-base-100 bg-primary ring-4 ring-primary/15 sm:left-[8.3rem]" />
            <article className="rounded-3xl border border-base-content/10 bg-base-200/45 p-5 sm:p-7 sm:ml-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-primary">{item.company}</p>
                  <h3 className="mt-1 text-xl font-semibold text-base-content">{item.position}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-base-content/45"><Icon name="map" size={14} />{item.location}</div>
              </div>
              <p className="mt-4 leading-7 text-base-content/60">{item.description}</p>
              {item.achievements?.length > 0 && <ul className="mt-5 space-y-2">{item.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-sm leading-6 text-base-content/60"><Icon name="check" size={16} className="mt-1 shrink-0 text-success" />{achievement}</li>)}</ul>}
              <div className="mt-5 flex flex-wrap gap-2">{item.technologies.map((tech) => <TechBadge key={tech} tech={tech} compact />)}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
