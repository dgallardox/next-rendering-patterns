import Image from "next/image";
import styles from "./postsGrid.module.css"
import Link from "next/link";

const PostsGrid = async ({ posts = []}) => {
  return (
    <>
      <div className={styles.container}>
        {posts.map(({ date, title, excerpt, featuredImage, id, slug }) => (
          <Link href={`/posts/${slug}`} key={id} id={styles.card}>
            <div id={styles.imageDiv}>
              <Image
                alt='Featured Image'
                src={featuredImage?.node.sourceUrl}
                layout='fill'
              />
            </div>
            <h5>{title}</h5>
            <p>{new Date(date).toLocaleDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostsGrid;