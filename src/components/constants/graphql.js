import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query AllLinksQuery {
    allPosts {
      id 
      image
      caption
      postedBy {
        id
        username
      }
      comments {
        id
        message
        postedBy
        createdAt
      }
      likes {
        id
        user
        post
        createdAt
      }
      createdAt
      updatedAt
    }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation()

`;

export const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeMutation()

`;
