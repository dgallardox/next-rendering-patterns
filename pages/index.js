import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import client from "../apollo/apollo-client";
import { gql } from "@apollo/client";


export default function Home({ posts }) {

  return (
    <>
      <Navbar />
      <ImageGallery posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_100_POSTS
  })

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
};

const GET_100_POSTS = gql`
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

