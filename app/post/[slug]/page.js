// import React from "react";
// import { gql } from "@apollo/client";
// import client from "../../apollo/apollo-client";
// import Navbar from "../../app/components/Navbar/Navbar";
// import { GetStaticProps, GetStaticPaths } from "next";
// import Image from "next/image";

export default function Slug({ post }) {
  return (
    <>
      <h2>post</h2>
      {/* <Navbar />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Image
        alt='Featured Image'
        src={post.featuredImage?.node.sourceUrl}
        width={400}
        height={300}
      /> */}
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = params!.slug;

//   const { data, errors } = await client.query({
//     query: GET_POST,
//     variables: {
//       id: slug,
//     },
//   });

//   if (errors || !data || !data.post) {
//     console.log("errors: ", errors);
//     return {
//       notFound: true,
//       revalidate: 10,
//     };
//   } else {
//     return {
//       props: {
//         post: data.post,
//       },
//       revalidate: 10,
//     };
//   }
// };

// const GET_POST = gql`
//   query ($id: ID!) {
//     post(id: $id, idType: SLUG) {
//       title
//       content
//       featuredImage {
//         node {
//           sourceUrl
//         }
//       }
//     }
//   }
// `;
