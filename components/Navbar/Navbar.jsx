import Link from "next/link";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={Styles.navbar}>
        <div>DAILY BYTE</div>
        <ul>
          <li>
            <Link href="https://h6d1uw5uhqj1e99ot4pe390b9.js.wpenginepowered.com/">
              Static
            </Link>
          </li>
          <li>
            <p id={Styles.activeLink}>Server</p>
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
