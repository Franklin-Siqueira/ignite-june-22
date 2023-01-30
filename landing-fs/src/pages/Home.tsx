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
//
import { Logo } from "../components/logo/Logo"
// const codeImage = './src/assets/img/pages/home/dev_screen.png'
// const logoIgnite = './src/assets/img/pages/home/Logo-igniteLab.png'
// const logoRocket = './src/assets/img/pages/home/Logo-rockeat.png'
import codeImage from '../assets/img/pages/home/dev_screen.png'
import logoIgnite from '../assets/img/pages/home/Logo-igniteLab.png'
import logoRocket from '../assets/img/pages/home/Logo-rockeat.png'
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
  const codeImageAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Code Image'
  const logoRocketAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | RocketSeat Logo'
  const logoIgniteAlt = 'Franklin Siqueira | RocketSeat | Ignite Lab | Ignite Lab Logo'
  //
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  //
  const navigateTo = useNavigate()
  //
  //    Before CodeGen
  //
  // const [ newSubscription, { data }] = useMutation( NEW_SUBSCRIPTION_MUTATION )
  //
  //    With CodeGen
  //
  const [newSubscription, { loading }] = useNewSubscriptionMutation()
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
            <a href="https://github.com/franklin-siqueira">
              <Logo />
              <p>Franklin Siqueira | 2022</p>
            </a>
          </div>
          <img className="main-container-header-image" src={logoIgnite} alt={logoIgniteAlt} />
          <a href="https://rocketseat.com.br">
            <img className="main-container-header-image" src={logoRocket} alt={logoRocketAlt} />
          </a>
        </div>

        <main className="main">
          <div className="main-hero">
            {/* <h1>Home Subscribe LandPage</h1> */}
            <div className="main-hero-left">
              <img src={logoIgnite} alt={logoIgniteAlt} />
              <h1>
                Subscribe <span>Landing Page</span> at Ignite Lab | <span>ReactJs</span>
              </h1>
              <p>
                Improving ReactJs skills and learning something new have never been easier. At RocketSeat Ignite Lab, your path to higher employment opportunities is just around the corner. That's what it's all about!
              </p>
            </div>
            <div className="main-hero-right">
              <h1><span>Free</span> Subscription</h1>
              <form onSubmit={handleSubscribeForm}>
                <input
                  type="text"
                  placeholder="Your name..."
                  onChange={e => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="And your e-mail."
                  onChange={e => setEmail(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                  Get Mine Now!
                </button>
              </form>
            </div>
          </div>
        </main>

        {/* <img className="z-[-2] md:mt-[-20]" src={codeImage} alt={codeImageAlt} /> */}

        {/* <div className="inline-block">

          <div className="z-20
                          max-w-md 
                          mx-auto 
                          bg-white 
                          rounded-md 
                          shadow-md 
                          overflow-hidden 
                          md:max-w-2xl"
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={codeImage} alt={codeImageAlt} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  Finding customers for your new business
                </a>
                <p className="mt-2 text-slate-500">
                  Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="main-home-container-img-bottom">
          <img src={codeImage} alt={codeImageAlt} />
        </div>
      </div>
    </>
  )
}
