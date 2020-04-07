import React from "react";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: "wss://damp-forest-43324.herokuapp.com/graphql",
  // uri: "ws://localhost:8080/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: localStorage.getItem("token")
          ? `JWT ${localStorage.getItem("token")}`
          : ""
      }
    }
  }
});

const httpLink = createHttpLink({
  uri: "https://damp-forest-43324.herokuapp.com"
  // uri: "http://localhost:8080/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  };
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
