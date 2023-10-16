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
    
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null
  }
};

export const GET_POST = async (slug) => {
  try {
    const { data } = await client.query({
      query: gql`
        query GET_POST($uri: ID!) {
          post(id: $uri, idType: URI) {
            title
            content
          }
        }
      `,
      variables: {
        uri: `posts/${slug}`,
      },
    });
    
    console.log(data.post)
    return data.post;
    
  } catch (error) {
    console.error("Error fetching post:", error);
    return null
  }
};
