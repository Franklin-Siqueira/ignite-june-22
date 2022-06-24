// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Logo } from "../components/logo/Logo"
import "./styles/home.css"

export const Home = () => {
  // const { slug } = useParams< { slug: string }>()
  const codeImage = './src/assets/img/pages/home/dev_screen.png'
  const codeImageAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Code Image'
  const logoRocket = './src/assets/img/pages/home/Logo-rockeat.png'
  const logoRocketAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | RocketSeat Logo'
  const logoIgnite = './src/assets/img/pages/home/Logo-igniteLab.png'
  const logoIgniteAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Ignite Lab Logo'
  return (
    <>
      <div className="main-container">
        <div className="main-container-header">
          <div className="main-container-header-marca">
            <Logo />
            <p>Franklin Siqueira | 2022</p>
          </div>
          <img className="main-container-header-image" src={logoIgnite} alt={logoRocketAlt} />
          <img className="main-container-header-image" src={logoRocket} alt={logoIgniteAlt} />
        </div>
        <main className="main">

          <div className="main-hero">
            {/* <h1>Home Subscribe LandPage</h1> */}
            <div className="main-hero-left">
              <img className="main-container-header-image" src={logoIgnite} alt={logoRocketAlt} />
              <h1>
                Subscribe <span>Landing Page</span> at Ignite Lab | <span>ReactJs</span>
              </h1>
              <p>
                Improving ReactJs skills and learning something new. That's what it's all about!
              </p>
            </div>
            <div className="main-hero-right">
              <h1><span>Free</span> Subscription</h1>
              <form action="">
                <input 
                  type="text" 
                  placeholder="Your name..."
                />
                <input 
                  type="email" 
                  placeholder="And your e-mail."
                />
                <button type="submit">
                  Get Mine Now!
                </button>
              </form>
            </div>
          </div>

        </main>

        <img src={codeImage} alt={codeImageAlt} />

      </div>
    </>
  )
}