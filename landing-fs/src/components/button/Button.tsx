// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { DiscordLogo, Lightning } from "phosphor-react"
import "./../styles/button.css"

interface ButtondProps {
  href: string;
  text: string;
  buttonIcon: 'discord' | 'lightning';
  optionClass: 'background-button' | 'clear-button';
}

export const Button = (props: ButtondProps) => {
  const aProp = "background-button-base " + props.optionClass
  return (
    <div>
      <a className={aProp} href={props.href}>
        {props.buttonIcon === 'discord' ?
          (<DiscordLogo size={24} />) :
          (<Lightning size={24} />)
        }
        {props.text}
      </a>
    </div>
  )
}