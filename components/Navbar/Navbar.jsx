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
            <Link href="https://h31hnyx205v6wp9ae7dv4lvsz.js.wpenginepowered.com/">
              Server
            </Link>
          </li>
          <li>
            <Link href="https://h6d1uw5uhqj1e99ot4pe390b9.js.wpenginepowered.com/">
              Client
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
