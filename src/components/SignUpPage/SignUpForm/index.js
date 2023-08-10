"use client";
import FormContextProvider from "@/context/FormContext";
import HocTextFiled from "@/components/Form/HocTextFiled";
import {useState} from "react";
import styles from './SignUpForm.module.scss';
import HocCheckBox from "@/components/Form/HocCheckBox";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";


const SignUpForm = () => {
  const {push} = useRouter();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: '',
    terms: null
  });
  const submitForm = (data) => {
    Swal.fire({
      title: "Account Created",
      showCancelButton: false,
      confirmButtonText: "Done",
      buttonsStyling: true,

    }).then((result) => {
      if (result.isConfirmed) {
        // @todo post user data
        push('/profile')
      }
    });
  }
  return (
    <section className={styles.formWrapper}>
      <div className={styles.formStage}>
        <h2>Fiber</h2>
        <span>
        Create your Fiber account
      </span>
        <FormContextProvider submitText={"Create Fiber Account"} onSubmitHandler={submitForm} initialValues={state}>
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
          <HocTextFiled
            label={"Password"}
            name={"password"}
            placeholder="At least 8 characters"
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
