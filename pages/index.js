import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { GET_100_POSTS } from "../apollo/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(GET_100_POSTS);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ImageGallery posts={data.posts.nodes} />
    </>
  );
}
