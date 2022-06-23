// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Header } from "../components/header/Header"
import { Player } from "../components/player/Player"
import { Sidebar } from "../components/sidebar/Sidebar"
//
import "./styles/main.css"

export const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="main">
        <Player />
        <Sidebar />
      </main>
    </div>
  )
}