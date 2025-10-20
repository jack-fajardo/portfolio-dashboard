"use client"

import { Menu, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  activeMainTab: string
  onMainTabChange: (tab: string) => void
  mainTabs: string[]
  mobileMenuOpen: boolean
  onMobileMenuToggle: (open: boolean) => void
}

export function Header({ activeMainTab, onMainTabChange, mainTabs, mobileMenuOpen, onMobileMenuToggle }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => onMobileMenuToggle(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-bold">
              V
            </div>
            <span className="font-semibold hidden sm:inline">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <nav className="flex gap-6 px-4 md:px-6 border-t border-border overflow-x-auto">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onMainTabChange(tab)}
            className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeMainTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  )
}
