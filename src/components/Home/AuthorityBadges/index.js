import styles from './AuthorityBadges.module.scss';
import AuthorityBadgesCard from '../AuthorityBadgesCard';
import { AuthorityBadgeObj } from '../../../../utils/AuthorityBadgesObj';
const AuthorityBadges = () => {
  return (
    <section className={styles.wrapper}>
      <span className={styles.subject}>
        Why Fiber?
      </span>
      <h3>
        A good portfolio means good employability.
      </h3>
      <div className={styles.badgesWrapper}>
        {AuthorityBadgeObj.map((item, index) =>(
          <AuthorityBadgesCard key={Math.random()+ index}  data={item} />
        ))}
      </div>

    </section>
  )
}
export default AuthorityBadges;