import styles from './Rating.module.scss'
const Rating = () => {
  return (
    <div className={styles.RatingWrapper}>
      {[...Array(5)].map((key, index) =>(
        <button key={Math.random()+ index} aria-label={'star'} className={styles.rateIcon}/>
      ))}
      Rated 4.8/5 (243 reviews)
    </div>
  )
}
export default Rating;