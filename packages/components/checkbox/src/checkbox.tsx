"use client"

import * as React from "react"
import { useControlledState } from "@mijn-ui/react-hooks/use-controlled-state"
import {
  UnstyledProps,
  applyUnstyled,
  cn,
} from "@mijn-ui/react-utilities/shared"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { VariantProps, cva } from "class-variance-authority"
import { CheckIcon, DividerHorizontalIcon } from "@mijn-ui/shared-icons"

export const checkboxStyles = cva(
  [
    "rounded-default peer size-5 shrink-0 border disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
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
  },
)

/* -------------------------------------------------------------------------- */
/*                                  Checkbox                                  */
/* -------------------------------------------------------------------------- */

type CheckboxProps = React.ComponentPropsWithRef<
  typeof CheckboxPrimitive.Root
> &
  UnstyledProps &
  VariantProps<typeof checkboxStyles> & {
    checked?: boolean | "indeterminate"
    onCheckedChange?: (checked: boolean | "indeterminate") => void
  }

const Checkbox = ({
  checked: ControlledChecked,
  onCheckedChange: ControlledOnCheckedChange,
  defaultChecked,
  unstyled,
  color,
  size,
  className,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useControlledState<boolean | "indeterminate">(
    ControlledChecked,
    !!defaultChecked,
    ControlledOnCheckedChange,
  )

  return (
    <CheckboxPrimitive.Root
      className={applyUnstyled(
        unstyled,
        checkboxStyles({ color, size }),
        className,
      )}
      {...props}
      checked={checked}
      onCheckedChange={setChecked}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        {checked === "indeterminate" && (
          <DividerHorizontalIcon className="size-4" />
        )}
        {checked === true && <CheckIcon className="size-4" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
