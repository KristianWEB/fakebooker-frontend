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
      comments {
        id
        userId
        body
        creationDate
        author {
          username
          coverImage
        }
      }
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
      comments {
        id
        userId
        body
        creationDate
        author {
          username
          coverImage
        }
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      userId
      author {
        username
        coverImage
      }
      content
      creationDate
      comments {
        id
        userId
        body
        creationDate
        author {
          username
          coverImage
        }
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      userId
      author {
        username
        coverImage
      }
      content
      creationDate
      comments {
        id
        userId
        body
        creationDate
        author {
          username
          coverImage
        }
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;
