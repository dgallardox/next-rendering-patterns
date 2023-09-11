import { gql } from "@apollo/client";
import { useRouter } from "next/router"
import client from "../../apollo/apollo-client";
import Navbar from "../../components/Navbar/Navbar";

export default function Slug({ post }) {

  return (
    <>
      <Navbar />
      <h2>{ post.title }</h2>
      <p>{ post.content }</p>
    </>
  )

}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps = async ({params}) => {
  const slug = params.slug

  const { data } = await client.query({
    query: GET_POST,

    variables: {
      id: slug,
    },
  });

  return {
    props: {
      post: data.post
    },
  };
};

const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
    }
  }
`;