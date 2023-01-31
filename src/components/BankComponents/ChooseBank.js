/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import { CheckboxField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";
import { SelectBankField } from "../utils/SelectBankField";

const ChooseBank = () => {
    return (
        <ModalWrapper id="choose-bank" transferType="bank">
            <Form>
                <SelectBankField parentModalClass="bank-modal" />

                <CheckboxField 
                    CheckboxLabel={"Remember this option next time"}
                />

                <ButtonWrapper className="top-bank-lists spaced">
                    <Button type="button" className="modal-close modal-trigger default-btn flex-div justify-content-btw" data-target="verifying">
                        <span className="bank-name">United Bank for Africa</span>
                        <span className="bank-code">*919#</span>
                    </Button>
                </ButtonWrapper>

                <ButtonWrapper className="proceed-btn-wrapper hidden">
                    <Button type="button" className="modal-close modal-trigger" data-target="verifying">
                        Pay <b>₦35,000,000.09</b>
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default ChooseBank;