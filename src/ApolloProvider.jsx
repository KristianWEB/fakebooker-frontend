import React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import resolvers from "./utils/graphql/resolvers";
import typeDefs from "./utils/graphql/typeDefs";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://damp-forest-43324.herokuapp.com/"
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
