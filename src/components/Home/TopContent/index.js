"use client"
import Link from "next/link";
import Rating from "@/components/Rating";
import styles from './TopContent.module.scss';
import Image from "next/image";
import {assets} from "@/components/Helper";

const TopContent = () => {
  return(
    <section className={styles.contentWrapper}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Rating/>
          <h2 className={styles.header}>
            create your portfolio in minutes
          </h2>
          <p className={styles.text}>
            With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={()=>{console.log("5")}}>
              Start Free Trial
            </button>
            <Link href={'#'}>
              View Examples
            </Link>
          </div>
          <div className={styles.badgeRow}>
            <div>
              No Credit Card Required
            </div>
            <div>
              10 Free Templates
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.imageWrapper}>
            <Image
              src={assets('/images/hero-Illustration.png')}
              alt="Picture of the hero"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>


    </section>
  )
}
export default TopContent