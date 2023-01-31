/* eslint-disable no-useless-escape */
import { useEffect } from "react";
import { Button, ButtonWrapper, RightArrow } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import { CheckboxField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";
import { SelectBankField } from "../utils/SelectBankField";

const ChooseBankUssd = () => {
    useEffect(()=>{
        document.querySelector("select#banks").addEventListener('change', event => {
            document.querySelector("#top-bank-lists").style.display = "none"; 
            document.querySelector("#proceed-btn-wrapper").style.display = "block"; 
        })
    },[])

    return (
        <ModalWrapper id="choose-bank-ussd" transferType="ussd">
            <Form>
                <SelectBankField />

                <CheckboxField 
                    CheckboxLabel={"Remember this option next time"}
                />

                <ButtonWrapper className="top-bank-lists spaced">
                    <Button type="button" className="modal-close modal-trigger default-btn flex-div justify-content-btw" data-target="bank-ussd-details">
                        <span className="bank-name">Guaranty Trust Bank</span>
                        <span className="bank-code">*737#</span>
                    </Button>
                    <Button type="button" className="modal-close modal-trigger default-btn flex-div justify-content-btw" data-target="bank-ussd-details">
                        <span className="bank-name">United Bank for Africa</span>
                        <span className="bank-code">*919#</span>
                    </Button>
                </ButtonWrapper>

                <ButtonWrapper className="proceed-btn-wrapper hidden">
                    <Button type="button" className="modal-close modal-trigger" data-target="bank-ussd-details">
                        Proceed
                        <RightArrow src={require("../../images/right-arr.svg").default} />
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default ChooseBankUssd;