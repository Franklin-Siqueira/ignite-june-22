// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4okcsxa0dob01xk9jfmguug/master',
  cache: new InMemoryCache()
})