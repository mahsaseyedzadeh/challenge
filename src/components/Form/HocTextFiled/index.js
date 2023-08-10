import HocTextFieldWrapper from "../HocTextFiledWrapper";
import styles from './HocTextFiled.module.scss'
import RenderErrors from "../RenderErrors";


const HocTextFiled = (props) => {

    return (
        <div className={`${styles.wrapper} ${props.classes? props.classes : ""}`}  >
            {props.label? <label className={props.required ? styles.requiredBadge : ''}>{props.label}</label>:null}
            <input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
            {props.required ? <RenderErrors name={props.name} errors={props.errors}/>: null }
        </div>
    );
};
export default  HocTextFieldWrapper(HocTextFiled)

