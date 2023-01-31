import { useEffect } from "react";
import M from 'materialize-css';

export const SelectBankField = ({ id ="", classname, label }) =>{
    useEffect(() => {
        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect, {
            constrainWidth: true
        });
    }, []);
    return(
        <div className="input-field select-field rel" >
            <select id="banks" className="select" name="banks">
                <option disabled defaultValue>Choose your Bank</option>
                <option value="Guaranty Trust Bank">Guaranty Trust Bank</option>
                <option value="United Bank for Africa">United Bank for Africa</option>
                <option value="Union Bank">Union Bank</option>
                <option value="Wema Bank">Wema Bank</option>
                <option value="Providus Bank">Providus Bank</option>
            </select>
            <img src={require("../../images/caret-down.svg").default} alt="caret" className="care-icon" />
        </div>
    )

}