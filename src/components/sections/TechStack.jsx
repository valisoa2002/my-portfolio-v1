import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function TechStack({ techStack }) {
  return (
    <Section id="tech-stack">
      <SectionHeader eyebrow={techStack.eyebrow} title={techStack.title} description={techStack.description} align="center" />
      <Reveal delay={0.08} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {techStack.items.map((tech) => (
          <a key={tech.name} href={tech.url || undefined} target={tech.url ? '_blank' : undefined} rel={tech.url ? 'noreferrer' : undefined} className="group flex min-h-28 flex-col items-center justify-center rounded-3xl border border-base-content/10 bg-base-200/45 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/5 hover:shadow-xl">
            <span className="grid size-11 place-items-center rounded-2xl bg-base-100 text-primary shadow-sm transition group-hover:scale-110"><Icon name={tech.icon} size={22} /></span>
            <span className="mt-3 text-sm font-semibold text-base-content">{tech.name}</span>
            <span className="mt-1 text-[11px] text-base-content/45">{tech.category}</span>
          </a>
        ))}
      </Reveal>
    </Section>
  )
}
