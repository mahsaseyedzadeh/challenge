"use client"
import styles from './Comments.module.scss';
import {UsersComment} from "../../../../utils/UsersComment";
import CommentCard from "@/components/Home/Comments/CommentCard";

const Comments = () => {
  return(
    <section className={styles.Wrapper}>
      <div className={styles.carousel}>
        <div className={styles.stage}>
          {UsersComment.map((item, index) => (
            <CommentCard key={index} comment={item}/>
          ))}
        </div>
      </div>

    </section>
  )
}
export default Comments;