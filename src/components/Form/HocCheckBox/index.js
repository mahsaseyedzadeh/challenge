import styles from './HocCheckBox.module.scss';
import RenderErrors from "../RenderErrors";
import HocCheckBoxWrapper from "@/components/Form/HocCheckBoxWrapper";


const HocCheckBox = (props) => {
  return (
    <div className={`${styles.wrapper} ${props.classes ? props.classes : ""}`}>
      <input
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        label={props.label}
        type={"checkbox"}
      />
      {props.label && <label>{props.label}</label>}
      {props.required ? <RenderErrors name={props.name} errors={props.errors}/> : null}
    </div>
  );
};
export default HocCheckBoxWrapper(HocCheckBox)

