import { gql } from "@apollo/client";

export const GET_100_POSTS = gql`
  query GET_POSTS {
    posts(first: 1000) {
      nodes {
        id
        slug
        title
        date
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
