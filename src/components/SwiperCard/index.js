"use client";
import styles from './SwiperCard.module.scss';
import Image from "next/image";
import {assets} from "@/components/Helper";

const SwiperCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageCard}>
        <Image alt={"Slider pic"} fill src={assets('/images/SignUpImage.png')}/>
      </div>
      <div className={styles.descriptionBox}>
        <h3>
          Unparalleled Templates
        </h3>
        <p>
          Crafted by a team of professional designers, our templates are eunparalleled in the market.
          Create Fiber Account
        </p>
      </div>
    </div>
  )
}
export default SwiperCard;