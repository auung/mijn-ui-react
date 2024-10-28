import * as React from "react"
import { UnstyledProps } from "@/mijn-ui/types"
import { applyUnstyled } from "@/mijn-ui/utils"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { LuLoader2 } from "react-icons/lu"

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 transition-colors <duration-300></duration-300> ease-in-out active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80",
  ],
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        surface: "",
        danger: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      variant: {
        filled: "",
        outline: "border border-current",
        text: "bg-transparent",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "outline",
        className:
          "hover:bg-primary hover:text-primary-text border border-primary text-primary",
      },
      {
        color: "secondary",
        variant: "outline",
        className:
          "hover:bg-secondary hover:border-secondary border border-secondary-text text-secondary-text",
      },
      {
        color: "surface",
        variant: "outline",
        className:
          "hover:bg-surface hover:text-surface-text border border-surface-text text-surface-text",
      },
      {
        color: "danger",
        variant: "outline",
        className:
          "hover:bg-danger hover:text-danger-filled-text border border-danger text-danger",
      },

      {
        color: "primary",
        variant: "text",
        className: "hover:bg-primary hover:text-primary-text text-primary",
      },
      {
        color: "secondary",
        variant: "text",
        className: "hover:bg-secondary text-secondary-text",
      },
      {
        color: "surface",
        variant: "text",
        className: "hover:bg-surface hover:text-surface-text text-surface-text",
      },
      {
        color: "danger",
        variant: "text",
        className: "hover:bg-danger hover:text-danger-filled-text text-danger",
      },

      {
        color: "primary",
        variant: "filled",
        className: "bg-primary text-primary-text hover:bg-primary/90",
      },
      {
        color: "secondary",
        variant: "filled",
        className: "bg-secondary text-secondary-text hover:bg-secondary/90",
      },
      {
        color: "danger",
        variant: "filled",
        className: "bg-danger text-danger-filled-text hover:bg-danger/80",
      },
      {
        color: "surface",
        variant: "filled",
        className: "bg-surface border text-surface-text hover:bg-accent",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      radius: "md",
      size: "md",
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean
    loading?: boolean
  } & UnstyledProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      unstyled,
      className,
      color,
      variant,
      size,
      radius,
      loading,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component
        className={applyUnstyled(
          unstyled,
          buttonStyles({ color, variant, size, radius }),
          className,
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && (
          <LuLoader2
            className={applyUnstyled(
              unstyled,
              "mr-2 h-5 w-5 animate-spin text-current",
            )}
          />
        )}
        <Slottable>{loading ? "Loading..." : children}</Slottable>
      </Component>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonStyles }
