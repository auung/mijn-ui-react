"use client"

import * as React from "react"
import { Label } from "@mijn-ui/react-label"
import {
  createTVUnstyledSlots,
  UnstyledComponentWithSlots,
} from "@mijn-ui/react-core"
import { InputSlots, inputStyles } from "@mijn-ui/react-theme"
import { cn } from "@mijn-ui/react-utilities"

export type InputProps = UnstyledComponentWithSlots<InputSlots> &
  React.ComponentPropsWithRef<"input"> & {
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    label?: React.ReactNode
  }

const Input = ({
  unstyled,
  className,
  classNames,
  type,
  startIcon,
  endIcon,
  label,
  id: userId,
  disabled,
  ...props
}: InputProps) => {
  const styles = inputStyles({
    disabled,
    startIcon: !!startIcon,
    endIcon: !!endIcon,
  })
  const {
    base,
    input,
    startIcon: startIconStyle,
    endIcon: endIconStyle,
    label: labelStyles,
  } = createTVUnstyledSlots(styles, unstyled)
  const id = React.useId()

  return (
    <div className={base({ className: cn(classNames?.base, className) })}>
      {startIcon && (
        <div className={startIconStyle({ className: classNames?.startIcon })}>
          {startIcon}
        </div>
      )}
      <input
        type={type}
        className={input({ className: classNames?.input })}
        id={userId || id}
        disabled={disabled}
        // Adding an empty space by default ensures the floating label moves correctly on focus or when input is present.
        placeholder=""
        {...props}
      />

      {label && (
        <Label
          className={labelStyles({ className: classNames?.label })}
          htmlFor={userId || id}
        >
          {label}
        </Label>
      )}

      {endIcon && (
        <div className={endIconStyle({ className: classNames?.endIcon })}>
          {endIcon}
        </div>
      )}
    </div>
  )
}

Input.displayName = "Input"

export { Input }
