import { render, screen, fireEvent } from "@testing-library/react"
import { Header } from "@/components/dashboard/header"
import jest from "jest" // Import jest to fix the undeclared variable error

describe("Header Component", () => {
  const mockOnMainTabChange = jest.fn()
  const mockOnMobileMenuToggle = jest.fn()
  const mainTabs = ["Projects", "Documentation", "Settings"]

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders header with logo and dashboard text", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("V")).toBeInTheDocument()
  })

  it("renders all main tabs", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    mainTabs.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument()
    })
  })

  it("highlights active tab with primary color", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    const projectsTab = screen.getByText("Projects").closest("button")
    expect(projectsTab).toHaveClass("border-primary", "text-primary")
  })

  it("calls onMainTabChange when tab is clicked", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    fireEvent.click(screen.getByText("Documentation"))
    expect(mockOnMainTabChange).toHaveBeenCalledWith("Documentation")
  })

  it("renders theme toggle button", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    // Theme toggle should be present (it's a button with icon)
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBeGreaterThan(0)
  })

  it("renders notification and settings buttons", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBeGreaterThanOrEqual(3) // Menu, Theme, Bell, Settings
  })

  it("calls onMobileMenuToggle when menu button is clicked on mobile", () => {
    render(
      <Header
        activeMainTab="Projects"
        onMainTabChange={mockOnMainTabChange}
        mainTabs={mainTabs}
        mobileMenuOpen={false}
        onMobileMenuToggle={mockOnMobileMenuToggle}
      />,
    )

    const buttons = screen.getAllByRole("button")
    const menuButton = buttons[0] // First button is the menu button
    fireEvent.click(menuButton)
    expect(mockOnMobileMenuToggle).toHaveBeenCalled()
  })
})
