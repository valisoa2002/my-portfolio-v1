import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Testimonials({ testimonials }) {
  return (
    <Section id="testimonials" className="border-y border-base-content/5 bg-base-200/25">
      <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} description={testimonials.description} align="center" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <blockquote className="h-full rounded-3xl border border-base-content/10 bg-base-100/65 p-6"><Icon name="message" className="text-primary" /><p className="mt-4 leading-7 text-base-content/65">“{item.message}”</p><footer className="mt-5 text-sm"><strong className="text-base-content">{item.name}</strong><span className="block text-base-content/45">{item.role}{item.company ? ` · ${item.company}` : ''}</span></footer></blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
