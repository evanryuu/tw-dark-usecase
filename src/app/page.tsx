'use client'

import { ConfigProvider } from '@/providers/ConfigProvider'

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        tokens: {
          '--theme-color': '#60bc',
        },
      }}
    >
      <main className="main bg-theme text-theme">
        <div className="text-theme">This is certain text.</div>
        <ConfigProvider
          theme={{
            tokens: {
              '--theme-color': 'teal',
            },
          }}
        >
          <div className="text-theme">inside text</div>
        </ConfigProvider>
      </main>
    </ConfigProvider>
  )
}
