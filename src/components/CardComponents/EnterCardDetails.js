/* eslint-disable no-useless-escape */
import { Button, RightArrow, ButtonWrapper } from "../styled/Button.styled";
import { Form, GridField } from "../styled/Form.styled";
import { CheckboxField, InputField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";

const EnterCardDetails = () => {
    return (
        <ModalWrapper id="enter-card-details" transferType="card">
            <Form>
                <InputField 
                    type={"tel"}
                    pattern={`(\d{4}\s?){4}`}
                    id={{input: "card-number"}} 
                    classname={{div: "input-field", input: "inp-field", label: "active"}}
                    placeholder={"0000 0000 0000 0000"}
                    label={"Card Number"}
                />

                <GridField>
                    <InputField
                        type={"text"}
                        id={{input: "card-expiry-date"}} 
                        classname={{div: "input-field", input: "inp-field", label: "active"}}
                        placeholder={"MM/YY"}
                        label={"Valid Till"}
                    />
                    <InputField
                        type={"tel"}
                        id={{input: "cvv"}} 
                        classname={{div: "input-field", input: "inp-field", label: "active"}}
                        placeholder={"123"}
                        label={"CVV"}
                    />
                </GridField>

                <CheckboxField 
                    CheckboxLabel={"Remember this card next time"}
                />

                <ButtonWrapper>
                    <Button type="button" className="modal-close modal-trigger" data-target="enter-card-pin">
                        Pay ₦35,000,000.09
                        <RightArrow src={require("../../images/right-arr.svg").default} />
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default EnterCardDetails;