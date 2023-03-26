import React, { useState } from "react";
/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import ModalWrapper from "../utils/ModalWrapper";
import { Text } from '../styled/Utils.styled';
import EnterWalletPin from "./EnterWalletPin";
import TransactionCompleted from "../TransactionCompleted";
import TransactionNotCompleted from "../TransactionNotCompleted";
import { useFormik } from 'formik'
import * as Yup from "yup";

export const ScreenID = {
    WALLET: 'wallet',
    WALLET_PIN: 'wallet_pin',
    TRANSACTION_COMPLETED: 'transaction_completed',
    TRANSACTION_NOT_COMPLETED: 'transaction_not_completed',
}

export const validationSchema = Yup.object().shape({
    pin: Yup.number().required("Pin is required"),
})

const PayWithWallet = ({transaction_details}) => {
    const [screen, setScreen] = useState(ScreenID.WALLET);
    
    const {first_name, amount} = transaction_details

    const setCardPin = (value) =>{
        formik.setFieldValue('pin', value)
    }

    const formik = useFormik({
		initialValues: {
			pin: '',	
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (data, { resetForm }) => {
            console.log("___FORM", data)
            setScreen(ScreenID.TRANSACTION_NOT_COMPLETED)
            resetForm()
		},
	})

    const retry = () => {
        setScreen(ScreenID.WALLET)
    }

    if (screen == ScreenID.WALLET_PIN) {
        return(
            <EnterWalletPin amount={amount} cardPin={formik.values.pin} setCardPin={setCardPin} onSubmit={formik.handleSubmit} />
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
      
            <Form>
                <Text>
                    {first_name}, we notice you exist within our ecosystem. Click 
                    “<span className="gray-txt">Pay with Payrail Wallet</span>” for fast check out.
                    <span className="low-funds-notice" hidden>Your wallet balance is low select other options</span>
                </Text>
                <ButtonWrapper className="spaced">
                    <Button type="button" className=" wallet-pay-btn" 
                    onClick={()=>{
                        setScreen(ScreenID.WALLET_PIN)
                    }}>
                        Pay with Payrail Wallet
                    </Button>
                    <Button type="button" className="modal-close default-btn">
                        Cancel
                    </Button>
                </ButtonWrapper>
            </Form>
       
    )
}



export default PayWithWallet;