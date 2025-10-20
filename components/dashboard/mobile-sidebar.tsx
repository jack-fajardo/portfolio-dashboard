"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarContent } from "./sidebar-content"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  activeMainTab: string
  activeSubTab: string
  onSubTabChange: (tab: string) => void
}

export function MobileSidebar({ isOpen, onClose, activeMainTab, activeSubTab, onSubTabChange }: MobileSidebarProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} aria-hidden="true" />

      {/* Drawer */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border z-50 md:hidden overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-semibold">Navigation</span>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Sidebar content */}
        <SidebarContent
          activeMainTab={activeMainTab}
          activeSubTab={activeSubTab}
          onSubTabChange={(tab) => {
            onSubTabChange(tab)
            onClose() // Close drawer after selecting
          }}
        />
      </div>
    </>
  )
}
