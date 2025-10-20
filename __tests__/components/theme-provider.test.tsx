"use client"
import { render, screen, waitFor } from "@testing-library/react"
import { ThemeProvider, useTheme } from "@/components/theme-provider"

// Test component that uses the theme hook
function TestComponent() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <div data-testid="theme-display">{theme}</div>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove("dark")
  })

  it("provides theme context to children", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )

    expect(screen.getByTestId("theme-display")).toBeInTheDocument()
  })

  it("initializes with dark theme by default", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )

    await waitFor(() => {
      expect(screen.getByTestId("theme-display")).toHaveTextContent("dark")
    })
  })

  it("persists theme to localStorage", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )

    await waitFor(() => {
      expect(localStorage.getItem("theme")).toBe("dark")
    })
  })

  it("applies dark class to html element in dark mode", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true)
    })
  })
})
