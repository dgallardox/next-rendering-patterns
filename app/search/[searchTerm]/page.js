import { PageTitle, PostsGrid } from "../../components";

const Search = async (context) => {
  const searchTerm = context.params.searchTerm;
  const posts = await getSearchPosts(searchTerm) || null
  
  

  if (!posts) {
    return (
      <>
        <h2>No results :(</h2>
      </>
    )
  } else {
    return (
      <>
        <PageTitle title='you searched for...' />
        <PostsGrid posts={posts} />
      </>
    );
  }
}

export default Search;

async function getSearchPosts(search) {
  try {
    // use env var
    const res = await fetch("https://cms.dailybyte.org/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query searchPosts($search: String!) {
          posts(where: {search: $search}){
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
        variables: { search },
      }),
    });

    const { data } = await res.json()
    const posts = data.posts.nodes
    return posts.length === 0 ?
      null :
     posts;
  } catch (err) {
    console.log(err)
  }
}