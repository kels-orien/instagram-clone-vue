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
  mutation CreateCommentMutation(
    $text: String!
    $postId: String!
    $userId: String!
  ) {
    createComment(text: $text, post: $postId, postedBy: $userId) {
      id
      text
      post: post 
      postedBy:postedBy
      createdAt
    }
  }
`;
