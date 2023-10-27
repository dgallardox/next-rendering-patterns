export default async function Slug(context) {
  const slug = context.params.slug;
  const { data } = await getPost(slug);
  
  return (
    <>
      <h2>post</h2>
      <h2>{ data.post.title }</h2>
      <div dangerouslySetInnerHTML={{__html: data.post.content }} />
    </>
  );
}

const getPost = async (slug) => {
  try {
    const response = await fetch("https://cms.dailybyte.org/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GET_POST($slug: ID!) {
            post(id: $slug, idType: SLUG) {
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
        `,
        variables: { slug },
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
