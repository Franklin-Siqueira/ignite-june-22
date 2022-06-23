// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Logo } from '../logo/Logo'
import './../styles/header.css'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <Logo />
          <p className="header-text-left">Franklin Siqueira | 2022</p>
        </div>
        <div className="header-center">
          <p className="header-text-center">Ignite Lab | ReactJs</p>
        </div>
        <div className="header-right">
          <p className="header-text-right">RocketSeat</p>
        </div>
      </header>
    </>
  )
}