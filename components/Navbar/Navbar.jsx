import Link from "next/link";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={Styles.navbar}>
        <h2>
          <Link href='/'>Server Rendering</Link>
        </h2>
        <ul>
          <li>
            <Link href='https://static.dailybyte.org'>Static</Link>
          </li>
          <li>
            <p id={Styles.activeLink}>Server</p>
          </li>
          <li>
            <Link href='https://isr.dailybyte.org'>ISR</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
