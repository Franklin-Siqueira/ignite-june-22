// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// import { ApolloProvider } from '@apollo/client'
// import { client } from './lib/apollo'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css' // Substituído/Replaced
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ApolloProvider client={ client }> */}
    <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>
)
