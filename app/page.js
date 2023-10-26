import ImageGallery from "./components/ImageGallery/ImageGallery.jsx"

export default async function Home() {
  const { data } = await getPosts()
  console.log(data.posts)

  return (
    <>
      <ImageGallery posts={data.posts.nodes} />
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
            posts(first: 1000) {
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

// export const getStaticProps = async () => {
//   const { data } = await client.query({
//     query: GET_100_POSTS,
//   });

//   return {
//     props: {
//       posts: data.posts.nodes,
//     },
//   };
// };

// const GET_100_POSTS = gql`
//   query GET_POSTS {
//     posts(first: 1000) {
//       nodes {
//         id
//         slug
//         title
//         date
//         content
//         excerpt
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `;
