/* eslint-disable no-useless-escape */
import React, { useState } from 'react';

import { Button, RightArrow, ButtonWrapper } from "../styled/Button.styled";
import { Form, GridField } from "../styled/Form.styled";
import { CheckboxField, InputField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from "yup";
import TransactionCompleted from '../TransactionCompleted';
import TransactionNotCompleted from '../TransactionNotCompleted';
import Verifying from '../Verifying';
import BankUssdDetails from "../UssdComponents/BankUssdDetails";
import EnterCardPin from "./EnterCardPin";

export const ScreenID = {
    CARD: 'card',
    VERIFY: 'verify',
    CARD_PIN: 'card_pin',
    TRANSACTION_COMPLETED: 'transaction_completed',
    TRANSACTION_NOT_COMPLETED: 'transaction_not_completed',
}

 const pinValidationSchema = Yup.object().shape({
    pin: Yup.string().required("Pin is required"),
})

 const validationSchema = Yup.object().shape({
    card_number: Yup.string().required("Card number is required"),
    card_expiry_date:  Yup.string().required("Card expiry date is required"),
    cvv: Yup.string().required("Card cvv is required"),
    rememberMe: Yup.bool(),
})

const EnterCardDetails = ({transaction_details}) => {

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

    const {amount} = transaction_details

    const [screen, setScreen] = useState(ScreenID.CARD);

    const pinForm = useFormik({
		initialValues: {
			pin: ''
		},
		pinValidationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (data, { resetForm }) => {
            console.log("___FORM", data)
            setScreen(ScreenID.VERIFY)
            resetForm()
		},
	})

    const setCardPin = (value) =>{
        pinForm.setFieldValue('pin', value)
    }

    const formik = useFormik({
		initialValues: {
			card_number: '',
            card_expiry_date: '',
            cvv: '',
            rememberMe: false	
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: async (data, { resetForm })  => {
            console.log("___FORM", data)

            const {card_number,card_expiry_date,cvv, rememberMe,} = data
            const dateArr = card_expiry_date.split('/');
            const body = {
                card_number,
                security_code: cvv,
                expiry_month: dateArr[0],
                expiry_year: dateArr[1],
                trx_amount: amount,
                browser: window.navigator.userAgent,
                responseUrl:  'https://cu76xsumvh.execute-api.eu-central-1.amazonaws.com/default/EmvResponse',
            };

            console.log("___FORM BODY___", body);

            try {
                setScreen(ScreenID.VERIFY)
                let childWindow = window.open('', '_blank');
                
               const res = await axios.put('http://localhost:3000/dev/initiate/authentication',body,{
                 
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        'Access-Control-Allow-Origin': '*'
                      },
                });
              
                    const {authentication} = res.data
                    const {redirectHtml, redirect, version} = authentication

                    let authUrl = redirectHtml

                    if (!authUrl) {
                        authUrl = redirect.html
                    }
                   
                    let iframe = childWindow.document.createElement('iframe');
                    iframe.setAttribute('srcdoc', authUrl);
                    iframe.style.top = '0';
                    iframe.style.left = '0';
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    iframe.style.zIndex = '9999';
                    childWindow.document.body.appendChild(iframe);

                    window.addEventListener('load', function(event) {
                       console.log("___EVENT__2",event)
                        let message = {
                            type: '3DS_challenge_response',
                            data: 'response_data_here'
                          };
                        window.parent.postMessage(message, '*');
                      });

                      window.addEventListener('message', function(event) {
                        console.log("___EVENT__",event)
                        console.log("___ORIGIN__",event.origin)
                        console.log("___TYPE__",event.data.type)
                        console.log("___DATA__",event.data)
                        console.log("___DATA__2",event.data.data)

                        // if (event.origin !== childWindow.origin) return;
                        if (event.data.type === '3DS_challenge_response') {
                          let responseData = event.data.data;
                         
                          // Handle the response data here
                          console.log('____RESPONSE__2_', responseData);

                        }
                        
                      });

              
               
               
            } catch (error) {
                console.log('____ERROR___', error)
            }
            
            
            resetForm()
		},
	})

    const retry = () => {
        setScreen(ScreenID.WALLET)
    }

    const chooseAnotherBank = () => {
        setScreen(ScreenID.BANK)
    }

    const completePayment = () => {
        setScreen(ScreenID.VERIFY)
        setTimeout(function(){
            setScreen(ScreenID.TRANSACTION_COMPLETED)
         }, 3000);
    }

    if (screen == ScreenID.CARD_PIN) {
        return(
            <EnterCardPin amount={amount} cardPin={pinForm.values.pin} setCardPin={setCardPin} onSubmit={pinForm.handleSubmit} />
        )
    }

    if (screen == ScreenID.VERIFY) {
        return(
            <Verifying amount={amount} cardPin={formik.values.pin} setCardPin={setCardPin} onSubmit={formik.handleSubmit} />
        )
    }

    if (screen == ScreenID.TRANSACTION_COMPLETED) {
        return(
            <TransactionCompleted />
        )
    }

    if (screen == ScreenID.TRANSACTION_NOT_COMPLETED) {
        return(
            <TransactionNotCompleted retry={retry} />
        )
    }
    
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