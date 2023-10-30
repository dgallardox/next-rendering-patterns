import { PostsGrid } from "../components/index"
import styles from "./page.module.css"

const Posts = async () => {
  return (
    <>
      <div id={styles.title}>Recent Posts</div>
      <PostsGrid />
    </>
  );
};

export default Posts;
