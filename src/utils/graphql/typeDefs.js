import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export default typeDefs;
