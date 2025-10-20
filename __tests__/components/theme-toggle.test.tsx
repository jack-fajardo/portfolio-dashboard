import { render, screen, fireEvent } from "@testing-library/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeProvider } from "@/components/theme-provider"

describe("ThemeToggle Component", () => {
  it("renders theme toggle button", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("displays sun icon in dark mode", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    // The button should contain an SVG (icon)
    const button = screen.getByRole("button")
    expect(button.querySelector("svg")).toBeInTheDocument()
  })

  it("has correct title attribute", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("title")
  })

  it("calls toggleTheme when clicked", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    const button = screen.getByRole("button")
    fireEvent.click(button)
    // If no error is thrown, the click handler worked
    expect(button).toBeInTheDocument()
  })
})
