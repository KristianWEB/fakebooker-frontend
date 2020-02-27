import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $birthday: Date!
    $gender: String!
    $password: String!
  ) {
    register(
      registerInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        birthday: $birthday
        gender: $gender
        password: $password
      }
    ) {
      firstName
      lastName
      email
      birthday
      gender
      token
      avatarImage
      coverImage
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      firstName
      lastName
      email
      birthday
      gender
      token
      avatarImage
      coverImage
    }
  }
`;

export const LOAD_USER = gql`
  {
    loadUser {
      firstName
      lastName
      email
      birthday
      gender
      token
      avatarImage
      coverImage
    }
  }
`;

export const GET_POSTS = gql`
  {
    getPosts {
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
      likes {
        username
        creationDate
      }
      likeCount
      commentCount
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
      likes {
        username
        creationDate
      }
      commentCount
      likeCount
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
      commentCount
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
      commentCount
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        creationDate
        username
      }
      likeCount
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
