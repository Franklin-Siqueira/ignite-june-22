// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ApolloClient, InMemoryCache } from "@apollo/client";
/**
 * GraphCMS at Higraph
 * (https://app.hygraph.com)
 * 
 * Environment variables:
 * . VITE_API_URL
 * . VITE_API_ACCESS_TOKEN
 */
export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})