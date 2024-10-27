import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./css/global.css"
import { RootProvider } from "fumadocs-ui/provider"

const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
