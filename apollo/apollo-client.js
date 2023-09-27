import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const WORDPRESS_API = process.env.WORDPRESS_API || null

const link = createHttpLink({
  uri: process.env.WORDPRESS_API,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
  },
});

export default client;
