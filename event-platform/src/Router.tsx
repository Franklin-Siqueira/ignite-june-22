// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Route, Routes } from "react-router-dom"
//
import { Main } from "./pages/Main"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/main" element={<Main />} />
      <Route path="/main/lesson/:slug" element={<Main />} />
    </Routes>
  )
}