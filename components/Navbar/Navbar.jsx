import Link from "next/link";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={Styles.navbar}>
        <div>DAILY BYTE</div>
        <ul>
          <li>
            <p id={Styles.activeLink}>Static</p>
          </li>
          <li>
            <Link href="https://server.dailybyte.org">
              Server
            </Link>
          </li>
          <li>
            <Link href="https://client.dailybyte.org">
              Client
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
