import { render } from "@testing-library/react"
import Home from "@/app/page"
import { ThemeProvider } from "@/components/theme-provider"
import jest from "jest"

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

jest.mock("@vercel/analytics/next", () => ({
  Analytics: () => null,
}))

describe("Responsive Layout Tests", () => {
  it("renders dashboard with full height layout", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const mainLayout = container.querySelector('[class*="flex"]')
    expect(mainLayout).toBeInTheDocument()
  })

  it("has proper flex layout structure", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    // Check for flex container
    const flexContainers = container.querySelectorAll('[class*="flex"]')
    expect(flexContainers.length).toBeGreaterThan(0)
  })

  it("renders header with proper styling", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const header = container.querySelector("header")
    expect(header).toHaveClass("border-b")
  })

  it("maintains layout consistency", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )

    const header = container.querySelector("header")
    const mainContent = container.querySelector("main")

    expect(header).toBeInTheDocument()
    // Main content area should exist
    expect(container.querySelector('[class*="overflow"]')).toBeInTheDocument()
  })
})
