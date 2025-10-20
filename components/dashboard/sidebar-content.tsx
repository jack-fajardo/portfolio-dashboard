"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const tabsConfig: Record<string, { label: string; subTabs: Array<{ id: string; label: string; icon: string }> }> = {
  Projects: {
    label: "Projects",
    subTabs: [
      { id: "projects-overview", label: "Overview", icon: "📊" },
      { id: "projects-active", label: "Active Projects", icon: "🚀" },
      { id: "projects-archived", label: "Archived", icon: "📦" },
    ],
  },
  Documentation: {
    label: "Documentation",
    subTabs: [
      { id: "docs-getting-started", label: "Getting Started", icon: "📘" },
      { id: "docs-api", label: "API Reference", icon: "⚙️" },
      { id: "docs-guides", label: "Guides & Tutorials", icon: "📚" },
    ],
  },
  Settings: {
    label: "Settings",
    subTabs: [
      { id: "settings-general", label: "General", icon: "⚙️" },
      { id: "settings-account", label: "Account", icon: "👤" },
      { id: "settings-security", label: "Security", icon: "🔒" },
    ],
  },
}

interface SidebarContentProps {
  activeMainTab: string
  activeSubTab: string
  onSubTabChange: (subTabId: string) => void
}

export function SidebarContent({ activeMainTab, activeSubTab, onSubTabChange }: SidebarContentProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([activeMainTab]))

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const currentTabConfig = tabsConfig[activeMainTab]

  return (
    <div className="p-6 space-y-2">
      <div className="mb-4">
        <button
          onClick={() => toggleSection(activeMainTab)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors bg-primary/20 text-primary border border-primary/30"
        >
          <span>{currentTabConfig.label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expandedSections.has(activeMainTab) ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {expandedSections.has(activeMainTab) && (
        <div className="space-y-1 border-l border-border/50 pl-4 ml-2">
          {currentTabConfig.subTabs.map((subTab) => (
            <button
              key={subTab.id}
              onClick={() => onSubTabChange(subTab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors ${
                activeSubTab === subTab.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              <span className="text-base">{subTab.icon}</span>
              <span>{subTab.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
