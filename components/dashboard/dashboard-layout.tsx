"use client"

import type { ReactNode } from "react"
import { useState } from "react"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Pass state to children via context or props */}
      {typeof children === "function" ? children({ activeSection, setActiveSection }) : children}
    </div>
  )
}
