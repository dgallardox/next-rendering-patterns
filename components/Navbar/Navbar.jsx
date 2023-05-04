import Link from "next/link";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={Styles.navbar}>
        <div>DAILY BYTE</div>
        <ul>
          <li>
            <Link href="https://static.dailybyte.org">
              Static
            </Link>
          </li>
          <li>
            <Link href="https://server.dailybyte.org">
              Server
            </Link>
          </li>
          <li>
            <p id={Styles.activeLink}>Client</p>
          </li>
        </ul>
      </nav>
    </>
  );
}
