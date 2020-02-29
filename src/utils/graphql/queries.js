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
      id
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
      userId {
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
      comments {
        id
        userId {
          firstName
          lastName
          avatarImage
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
      likeCount
      commentCount
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      userId {
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
      comments {
        id
        userId {
          firstName
          lastName
          avatarImage
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
      likeCount
      commentCount
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      userId {
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
      comments {
        id
        userId {
          firstName
          lastName
          avatarImage
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
      likeCount
      commentCount
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      userId {
        firstName
        lastName
        avatarImage
      }
      body
      createdAt
      comments {
        id
        userId {
          firstName
          lastName
          avatarImage
        }
        postId
        body
        createdAt
      }
      likes {
        userId
        postId
        createdAt
      }
      likeCount
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
        userId
        postId
        createdAt
      }
      likeCount
    }
  }
`;
