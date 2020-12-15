import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const newApolloClient = (uri) => {
  const httpLink = createHttpLink({
    uri: uri,
  })

  // Cache implementation
  const cache = new InMemoryCache()

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })

  return apolloClient
}

export { newApolloClient }
