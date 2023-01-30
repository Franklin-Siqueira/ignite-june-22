// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { useParams } from "react-router-dom"
import { Header } from "../components/header/Header"
import { PlayerComponent } from "../components/player/PlayerComponent"
import { Sidebar } from "../components/sidebar/Sidebar"
//
import "./styles/main.css"

interface Params {
  slug: string;
}

export const Main = () => {
  const { slug } = useParams< { slug: string }>()
  return (
    <div className="main-container">
      <Header />
      <main className="main">
        { slug 
          ? (<PlayerComponent slug={ slug } /> )
          : (<div className="flex-1" />)
        }
        <Sidebar />
      </main>
    </div>
  )
}