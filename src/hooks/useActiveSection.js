import { useEffect, useState } from 'react'

export function useActiveSection(navigation = []) {
  const [activeSection, setActiveSection] = useState(navigation[0]?.target?.replace('#', '') || 'home')

  useEffect(() => {
    const ids = navigation.map((item) => item.target?.replace('#', '')).filter(Boolean)
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [navigation])

  return activeSection
}
