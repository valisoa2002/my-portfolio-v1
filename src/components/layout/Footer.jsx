import Icon from '../ui/Icon'

export default function Footer({ footer, socials, brand, ui }) {
  return (
    <footer className="border-t border-base-content/10 bg-base-200/35 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-primary/10 font-bold text-primary">{brand.logo}</span>
            <div>
              <p className="font-semibold text-base-content">{brand.name}</p>
              <p className="text-xs text-base-content/45">{footer.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-base-content/50">{footer.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          {footer.links.map((link) => <a key={link.target} href={link.target} className="link link-hover text-sm text-base-content/60">{link.label}</a>)}
          {socials.filter((social) => social.url).map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm btn-circle" aria-label={social.name}>
              <Icon name={social.icon} size={18} />
            </a>
          ))}
          {socials.some((social) => !social.url) && <span className="sr-only">{ui.emptyLinkTooltip}</span>}
        </div>
      </div>
    </footer>
  )
}
