'use client'

import useDark from "@/hooks/useDark"

export default function Home() {
  const { toggleDark } = useDark()
  return (
    <main className="main bg-theme text-theme">
      <button className="btn" onClick={toggleDark}>Toggle</button>
    </main>
  )
}
