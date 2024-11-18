import type { ReactNode } from "react"
import { baseOptions } from "@/app/layout.config"
import "./override.css"
import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        enabled: false,
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  )
}
