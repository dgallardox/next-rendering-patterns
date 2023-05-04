import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { GET_100_POSTS } from "../apollo/queries";
import { useEffect, useState } from "react";


export default function Home({ posts }) {

  return (
    <>
      <Navbar />
      <ImageGallery posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  let posts = await GET_100_POSTS();

  return {
    props: {
      posts: posts,
    },
  };
};
