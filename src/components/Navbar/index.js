"use client"
import styles from './Navbar.module.scss'
import Link from "next/link";
import {useState} from "react";
 const Navbar = () => {
   const [isOpen , setIsOpen] =useState(false)
  return (
    <nav className={styles.navBar}>
      <div className={`${styles.navBarWrapper}`}>
        <button  className={styles.mobileMenu} aria-label={'hamberger menu'} onClick={()=>{setIsOpen(!isOpen)}}/>
        <h2 className={styles.logo}>
          Fiber
        </h2>
        <div aria-label={'back drop'} className={`${styles.backDrop} ${isOpen ? styles.show : ''}`} onClick={()=>{setIsOpen(!isOpen)}}/>
        <div className={`${styles.sidenav} ${isOpen ? styles.openDrawer :''}`}>
          <ul className={styles.navbarItems}>
            <li>Community</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
          <div className={styles.authenticationBox}>
            <Link href={'/'} className={styles.link}>
              sign in
            </Link>
            <Link href={'/signup'} className={styles.link}>
              sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;