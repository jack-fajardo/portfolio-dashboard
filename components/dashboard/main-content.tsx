"use client"

import type React from "react"
import { Card } from "@/components/ui/card"

interface MainContentProps {
  activeMainTab: string
  activeSubTab: string
}

const contentConfig: Record<string, Record<string, { title: string; content: React.ReactNode }>> = {
  Projects: {
    "projects-overview": {
      title: "Projects Overview",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Your Projects</h3>
            <p className="text-muted-foreground">
              View and manage all your projects in one place. Track progress, deployments, and team collaboration.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Featured Projects</h3>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <h4 className="font-semibold mb-2">E-Commerce Platform</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A full-stack e-commerce solution with real-time inventory management, payment processing, and customer
                  analytics. Built with Next.js, TypeScript, and PostgreSQL.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">Production</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded">Active</span>
                </div>
              </div>

              <div className="border-b border-border pb-4">
                <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Real-time analytics and reporting dashboard with customizable widgets, data visualization, and export
                  capabilities. Supports multiple data sources and integrations.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Development</span>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded">In Progress</span>
                </div>
              </div>

              <div className="border-b border-border pb-4">
                <h4 className="font-semibold mb-2">Mobile App Backend</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  RESTful API backend for iOS and Android applications with authentication, push notifications, and
                  real-time data synchronization. Deployed on cloud infrastructure.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">Production</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded">Stable</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Content Management System</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Headless CMS with rich text editing, media management, and multi-language support. Provides APIs for
                  content delivery across multiple platforms and channels.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">Staging</span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded">Testing</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">In Production</p>
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">In Development</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Archived</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Deployment completed</p>
                  <p className="text-xs text-muted-foreground">
                    E-Commerce Platform v2.1.0 deployed to production - 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">New team member added</p>
                  <p className="text-xs text-muted-foreground">
                    Sarah Johnson joined the Analytics Dashboard project - 5 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-border">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Build failed</p>
                  <p className="text-xs text-muted-foreground">
                    Mobile App Backend - Test suite failed on branch feature/auth - 8 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Code review requested</p>
                  <p className="text-xs text-muted-foreground">
                    CMS - Pull request #234 waiting for review - 1 day ago
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Documentation</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn more about managing your projects, deploying applications, and collaborating with your team. Our
              comprehensive documentation covers everything from getting started to advanced configurations.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Project Setup and Configuration Guide</li>
              <li>Deployment Best Practices</li>
              <li>Team Collaboration and Permissions</li>
              <li>Monitoring and Debugging Tools</li>
              <li>Performance Optimization Tips</li>
              <li>Security and Compliance Standards</li>
            </ul>
          </Card>
        </div>
      ),
    },
    "projects-active": {
      title: "Active Projects",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
            <p className="text-muted-foreground mb-4">Projects currently in development or production.</p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Project Alpha - In Development</li>
              <li>Project Beta - In Production</li>
              <li>Project Gamma - Testing</li>
            </ul>
          </Card>
        </div>
      ),
    },
    "projects-archived": {
      title: "Archived Projects",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Archived Projects</h3>
            <p className="text-muted-foreground">Completed or archived projects for reference.</p>
          </Card>
        </div>
      ),
    },
  },
  Documentation: {
    "docs-getting-started": {
      title: "Getting Started",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Getting Started Guide</h3>
            <p className="text-muted-foreground mb-4">Learn the basics and set up your first project.</p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Installation & Setup</li>
              <li>Creating Your First Project</li>
              <li>Basic Configuration</li>
            </ul>
          </Card>
        </div>
      ),
    },
    "docs-api": {
      title: "API Reference",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">API Reference</h3>
            <p className="text-muted-foreground mb-4">Complete API documentation and endpoints.</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-1">GET /api/projects</h4>
                <p>Retrieve all projects</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">POST /api/projects</h4>
                <p>Create a new project</p>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    "docs-guides": {
      title: "Guides & Tutorials",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Guides & Tutorials</h3>
            <p className="text-muted-foreground">Step-by-step guides for common tasks and advanced features.</p>
          </Card>
        </div>
      ),
    },
  },
  Settings: {
    "settings-general": {
      title: "General Settings",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">General Settings</h3>
            <p className="text-muted-foreground mb-4">Configure general preferences for your account.</p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Display Name</li>
              <li>Language & Timezone</li>
              <li>Theme Preferences</li>
            </ul>
          </Card>
        </div>
      ),
    },
    "settings-account": {
      title: "Account Settings",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
            <p className="text-muted-foreground">Manage your account information and preferences.</p>
          </Card>
        </div>
      ),
    },
    "settings-security": {
      title: "Security Settings",
      content: (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
            <p className="text-muted-foreground mb-4">Manage your security and privacy settings.</p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Two-Factor Authentication</li>
              <li>Active Sessions</li>
              <li>API Keys & Tokens</li>
            </ul>
          </Card>
        </div>
      ),
    },
  },
}

export function MainContent({ activeMainTab, activeSubTab }: MainContentProps) {
  const currentContent = contentConfig[activeMainTab]?.[activeSubTab] || {
    title: "Welcome",
    content: <Card className="p-6">Select a section to get started.</Card>,
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-4 md:p-6 space-y-6">
        {/* Section Title */}
        <div>
          <h1 className="text-2xl font-bold">{currentContent.title}</h1>
        </div>

        {/* Content */}
        {currentContent.content}
      </div>
    </main>
  )
}
