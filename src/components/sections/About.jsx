import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function About({ about }) {
  return (
    <Section id="about" className="border-y border-base-content/5 bg-base-200/25">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <SectionHeader eyebrow={about.eyebrow} title={about.title} />
        <Reveal delay={0.08}>
          <p className="text-lg leading-8 text-base-content/70">{about.description}</p>
          <p className="mt-5 leading-8 text-base-content/55">{about.secondaryDescription}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {about.highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-base-content/10 bg-base-100/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon name={item.icon} /></span>
                <h3 className="mt-4 font-semibold text-base-content">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/55">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
