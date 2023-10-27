import Image from "next/image";
import Styles from "./postsGrid.module.css"
import Link from "next/link";

export default function PostsGrid({ posts }) {
  
  return (
    <>
      <h2>Recent Posts</h2>
      <div className={Styles.container}>
        {posts.map(({ date, title, excerpt, featuredImage, id, slug }) => (
          <Link href={`/posts/${slug}`} key={id} id={Styles.card}>
            <div>
              <div id={Styles.imageDiv}>
                <Image
                  alt='Featured Image'
                  src={featuredImage?.node.sourceUrl}
                  layout='fill'
                />
              </div>

              <h5>{title}</h5>
              <p>{new Date(date).toLocaleDateString()}</p>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
