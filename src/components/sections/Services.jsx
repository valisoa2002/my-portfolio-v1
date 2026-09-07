import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Services({ services }) {
  return (
    <Section id="services">
      <SectionHeader eyebrow={services.eyebrow} title={services.title} description={services.description} align="center" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.05}>
            <article className="group h-full rounded-3xl border border-base-content/10 bg-base-200/45 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:rotate-3 group-hover:scale-110"><Icon name={service.icon} size={23} /></span>
              <h3 className="mt-5 text-lg font-semibold text-base-content">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-base-content/60">{service.description}</p>
              <ul className="mt-5 space-y-2">{service.features.map((feature) => <li key={feature} className="flex gap-2 text-xs leading-5 text-base-content/55"><Icon name="check" size={14} className="mt-0.5 shrink-0 text-success" />{feature}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
