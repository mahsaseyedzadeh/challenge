import {useContext, useEffect} from "react";
import {FormContext} from "../../../context/FormContext";
import validate from "../../../validation/validateFunction";


const HocCheckBoxWrapper = InputComponent => {
  const WrappedWithForm = props => {

    const {errors, data, setFieldValue, registerInput} = useContext(FormContext);

    useEffect(() => {
      if (props.required) {
        registerInput({
          name: props.name,
          validators: [validate(props.name,) || []]
        });
      }

    }, [props.required]);

    const inputValue = data[props.name];
    const inputErrors = errors[props.name] || [];


    const onChange = event => {
      console.log(event)
      setFieldValue(props.name, event.target.value)
    };

    return (
      <InputComponent
        {...props}
        errors={inputErrors}
        value={inputValue}
        onChange={onChange}
      />
    );
  };

  return WrappedWithForm;
};

export default HocCheckBoxWrapper;