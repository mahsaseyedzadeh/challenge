"use client"
import styles from './FooterList.module.scss';
const FooterList = ({data}) => {
  return(
    <ul className={styles.wrapper}>
      <li className={styles.header}>{data.title}</li>
      {data?.data.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}

    </ul>

  )
}
export default FooterList;