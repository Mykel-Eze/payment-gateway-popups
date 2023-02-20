/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import { CheckboxField } from "../utils/InputField";
import ModalWrapper from "../utils/ModalWrapper";
import { SelectBankField } from "../utils/SelectBankField";
import { useFormik } from 'formik'
import * as Yup from "yup";
import TransactionCompleted from '../TransactionCompleted';
import TransactionNotCompleted from '../TransactionNotCompleted';
import Verifying from '../Verifying';
import React, { useState } from 'react';
import BankUssdDetails from "../UssdComponents/BankUssdDetails";

export const ScreenID = {
    BANK: 'bank',
    VERIFY: 'verify',
    BANKUSSD: 'bank_ussd',
    TRANSACTION_COMPLETED: 'transaction_completed',
    TRANSACTION_NOT_COMPLETED: 'transaction_not_completed',
}

export const validationSchema = Yup.object().shape({
    bank: Yup.string().required("Pin is required"),
    rememberMe:  Yup.bool(),
})

const bankList = [
    {label: 'Guaranty Trust Bank', value: 'Guaranty Trust Bank', code: '737'},
    {label: 'United Bank for Africa', value: 'United Bank for Africa', code: '770'},
    {label: 'Union Bank', value: 'Union Bank', code: '678'},
    {label: 'Wema Bank', value: 'Wema Bank', code: '945'},
    {label: 'Providus Bank', value: 'Providus Bank', code: '483'},
]

const ChooseBank = ({transaction_details}) => {
    const {amount} = transaction_details

    const [screen, setScreen] = useState(ScreenID.WALLET);

    const setCardPin = (value) =>{
        formik.setFieldValue('bank', value)
    }

    const formik = useFormik({
		initialValues: {
			bank: 'Providus Bank',
            rememberMe: false	
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (data, { resetForm }) => {
            console.log("___FORM", data)
            setScreen(ScreenID.BANKUSSD)
            resetForm()
		},
	})

    const formikSubmitPayment = useFormik({
		initialValues: {
			bank: 'Providus Bank',
            rememberMe: false	
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (data, { resetForm }) => {
            console.log("___FORM", data)
            setScreen(ScreenID.BANKUSSD)
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

    if (screen == ScreenID.BANKUSSD) {
        return(
            <BankUssdDetails data={formik.values} amount={amount} chooseAnotherBank={chooseAnotherBank} onSubmit={completePayment} />
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

                <SelectBankField 
                    items={bankList} 
                    onSelect={(e)=>{
                        formik.setFieldValue('bank', e.target.value)
                    }}
                    value={formik.values.bank}
                    defaultValue={formik.values.bank}
                    parentModalClass="bank-modal"
                  />

                <CheckboxField 
                    checked={formik.values.rememberMe}
                    onChange={(e)=>{
                        
                        formik.setFieldValue('rememberMe', e.target.checked)
                    }}
                    CheckboxLabel={"Remember this option next time"}
                />

                <ButtonWrapper className="top-bank-lists spaced">
                    <Button type="submit" className=" default-btn flex-div justify-content-btw">
                        <span className="bank-name">{formik.values.bank}</span>
                        <span className="bank-code">*919#</span>
                    </Button>
                </ButtonWrapper>

                {/* <ButtonWrapper className="proceed-btn-wrapper hidden">
                    <Button type="button" className="modal-close modal-trigger" data-target="verifying">
                        Pay <b>₦35,000,000.09</b>
                    </Button>
                </ButtonWrapper> */}
            </Form>
        
    )
}

export default ChooseBank;