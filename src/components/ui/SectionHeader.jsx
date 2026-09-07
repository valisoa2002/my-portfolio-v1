import Reveal from './Reveal'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  return (
    <Reveal className={alignClass}>
      {eyebrow && <p className="mb-3 text-xs font-bold tracking-[0.28em] text-primary uppercase">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-base-content sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-base-content/65 sm:text-lg">{description}</p>}
    </Reveal>
  )
}
