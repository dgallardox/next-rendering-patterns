import { PageTitle, PostsGrid, Search } from "../components/index"
import styles from "./page.module.css"

const Posts = async () => {
  return (
    <>
      <PageTitle title="posts" />
      <Search />
      <PostsGrid count={15} />
    </>
  );
};

export default Posts;
