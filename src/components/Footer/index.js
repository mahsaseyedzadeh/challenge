"use client"
import styles from './Footer.module.scss';
import {FooterObj} from "../../../utils/FooterObj";
import FooterList from "@/components/Footer/FooterList";
const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footerStage}>
        <div  className={styles.leftSide}>
          <h1>
            Fiber
          </h1>
          <p>
            With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.
          </p>
          <span>
          Made with in the Netherlands.
        </span>
        </div>
        <div className={styles.rightSide}>
          {FooterObj.map((item, index) => (
            // console.log(item.title)
            <FooterList key={index} data={item}/>
            ))
          }
        </div>
      </div>

    </footer>
  )
}
export default Footer;