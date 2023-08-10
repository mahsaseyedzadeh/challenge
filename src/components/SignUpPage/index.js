import styles from './SignUpPage.module.scss';
import SlideShow from "@/components/SlideShow/SlideShow";
import SignUpForm from "@/components/SignUpPage/SignUpForm";
 const SignUpPage = () => {
   return (
     <section className={styles.wrapper}>
       <div className={styles.stage}>
         <div className={styles.leftSide}>
            <SignUpForm/>
         </div>
         <div className={styles.rightSide}>
          <SlideShow/>
         </div>
       </div>
     </section>
   )
 }
 export default SignUpPage