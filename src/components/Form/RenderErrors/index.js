import styles from "../HocTextFiled/HocTextFiled.module.scss";

const RenderErrors = ({name , errors}) =>{
 const hasError = errors;
 const renderErrors = () => {
  if (!hasError) {
   return null;
  }

  const errorList = errors.map((errMsg, i) => (
      <li key={`${name}-error-${i}`} className={styles.error}>
       {errMsg}
      </li>
  ));

  return <ul className={styles.errorMessage}>{errorList}</ul>;
 };
 return (
     <>
      {renderErrors()}
     </>
 )

}
export default  RenderErrors
