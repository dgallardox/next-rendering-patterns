import React from "react"
import { GET_POST } from "../../apollo/queries"
import Layout from "../../components/Layout"

export default function Slug({ post }) {

  console.log(post)
  return (
    <>
      <Layout>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({params}) => {
  const slug = params.slug;
  console.log(slug)
  const post = await GET_POST(slug)

  return {
    props: {
      post: post
  }
  }
}