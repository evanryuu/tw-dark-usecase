import { useEffect, useState } from "react"
import { isBrowser } from "../utils/isBrowser"

function getSystemDark() {
  if (isBrowser) {
    // dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}
export default function useDark() {
  const [dark, setDark] = useState(getSystemDark())
  const toggleDark = () => setDark(!dark)

  useEffect(() => {
    const qm = window.matchMedia('(prefers-color-scheme: dark)')
    const changeDark = () => setDark(qm.matches)

    qm.addEventListener('change', changeDark) // track system preferences
    return () => qm.removeEventListener('change', changeDark)
  }, [])

  useEffect(() => {
    if (dark) {
      window.document.documentElement.classList.add('dark')
    } else {
      window.document.documentElement.classList.remove('dark')
    }
  }, [dark])
  return { dark, toggleDark }
}
