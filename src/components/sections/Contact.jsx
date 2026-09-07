import { useState } from 'react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Contact({ contact, socials }) {
  const [notice, setNotice] = useState('')

  const submit = (event) => {
    event.preventDefault()
    if (!contact.email) {
      setNotice(contact.form.noEmailMessage)
      return
    }
    const data = new FormData(event.currentTarget)
    const subject = data.get('subject') || contact.form.defaultSubject
    const body = `${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const infos = [
    contact.email && { icon: 'mail', label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { icon: 'phone', label: contact.phone, href: `tel:${contact.phone}` },
    contact.location && { icon: 'map', label: contact.location },
  ].filter(Boolean)

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeader eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />
          <Reveal delay={0.05} className="mt-8 space-y-3">
            {infos.map((info) => {
              const content = <><span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon name={info.icon} size={18} /></span><span className="text-sm text-base-content/65">{info.label}</span></>
              return info.href ? <a key={info.label} href={info.href} className="flex items-center gap-3 rounded-2xl border border-base-content/10 bg-base-200/45 p-3 transition hover:border-primary/30">{content}</a> : <div key={info.label} className="flex items-center gap-3 rounded-2xl border border-base-content/10 bg-base-200/45 p-3">{content}</div>
            })}
            <p className="pt-3 text-sm leading-6 text-base-content/55">{contact.availability}</p>
            <div className="flex gap-2 pt-2">{socials.filter((social) => social.url).map((social) => <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle" aria-label={social.name}><Icon name={social.icon} /></a>)}</div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-[2rem] border border-base-content/10 bg-base-200/45 p-5 shadow-xl sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-control"><span className="label-text mb-2 text-sm font-medium">{contact.form.nameLabel}</span><input className="input input-bordered w-full bg-base-100" name="name" required placeholder={contact.form.namePlaceholder} /></label>
              <label className="form-control"><span className="label-text mb-2 text-sm font-medium">{contact.form.emailLabel}</span><input className="input input-bordered w-full bg-base-100" name="email" type="email" required placeholder={contact.form.emailPlaceholder} /></label>
            </div>
            <label className="form-control mt-5"><span className="label-text mb-2 text-sm font-medium">{contact.form.subjectLabel}</span><input className="input input-bordered w-full bg-base-100" name="subject" placeholder={contact.form.subjectPlaceholder} /></label>
            <label className="form-control mt-5"><span className="label-text mb-2 text-sm font-medium">{contact.form.messageLabel}</span><textarea className="textarea textarea-bordered min-h-36 w-full bg-base-100" name="message" required placeholder={contact.form.messagePlaceholder} /></label>
            {notice && <div role="alert" className="alert alert-warning mt-5 text-sm"><Icon name="shield" size={17} /><span>{notice}</span></div>}
            <button type="submit" className="btn btn-primary mt-6 rounded-full px-6"><Icon name="send" size={17} />{contact.ctaLabel}</button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
