"use client"
import styles from './Template.module.scss';
import Image from "next/image";
import {assets} from "@/components/Helper";
const Template = () => {
  return(
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h3>
          Diversify your portfolio.
        </h3>
        <p>
          Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide.
        </p>
        <button onClick={ () => { console.log("redirect to url"); } }>
          Start Free Trial
        </button>

      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={assets('/images/PageImage.png')}
          alt="Picture of the hero"
          fill
          className={styles.image}
        />
      </div>

    </section>
  )
}
export default Template;