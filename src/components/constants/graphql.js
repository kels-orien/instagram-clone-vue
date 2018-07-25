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
  mutation CreateCommentMutation($text: String!, $postId: String!) {
    createComment(post{id:$postId }, text: $text) {
      id
      text
      post
      createdAt
    }
  }
`;
