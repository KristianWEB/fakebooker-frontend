import gql from "graphql-tag";

export const REGISTER_USER = gql`
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

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

export const LOAD_USER = gql`
  {
    loadUser {
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

export const GET_POSTS_BY_USERNAME = gql`
  query getPosts($username: String!) {
    getPosts(username: $username) {
      id
      userId
      author {
        username
        coverImage
      }
      content
      creationDate
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content) {
      id
      userId
      author {
        username
        coverImage
      }
      content
      creationDate
    }
  }
`;
