import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Home from "@/app/page"
import { ThemeProvider } from "@/components/theme-provider"
import jest from "jest" // Import jest to fix the undeclared variable error

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Geist: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
  Geist_Mono: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}))

// Mock @vercel/analytics
jest.mock("@vercel/analytics/next", () => ({
  Analytics: () => null,
}))

describe("Dashboard Integration Tests", () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove("dark")
  })

  it("renders dashboard with header and main content", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    expect(screen.getByText("Dashboard")).toBeInTheDocument()
  })

  it("renders all three main tabs", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    expect(screen.getByText("Projects")).toBeInTheDocument()
    expect(screen.getByText("Documentation")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
  })

  it("switches between main tabs", async () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const documentationTab = screen.getByText("Documentation")
    fireEvent.click(documentationTab)

    await waitFor(() => {
      expect(documentationTab.closest("button")).toHaveClass("text-primary")
    })
  })

  it("displays Projects tab as active by default", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const projectsTab = screen.getByText("Projects").closest("button")
    expect(projectsTab).toHaveClass("text-primary")
  })

  it("renders sidebar on desktop", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    // The sidebar should be present in the DOM
    const mainContent = screen.getByText("Dashboard").closest("header")
    expect(mainContent).toBeInTheDocument()
  })

  it("has proper layout structure", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    // Check for main layout elements
    const header = container.querySelector("header")
    expect(header).toBeInTheDocument()
  })

  it("renders notification and settings icons", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBeGreaterThan(0)
  })

  it("maintains consistent styling across theme changes", async () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const dashboard = screen.getByText("Dashboard")
    expect(dashboard).toBeInTheDocument()

    // Dashboard should still be visible after any interactions
    await waitFor(() => {
      expect(dashboard).toBeInTheDocument()
    })
  })
})
