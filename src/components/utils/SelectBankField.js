import { useEffect } from "react";
import M from 'materialize-css';

export const SelectBankField = ({defaultValue, parentModalClass, items = [], onSelect, value, error="hjgjk" }) =>{
    useEffect(() => {
        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);
    }, []);

    function changeBankOptionButtons(e) {
      
        // document.querySelectorAll(`.${parentModalClass} .top-bank-lists`).forEach(item => {
        //     item.style.display = "none";
        // })
        // document.querySelectorAll(`.${parentModalClass} .proceed-btn-wrapper`).forEach(item => {
        //     item.style.display = "block";
        // })
    }
    return(
        
         <div className="input-field select-field rel" >
         <small className={'error-text'}>{error}</small>
          <select className="select" name="banks" value={value} defaultValue={defaultValue} onChange={onSelect}>
              <option disabled value={"default"}>Choose your Bank</option>
              {
                   items.length? items.map((item)=>{
                    
                      const {label, value} = item
                      return(
                          <option value={value}>{label}</option>
                      )
                  }): null
              }
              
          </select>
          <img src={require("../../images/caret-down.svg").default} alt="caret" className="care-icon" />
         
      </div>
       
    )

}