import Image from "next/image";
import styles from "./postsGrid.module.css"
import Link from "next/link";

const PostsGrid = async () => {

  const { data } = await getPosts()
  const posts = data.posts.nodes
  
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
}

const getPosts = async () => {
  try {
    const response = await fetch("https://cms.dailybyte.org/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GET_POSTS {
            posts(first: 9) {
              nodes {
                id
                slug
                title
                date
                content
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default PostsGrid;