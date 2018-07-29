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
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentAndConnectUserPost(
    $text: String!
    $postId: String!
    $userId: String!
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

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation( $email: $fullname: String!, $username: String!, String!, $password: String!) {
    createUser(
      name: $fullname,
      username: $username
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
    ) {
      id
    }

    signinUser(email: {
      email: $email,
      password: $password
    }) {
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
