import { CheckboxFieldLabel, Input, Label } from "../styled/Form.styled";

export const InputField = ({type, id ="", classname, label, placeholder, pattern, ...otherprop}) =>{
    return(
        <div className={`${classname.div}`} id={id.div}>
            <Input id={id.input} type={type} className={`${classname.input}`} name={id.input} placeholder={placeholder} pattern={pattern} {...otherprop}></Input>
            <Label htmlFor={id.input} className={`${classname.label}`}>{label}</Label>
        </div>
    )

}


export const CheckboxField = ({id, CheckboxLabel}) =>{
    return(
        <CheckboxFieldLabel>
            <input type="checkbox" className="filled-in" id={id} />
            <span>{CheckboxLabel}</span>
        </CheckboxFieldLabel>
    )

}