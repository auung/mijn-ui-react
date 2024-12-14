import { tv, VariantProps } from "tailwind-variants"

const checkboxStyles = tv({
  slots: {
    base: "rounded-default peer size-5 shrink-0 border disabled:cursor-not-allowed disabled:opacity-50",
    indicator: "flex items-center justify-center text-current",
    icon: "size-4",
  },
  variants: {
    color: {
      primary:
        "border-main-text data-[state=checked]:border-primary data-[state=indeterminate]:border-primary  data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-text data-[state=indeterminate]:text-primary-text",
      secondary:
        "border-main-text data-[state=checked]:border-secondary data-[state=indeterminate]:border-secondary data-[state=checked]:bg-secondary data-[state=indeterminate]:bg-secondary data-[state=checked]:text-secondary-text data-[state=indeterminate]:text-secondary-text",
      accent:
        "border-main-text data-[state=checked]:border-main-border data-[state=indeterminate]:border-main-border data-[state=checked]:bg-accent data-[state=indeterminate]:bg-accent data-[state=checked]:text-accent-text data-[state=indeterminate]:text-accent-text",
      muted:
        "border-main-text data-[state=checked]:border-muted data-[state=indeterminate]:border-muted data-[state=checked]:bg-muted data-[state=indeterminate]:bg-muted data-[state=checked]:text-muted-text data-[state=indeterminate]:text-muted-text",
      danger:
        "border-main-text data-[state=checked]:border-danger data-[state=indeterminate]:border-danger data-[state=checked]:bg-danger data-[state=indeterminate]:bg-danger data-[state=checked]:text-danger-filled-text data-[state=indeterminate]:text-danger-filled-text",
      success:
        "border-main-text data-[state=checked]:border-success data-[state=indeterminate]:border-success data-[state=checked]:bg-success data-[state=indeterminate]:bg-success data-[state=checked]:text-success-filled-text data-[state=indeterminate]:text-success-filled-text",
    },
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkboxStyles>
export { checkboxStyles }
