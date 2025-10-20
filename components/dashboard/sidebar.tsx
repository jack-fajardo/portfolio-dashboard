"use client"
import { SidebarContent } from "./sidebar-content"

interface SidebarProps {
  activeMainTab: string
  activeSubTab: string
  onSubTabChange: (subTabId: string) => void
}

export function Sidebar({ activeMainTab, activeSubTab, onSubTabChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-80 h-full border-r border-border bg-card overflow-y-auto">
      <SidebarContent activeMainTab={activeMainTab} activeSubTab={activeSubTab} onSubTabChange={onSubTabChange} />
    </aside>
  )
}
