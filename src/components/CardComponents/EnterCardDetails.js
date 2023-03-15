/* eslint-disable no-useless-escape */
import React, { useState } from 'react';

import { Button, RightArrow, ButtonWrapper } from "../styled/Button.styled";
import { Form, GridField } from "../styled/Form.styled";
import { CheckboxField, InputField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";

const EnterCardDetails = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event) => {
        let input = event.target.value.replace(/\s/g, '');
        let formattedInput = '';
        for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0 && i > 0) {
            formattedInput += ' ';
        }
        formattedInput += input[i];
        }
        setCardNumber(formattedInput);
    };

    const handleExpiryChange = (event) => {
        let input = event.target.value.replace(/[/\s]/g, '');
        let formattedInput = '';
        for (let i = 0; i < input.length; i++) {
        if (i === 2) {
            formattedInput += '/';
        }
        formattedInput += input[i];
        }
        setExpiry(formattedInput);
    };

    const handleCvvChange = (event) => {
        let input = event.target.value.replace(/\s/g, '');
        setCvv(input);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform validation and submit form
        console.log('Submitted');
    };

    const isFormValid = () => {
        // Check if form inputs are valid
        return (
            cardNumber.replace(/\s/g, '').length === 16 &&
            expiry.length === 5 &&
            cvv.length === 3
        );
    };
    
    return (
        <ModalWrapper id="enter-card-details" transferType="card">
            <Form onSubmit={handleSubmit}>
                <InputField 
                    type={"tel"}
                    maxLength="19"
                    pattern="\d*"
                    autoComplete="off"
                    id={{input: "card-number"}} 
                    classname={{div: "input-field", input: "inp-field", label: "active"}}
                    placeholder={"0000 0000 0000 0000"}
                    label={"Card Number"}
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required
                />

                <GridField>
                    <InputField
                        type={"text"}
                        id={{input: "card-expiry-date"}} 
                        classname={{div: "input-field", input: "inp-field", label: "active"}}
                        placeholder={"MM/YY"}
                        label={"Valid Till"}
                        value={expiry}
                        onChange={handleExpiryChange}
                        maxLength="5"
                        pattern="\d\d/\d\d"
                        autoComplete="off"
                        required
                    />
                    <InputField
                        type={"tel"}
                        id={{input: "cvv"}} 
                        classname={{div: "input-field", input: "inp-field", label: "active"}}
                        placeholder={"123"}
                        label={"CVV"}
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength="3"
                        pattern="\d*"
                        autoComplete="off"
                        required
                    />
                </GridField>

                <CheckboxField 
                    CheckboxLabel={"Remember this card next time"}
                />

                <ButtonWrapper>
                    <Button type="submit" disabled={!isFormValid()} className="modal-close modal-trigger" data-target="enter-card-pin">
                        Pay ₦35,000,000.09
                        <RightArrow src={require("../../images/right-arr.svg").default} />
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default EnterCardDetails;