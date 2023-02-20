import { CheckboxFieldLabel, Input, Label } from "../styled/Form.styled";

export const InputField = ({type, id ="", classname, label, placeholder, pattern, onChange, value, error }) =>{
    return(
        <div className={`${classname.div}`} id={id.div}>
            <Input value={value} onChange={onChange} id={id.input} type={type} className={`${classname.input}`} name={id.input} placeholder={placeholder} pattern={pattern}></Input>

            <Label htmlFor={id.input} className={`${classname.label}`}>{label}</Label>
            <small className={'error-text'}>{error}</small>
        </div>
    )

}


export const CheckboxField = ({id, value, onChange, CheckboxLabel}) =>{
    return(
        <CheckboxFieldLabel>
            <input type="checkbox" checked={value} onChange={onChange} className="filled-in" id={id} />
            <span>{CheckboxLabel}</span>
        </CheckboxFieldLabel>
    )

}