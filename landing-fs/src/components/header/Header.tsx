// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Logo } from '../logo/Logo'
import logoIgnite from '../../assets/img/pages/home/Logo-igniteLab.png'
import logoRocket from '../../assets/img/pages/home/Logo-rockeat.png'
import './../styles/header.css'

export const Header = () => {
  const logoRocketAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | RocketSeat Logo'
  const logoIgniteAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Ignite Lab Logo'
  return (
    <>
      {/* <header className="header">
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
      </header> */}

      <div className="main-container-header">
        <div className="main-container-header-marca">
          <a href="https://github.com/franklin-siqueira">
            <Logo />
            <p>Franklin Siqueira | 2022</p>
          </a>
        </div>
        <img className="main-container-header-image" src={logoIgnite} alt={logoRocketAlt} />
        <a href="https://www.rocketseat.com.br/">
          <img className="main-container-header-image" src={logoRocket} alt={logoIgniteAlt} />
        </a>
      </div>

    </>
  )
}