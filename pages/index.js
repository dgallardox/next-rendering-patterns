import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { GET_100_POSTS } from "../apollo/queries";

export default function Home({ posts }) {

  return (
    <>
      <Navbar />
      {posts === null ? <>Nothing to see here....awkward ;)</> : <ImageGallery posts={posts} />}
    </>
  );
}

export const getServerSideProps = async () => {

  let posts = await GET_100_POSTS();
  
    return {
      props: {
        posts: posts,
      },
    };
};
