import { useEffect } from "react";
import M from 'materialize-css';

export const SelectBankField = ({ id ="", classname, label }) =>{
    useEffect(() => {
        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect, {
            constrainWidth: true
        });

        document.querySelector("select#banks").addEventListener('change', event => {
            
        })
    }, []);

    function changeBankOptionButtons() {
        document.querySelectorAll('.top-bank-lists').forEach(item => {
            item.style.display = "none";
        })
        document.querySelectorAll('.proceed-btn-wrapper').forEach(item => {
            item.style.display = "block";
        })
    }
    return(
        <div className="input-field select-field rel" >
            <select id="banks" className="select" name="banks" defaultValue={"default"} onChange={changeBankOptionButtons}>
                <option disabled value={"default"}>Choose your Bank</option>
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