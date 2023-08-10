"use client";
import FormContextProvider from "@/context/FormContext";
import HocTextFiled from "@/components/Form/HocTextFiled";
import {useState} from "react";
import styles from './SignUpForm.module.scss';
import HocCheckBox from "@/components/Form/HocCheckBox";


const SignUpForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: null,
    terms : null
  });
  const submitForm = () =>{
    console.log("submit")
  }
  return (
    <section className={styles.formWrapper}>
      <div className={styles.formStage}>
        <h2>Fiber</h2>
        <span>
        Create your Fiber account
      </span>
        <FormContextProvider  submitText={"Create Fiber Account"} onSubmitHandler={submitForm} initialValues={state} >
          <HocTextFiled
            label={"Your Name"}
            name={"name"}
            placeholder="John Doe"
            required={true}
          />
          <HocTextFiled
            label={"E-mail"}
            name={"email"}
            placeholder="john@example.com"
            required={true}
          />
          <HocCheckBox
            label={"By creating an account on Fiber, you agree to the"}
            name={"terms"}
            required={true}
          />
        </FormContextProvider>
      </div>
    </section>

  )
}
export default SignUpForm
