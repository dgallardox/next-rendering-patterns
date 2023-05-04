import { gql } from "@apollo/client";
import client from "./apollo-client";

export const GET_100_POSTS = async () => {
  const { data } = await client.query({
    query: gql`
    query GET_POSTS {
      posts(first: 100) {
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
  `
  });

  return data.posts.nodes;
}