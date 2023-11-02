import styles from "./page.module.css"
import { Hero, PageTitle, PostsGrid } from "./components/index";

const Home = async () => {
  return (
    <>
      <Hero />
      <PageTitle title="Recent Posts"/>
      <PostsGrid count={9} />
    </>
  );
}

export default Home;