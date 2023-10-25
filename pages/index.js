import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { GET_100_POSTS } from "../apollo/queries";
import Layout from "../components/Layout";

export default function Home({ posts }) {

  return (
    <>
      <Layout>
        {posts === null ? (
          <>Nothing to see herex....awkward ;)</>
        ) : (
          <ImageGallery posts={posts} />
        )}
      </Layout>
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
