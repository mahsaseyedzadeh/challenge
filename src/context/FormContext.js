import React, {useEffect, useState} from 'react';
import {isEmpty} from "lodash";
import validate from "../validation/validateFunction";
import styles from '../styles/Form.module.scss';

export const FormContext = React.createContext({});
export const FormContextProvider = ({children, initialValues, className = '', onSubmitHandler, submitText}) => {

  const initState = value => {
    return {
      data: {...value},
      validators: {},
      errors: {},
    };
  };
  const [formState, setFormState] = useState(initState(initialValues));

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      data: initialValues
    }))
  }, [initialValues])

  const registerInput = ({name, validators}) => {
    setFormState(state => {
      return {
        ...state,
        validators: {
          ...state.validators,
          [name]: validators || []
        },
        // clear any errors
        errors: {
          ...state.errors,
          [name]: []
        }
      };
    });
    // returning unregister method
    return () => {
      setFormState(state => {
        // copy state to avoid mutating it
        const {data, errors, validators: currentValidators} = {...state};
        // clear field data, validations and errors
        delete data[name];
        delete errors[name];
        delete currentValidators[name];

        return {
          data,
          errors,
          validators: currentValidators
        };
      });
    };
  };
  const setFieldValue = (name, value) => {
    setFormState(state => {
      return {
        ...state,
        data: {
          ...state.data,
          [name]: value
        },
        errors: {
          ...state.errors,
          [name]: []
        }
      };
    });
  };
  const validateData = () => {
    const {validators} = formState;
    // always reset form errors
    setFormState(state => ({
      ...state,
      errors: {}
    }));

    const formErrors = Object.entries(validators).reduce(
      (errors, [name, validators]) => {
        const {data} = formState;
        const messages = validators.reduce((result, validator) => {
          const value = data[name];
          let validateItem = validate(name, value);
          if (validateItem === null) {
            return []
          } else {
            return [validateItem];
          }

        }, []);
        if (messages.length > 0) {
          errors[name] = messages;
        }
        return errors;
      },
      {}
    );
    if (isEmpty(formErrors)) {
      return true;
    }
    setFormState(state => ({
      ...state,
      errors: formErrors
    }));
    return false;
  };

  const providerValue = {
    errors: formState.errors,
    data: formState.data,
    setFieldValue,
    registerInput,
  };
  const onSubmit = (e) => {
    e.preventDefault()
    if (validateData()) {
      onSubmitHandler(formState.data)
    }
  }

  return (
    <FormContext.Provider value={providerValue}>
      <form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
        {children}
        <div className={styles.formFooter}>
          {submitText &&
            <button type={"submit"}>
              {submitText}
            </button>
          }
        </div>
      </form>
    </FormContext.Provider>
  );
}

export default FormContextProvider;