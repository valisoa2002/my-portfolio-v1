import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Certifications({ certifications }) {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow={certifications.eyebrow} title={certifications.title} description={certifications.description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <article className="rounded-3xl border border-base-content/10 bg-base-200/45 p-6">
              <Icon name="award" className="text-primary" />
              <h3 className="mt-4 font-semibold text-base-content">{item.name}</h3>
              <p className="mt-1 text-sm text-base-content/55">{item.issuer} · {item.date}</p>
              {item.url && <a href={item.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm mt-4">{certifications.credentialLabel}<Icon name="external-link" size={14} /></a>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
