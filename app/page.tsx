"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { MobileSidebar } from "@/components/dashboard/mobile-sidebar"
import { MainContent } from "@/components/dashboard/main-content"

const MAIN_TABS = ["Projects", "Documentation", "Settings"]

export default function Home() {
  const [activeMainTab, setActiveMainTab] = useState("Projects")
  const [activeSubTab, setActiveSubTab] = useState("projects-overview")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMainTabChange = (tab: string) => {
    setActiveMainTab(tab)
    // Reset to first sub-tab based on the tab
    const firstSubTabMap: Record<string, string> = {
      Projects: "projects-overview",
      Documentation: "docs-getting-started",
      Settings: "settings-general",
    }
    setActiveSubTab(firstSubTabMap[tab])
    // Close mobile menu when switching tabs
    setMobileMenuOpen(false)
  }

  return (
    <DashboardLayout>
      <Header
        activeMainTab={activeMainTab}
        onMainTabChange={handleMainTabChange}
        mainTabs={MAIN_TABS}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={setMobileMenuOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar activeMainTab={activeMainTab} activeSubTab={activeSubTab} onSubTabChange={setActiveSubTab} />
        </div>

        {/* Mobile Sidebar - shown as drawer on mobile */}
        <MobileSidebar
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          activeMainTab={activeMainTab}
          activeSubTab={activeSubTab}
          onSubTabChange={setActiveSubTab}
        />

        <MainContent activeMainTab={activeMainTab} activeSubTab={activeSubTab} />
      </div>
    </DashboardLayout>
  )
}
