// Copyright 2023 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes } from "react"

interface RadixButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const RadixButton = (props: RadixButtonProps) => {
  //
  const ComponentOption = props.asChild ? Slot : 'button'
  const RadixButtonStyle = 'm-1 px-4 py-2 rounded bg-violet-500 text-white font-bold'
  //
  return (
    <ComponentOption className={RadixButtonStyle} {...props} />
    // <button className="px-4 py-2 rounded bg-violet-500 text-white font-bold" {...props} />
  )
}