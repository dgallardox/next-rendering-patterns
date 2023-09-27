import { gql } from "@apollo/client";
import client from "./apollo-client";

export const GET_100_POSTS = async () => {
  try {
    const { data } = await client.query({
    query: gql`
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
    `,
  });

    return data.posts.nodes;
    
  } catch (err) {
    console.error("error in queries.js: ", err);
    console.error("WORDPRESS_API env var is", process.env.WORDPRESS_API)
    return null
  }
};
