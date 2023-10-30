import Link from "next/link";
import styles from "./navbar.module.css";

const links = {
  posts: "/posts",
  navitem: "test2.com",
  navitem: "test3.com",
};
const entries = Object.entries(links);

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h2>
          <Link href='/'>Daily Byte</Link>
        </h2>
        <ul>
          {entries.map(([title, link]) => (
            <Link key={title} href={link}>
              {title}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar
