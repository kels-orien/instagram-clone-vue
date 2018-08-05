import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts {
      id
      image
      text
      postedBy {
        id
        username
        image
      }
      comments {
        text
        postedBy {
          username
        }
      }
      likes {
        post {
          id
        }
        user {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentAndConnectUserPost(
    $text: String!
    $postId: ID!
    $userId: ID!
  ) {
    createComment(text: $text, postId: $postId, postedById: $userId) {
      id
      text
      postedBy {
        username
        image
      }
      createdAt
    }
  }
`;

export const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeAndConnectUserPost($postId: ID!, $userId: ID!) {
    createLike(post: $postId, user: $userId) {
      id
      post {
        id
      }
      user {
        id
      }
    }
  }
`;

export const DELETE_LIKE_MUTATION = gql`
  mutation DeleteLikeFromPost($likeId: ID!) {
    deleteLike(id: $likeId) {
      id
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation(
    $email: String!
    $fullname: String!
    $username: String!
    $password: String!
  ) {
    createUser(
      fullname: $fullname
      username: $username
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }

    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
