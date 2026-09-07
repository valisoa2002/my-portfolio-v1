import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Education({ education }) {
  return (
    <Section id="education" className="border-y border-base-content/5 bg-base-200/25">
      <SectionHeader eyebrow={education.eyebrow} title={education.title} description={education.description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {education.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <article className="rounded-3xl border border-base-content/10 bg-base-100/65 p-6">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon name="graduation" /></span>
              <p className="mt-5 text-xs font-mono text-base-content/45">{[item.startDate, item.endDate].filter(Boolean).join(' — ')}</p>
              <h3 className="mt-2 text-xl font-semibold text-base-content">{item.degree}</h3>
              {item.institution && <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>}
              <p className="mt-2 text-sm text-base-content/55">{item.field}</p>
              <p className="mt-4 leading-7 text-base-content/60">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
