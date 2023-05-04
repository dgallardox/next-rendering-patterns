import Link from "next/link";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={Styles.navbar}>
        <div>DAILY BYTE</div>
        <ul>
          <li>
            <Link href="https://h31hnyx205v6wp9ae7dv4lvsz.js.wpenginepowered.com/">
              Static
            </Link>
          </li>
          <li>
            <Link href="https://h31hnyx205v6wp9ae7dv4lvsz.js.wpenginepowered.com/">
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
