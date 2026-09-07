import { useEffect, useMemo, useState } from 'react'

export function useTheme(themeConfig) {
  const options = useMemo(() => themeConfig?.options || [], [themeConfig])
  const storageKey = themeConfig?.storageKey || 'portfolio-theme'
  const defaultTheme = themeConfig?.defaultTheme || options[0]?.id || 'business'

  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null
    return options.some((option) => option.id === stored) ? stored : defaultTheme
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(storageKey, theme)
  }, [storageKey, theme])

  return { theme, setTheme, options }
}
