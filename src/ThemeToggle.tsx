import { useEffect, useState } from 'react'

const STORAGE_KEY = 'panaf-theme'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // The toggle still works for the current page if storage is unavailable.
    }
  }, [isDark])

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setIsDark((current) => !current)}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      <span className="theme-toggle-label">{isDark ? 'LIGHT MODE' : 'DARK MODE'}</span>
    </button>
  )
}
