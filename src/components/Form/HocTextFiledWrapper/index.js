import {useContext, useEffect} from "react";
import { FormContext } from "../../../context/FormContext";
import validate from "../../../validation/validateFunction";

const HocTextFieldWrapper = InputComponent => {

    const WrappedWithForm = props => {
        const {errors , data , setFieldValue ,registerInput } = useContext(FormContext);

        useEffect( () => {
            if(props.required){
                registerInput({
                    name: props.name,
                    validators: [validate(props.name, data[props.name]) || []]
                })
            }
            },
            [props.required]
        );

        const onChange = e => {
            setFieldValue(e.target.name , e.target.value)
        };
        const inputValue = data[props.name] ;
        const inputErrors = errors[props.name] || [];

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

export default HocTextFieldWrapper;