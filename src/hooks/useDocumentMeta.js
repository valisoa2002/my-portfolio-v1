import { useEffect } from 'react'

function upsertMeta(attributeName, attributeValue, content) {
  if (!content) return
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, attributeValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function useDocumentMeta(meta, personal) {
  useEffect(() => {
    if (!meta) return undefined

    document.title = meta.siteTitle || document.title
    document.documentElement.lang = meta.language || 'fr'
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'keywords', meta.keywords?.join(', '))
    upsertMeta('property', 'og:title', meta.siteTitle)
    upsertMeta('property', 'og:description', meta.description)

    const scriptId = 'portfolio-person-jsonld'
    document.getElementById(scriptId)?.remove()
    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personal?.fullName,
      jobTitle: personal?.role,
      address: personal?.location
        ? { '@type': 'PostalAddress', addressCountry: personal.location }
        : undefined,
      email: personal?.email || undefined,
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [meta, personal])
}
