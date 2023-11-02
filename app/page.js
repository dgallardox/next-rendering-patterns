import styles from "./page.module.css"
import { Hero, PageTitle, PostsGrid } from "./components/index";

const Home = async () => {

  const posts = await getPosts()
  
  return (
    <>
      <Hero />
      <PageTitle title="Recent Posts"/>
      <PostsGrid posts={posts} />
    </>
  );
}

export default Home;

async function getPosts() {
  try {
    const response = await fetch("https://cms.dailybyte.org/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GET_POSTS {
            posts(first: 6) {
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
    const { data } = await response.json();
    const posts = data.posts.nodes;
    return posts
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}