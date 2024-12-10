import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../button"

describe("Button", () => {
  describe("Render", () => {
    it("should render the button with provided text", async () => {
      render(<Button>Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it("should render with default disabled state as false", async () => {
      render(<Button>Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      expect(button).not.toBeDisabled()
    })

    it("should render spinner if loading prop is true", async () => {
      render(<Button loading>Click Me</Button>)
      const button = screen.getByRole("button", { name: /loading/i })
      const loadingIcon = screen.getByTestId("icon-loading")
      expect(button).toContainElement(loadingIcon)
    })

    it("should not render spinner if loading prop is false", async () => {
      render(<Button>Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      const loadingIcon = screen.queryByTestId("icon-loading")
      expect(button).not.toContainElement(loadingIcon)
    })

    it("should render correct child components", async () => {
      render(
        <Button>
          <span data-testid="child-inline">Inline Element</span>
          <div data-testid="child-block">Block Element</div>
          Click Me
        </Button>,
      )
      const button = screen.getByRole("button", { name: /click me/i })
      const childInline = screen.queryByTestId("child-inline")
      const childBlock = screen.queryByTestId("child-block")
      expect(button).toContainElement(childInline)
      expect(button).toContainElement(childBlock)
    })

    it("should render an empty button", async () => {
      render(<Button />)
      const button = screen.getByRole("button", { name: "" })
      expect(button).toBeInTheDocument()
    })

    it("should render a button with type 'submit'", () => {
      render(<Button type="submit">Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      expect(button).toHaveAttribute("type", "submit")
    })

    it("should render a button with type 'button'", () => {
      render(<Button type="button">Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      expect(button).toHaveAttribute("type", "button")
    })

    it('should render a button with type "reset"', () => {
      render(<Button type="reset">Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      expect(button).toHaveAttribute("type", "reset")
    })
  })

  describe("Behavior", () => {
    it("should triggers the onClick handler when clicked", async () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      await userEvent.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("should not trigger the onClick handler when disabled", async () => {
      const handleClick = jest.fn()
      render(
        <Button onClick={handleClick} disabled>
          Click Me
        </Button>,
      )
      const button = screen.getByRole("button", { name: /click me/i })
      await userEvent.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })

    it("should applies custom class name", async () => {
      render(<Button className="custom-class">Click Me</Button>)
      const button = screen.getByRole("button", { name: /click me/i })
      expect(button).toHaveClass("custom-class")
    })

    it("should trigger form submission if type is submit", async () => {
      const handleSubmit = jest.fn((e) => e.preventDefault())
      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit Button</Button>
        </form>,
      )

      const button = screen.getByRole("button", { name: /submit button/i })
      await userEvent.click(button)

      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })

    it("should not trigger form submission if type is button", async () => {
      const handleSubmit = jest.fn((e) => e.preventDefault())
      render(
        <form onSubmit={handleSubmit}>
          <Button type="button">Submit Button</Button>
        </form>,
      )

      const button = screen.getByRole("button", { name: /submit button/i })
      await userEvent.click(button)

      expect(handleSubmit).toHaveBeenCalledTimes(0)
    })

    it("should reset form fields if type is reset", async () => {
      render(
        <form>
          <input type="text" defaultValue="Hello" data-testid="input" />
          <Button type="reset">Reset Button</Button>
        </form>,
      )

      const input = screen.getByTestId("input")
      const button = screen.getByRole("button", { name: /reset button/i })

      await userEvent.type(input, " World")
      expect(input).toHaveValue("Hello World")

      await userEvent.click(button)
      expect(input).toHaveValue("Hello")
    })
  })
})
