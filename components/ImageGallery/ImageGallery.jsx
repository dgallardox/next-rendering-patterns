import Image from "next/image";
import Styles from "./ImageGallery.module.css"
import Link from "next/link";

export default function ImageGallery({ posts }) {
  
  return (
    <>
      <div className={Styles.container}>
        {posts.map(
          ({ date, title, excerpt, slug, featuredImage, id, content }) => (
            <Link href={`posts/${slug}`}>
              <div key={id} id={Styles.card}>
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
          )
        )}
      </div>
    </>
  );
}
