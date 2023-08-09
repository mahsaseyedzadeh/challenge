"use client"
import Image from "next/image";
import {assets} from "@/components/Helper";
import styles from "./AuthorityBadgesCard.module.scss";

const AuthorityBadgesCard = ({data}) => {
  console.log(data)
  return(
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={assets(data?.src)}
          alt="Picture of the hero"
          fill
          className={styles.image}
        />
      </div>
      <h4>
        {data?.title}
      </h4>
      <p>
        {data?.description}
      </p>
    </div>
  )
}
export default AuthorityBadgesCard;