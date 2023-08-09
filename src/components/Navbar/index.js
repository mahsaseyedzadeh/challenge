"use client"
import styles from './Navbar.module.scss'
import Link from "next/link";
 const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={`${styles.navBarWrapper} container`}>
        <div className={styles.logo}>
          Fiber
        </div>
        <ul className={styles.navbarItems}>
          <li>Community</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
        <div className={styles.authenticationBox}>
          <Link href={'/'} className={styles.link}>
            sign in
          </Link>
          <Link href={'/'} className={styles.link}>
            sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;