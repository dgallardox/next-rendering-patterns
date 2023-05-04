import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(
  gql`
  query allPosts {
    posts {
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
`);
  
  if (error) return <p className={styles.res}>Error</p>;
  if (loading) return <p className={styles.res}>Loading...</p>;

  function convertDate(unconvertedDate) {
    let newDate = unconvertedDate.split(/[-T]+/);
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
  }

  return (
    <>
      <div id={styles.heroText}>DAILY BYTE</div>
      <div id={styles.navBar}>
        <ul id={styles.list}>
          <li id={styles.li}>
            <Link href="https://hxe6cb2lqipzyhl51y1keqw92.js.wpenginepowered.com/">
              Static
            </Link>
          </li>
          <li id={styles.li}>
            <Link href="https://h31hnyx205v6wp9ae7dv4lvsz.js.wpenginepowered.com/">
              Server
            </Link>
          </li>
          <li id={styles.li}>
            <p id={styles.active}>Client</p>
          </li>
        </ul>
      </div>
      <>
        {data.posts.nodes.map(
          ({ date, title, excerpt, featuredImage }) => {
            return (
              <>
                  <div id={styles.card}>
                    <div id={styles.imageDiv}>
                        <Image
                          alt="Featured Image"
                          src={featuredImage?.node.sourceUrl}
                          layout="fill"
                          width="100%"
                          height="100%"
                        />
                    </div>
                    <h5 id={styles.title}>{title}</h5>
                    <p>{convertDate(date)}</p>
                    <div>
                      <div
                        id={styles.body}
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                    </div>
                  </div>
              </>
            );
          }
        )}
      </>
    </>
  );
}

