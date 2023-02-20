/* eslint-disable no-useless-escape */
import { Button, RightArrow, ButtonWrapper } from "../styled/Button.styled";
import { Form, GridField } from "../styled/Form.styled";
import { CheckboxField, InputField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";

import { useFormik } from 'formik'
import * as Yup from "yup";
import TransactionCompleted from '../TransactionCompleted';
import TransactionNotCompleted from '../TransactionNotCompleted';
import Verifying from '../Verifying';
import React, { useState } from 'react';
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

const bankList = [
    {label: 'Guaranty Trust Bank', value: 'Guaranty Trust Bank', code: '737'},
    {label: 'United Bank for Africa', value: 'United Bank for Africa', code: '770'},
    {label: 'Union Bank', value: 'Union Bank', code: '678'},
    {label: 'Wema Bank', value: 'Wema Bank', code: '945'},
    {label: 'Providus Bank', value: 'Providus Bank', code: '483'},
]

const EnterCardDetails = ({transaction_details}) => {
  
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
		onSubmit: (data, { resetForm }) => {
            console.log("___FORM", data)
            setScreen(ScreenID.CARD_PIN)
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
      
            <Form onSubmit={formik.handleSubmit}>

                <InputField 
                    type={"text"}
                    // pattern={`(\d{4}\s?){4}`}
                    id={{input: "card_number"}} 
                    error={formik.errors.card_number}
                    classname={{div: "input-field", input: "inp-field", label: "active", }}
                    placeholder={"0000 0000 0000 0000"}
                    label={"Card Number"}
                    value={formik.values.card_number}
                    onChange={(e)=>formik.setFieldValue('card_number', e.target.value)}
                />

                <GridField>
                    <InputField
                        type={"text"}
                        id={{input: "card_expiry_date"}} 
                        classname={{div: "input-field", input: "inp-field", label: "active"}}
                        placeholder={"MM/YY"}
                        label={"Valid Till"}
                        value={formik.values.card_expiry_date}
                        error={formik.errors.card_expiry_date}
                        onChange={(e)=>formik.setFieldValue('card_expiry_date', e.target.value)}
                    />
                    <InputField
                        type={"tel"}
                        id={{input: "cvv"}} 
                        classname={{div: "input-field", input: "inp-field", label: "active"}}
                        placeholder={"123"}
                        label={"CVV"}
                        value={formik.values.cvv}
                        error={formik.errors.cvv}
                        onChange={(e)=>formik.setFieldValue('cvv', e.target.value)}
                    />
                </GridField>

                <CheckboxField 
                    checked={formik.values.rememberMe}
                    onChange={(e)=>formik.setFieldValue('rememberMe', e.target.checked)}
                    CheckboxLabel={"Remember this card next time"}
                />

                <ButtonWrapper>
                    <Button type="submit">
                        Pay ₦{amount}
                        <RightArrow src={require("../../images/right-arr.svg").default} />
                    </Button>
                </ButtonWrapper>
            </Form>
       
    )
}

export default EnterCardDetails;