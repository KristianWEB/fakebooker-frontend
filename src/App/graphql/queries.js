import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      username
      token
      email
      displayName
      coverImage
      status {
        isDeactivated
        lastActiveDate
      }
    }
  }
`;

export default REGISTER_USER;
