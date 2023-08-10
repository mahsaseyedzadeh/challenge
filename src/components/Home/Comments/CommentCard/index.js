"use client"
import styles from './CommentCard.module.scss';
import Image from "next/image";
import { assets } from "@/components/Helper";
import Link from "next/link";

const CommentCard = ({comment}) => {
   return (
     <div className={styles.card}>
       <div className={styles.cardHeader}>
         <div className={styles.avatar}>
           <Image alt={'comments'} width={45} height={45} src={assets(comment.avatar)}/>
         </div>
         <div className={styles.userInfo}>
           <span>
            {comment.revenue}
           </span>
           <span>
            {comment.name}
           </span>
         </div>
       </div>
       <div className={styles.cardBody}>
         {comment?.comment}
       </div>
       <Link href={comment?.link} className={styles.cardFooter}>
          ${`view ${comment?.name} s Portfolio`}
       </Link>

     </div>
   )
 }
 export default CommentCard;