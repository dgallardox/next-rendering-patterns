"use client";

import Link from "next/link";
import Styles from "./Navbar.module.css";

const navitems = {};

export default function Navbar() {
  return (
    <>
      <nav className={Styles.navbar}>
        <h2>
          <Link href='/'>ISR</Link>
        </h2>
        <ul>
          <li>
            <p>Static</p>
          </li>
          <li>
            <Link href='https://server.dailybyte.org'>Server</Link>
          </li>
          <li>
            <Link href='https://client.dailybyte.org'>Client</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
