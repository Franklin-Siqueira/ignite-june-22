// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// import { useState } from "react"
//
//    Before CodeGen
//
// import { gql, useMutation } from "@apollo/client"
//
//    with CodeGen
//
import { useNewSubscriptionMutation } from "../graphql/generated"
//
import React from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../components/logo/Logo"
import "./styles/home.css"

//
//    Before CodeGen
//
// const NEW_SUBSCRIPTION_MUTATION = gql`
//   mutation NewSubscription($name: String!, $email: String!) {
//   createSubscriber(data: {name: $name, email: $email}) {
//     id
//   }
// }`

export const Home = () => {
  // const { slug } = useParams< { slug: string }>()
  const codeImage = './src/assets/img/pages/home/dev_screen.png'
  const codeImageAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Code Image'
  const logoRocket = './src/assets/img/pages/home/Logo-rockeat.png'
  const logoRocketAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | RocketSeat Logo'
  const logoIgnite = './src/assets/img/pages/home/Logo-igniteLab.png'
  const logoIgniteAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Ignite Lab Logo'
  //
  const [ name, setName ] = React.useState('')
  const [ email, setEmail ] = React.useState('')
  //
  const navigateTo = useNavigate()
  //
  //    Before CodeGen
  //
  // const [ newSubscription, { data }] = useMutation( NEW_SUBSCRIPTION_MUTATION )
  //
  //    With CodeGen
  //
  const [ newSubscription, { loading } ] = useNewSubscriptionMutation()
  //
  const handleSubscribeForm = async (e: React.FormEvent) => {
    e.preventDefault();
    //
    await newSubscription({
      variables: {
        name,
        email,
      }
    })
    navigateTo('/main')
  }
  return (
    <>
      <div className="main-home-container">
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
              <form onSubmit={handleSubscribeForm}>
                <input 
                  type="text" 
                  placeholder="Your name..."
                  onChange={ e => setName(e.target.value) }
                  />
                <input 
                  type="email" 
                  placeholder="And your e-mail."
                  onChange={ e => setEmail(e.target.value) }
                />
                <button type="submit" disabled={ loading }>
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
