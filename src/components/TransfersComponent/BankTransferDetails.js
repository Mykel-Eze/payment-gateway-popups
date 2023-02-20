/* eslint-disable no-useless-escape */
import M from 'materialize-css'
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import ModalWrapper from "../utils/ModalWrapper";
import { AccountInfo, CopyIcon, InfoBox, Text } from "../styled/Utils.styled";
import { useFormik } from 'formik'
import * as Yup from "yup";
import TransactionCompleted from '../TransactionCompleted';
import TransactionNotCompleted from '../TransactionNotCompleted';
import Verifying from '../Verifying';
import React, { useState } from 'react';

export const ScreenID = {
    TRANSFER: 'transfer',
    VERIFY: 'verify',
    TRANSACTION_COMPLETED: 'transaction_completed',
    TRANSACTION_NOT_COMPLETED: 'transaction_not_completed',
}

export const validationSchema = Yup.object().shape({
    pin: Yup.number().required("Pin is required"),
})

const BankTransferDetails = ({transaction_details}) => {
    const {amount} = transaction_details

    const [screen, setScreen] = useState(ScreenID.WALLET);

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
    const CopyToClipboard = (selectedId) => {
        /* Get the text field */
        var copyText = document.getElementById(selectedId);
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        M.toast({html: 'Account number copied'})
    }

    const VerifyTransfer = () => {
        setScreen(ScreenID.VERIFY)
        setTimeout(function(){
            setScreen(ScreenID.TRANSACTION_COMPLETED)
         }, 3000);
    }

    return (
       
            <Form>
                <Text className="left-align">
                    <span>
                        Transfer NGN {amount} to  
                    </span>
                </Text>

                <ButtonWrapper>
                    <InfoBox onClick={() => CopyToClipboard("account-number")}>
                        <div>
                            <div>Payrail CheckOut</div>

                            <AccountInfo>
                                <span className="title-label">Account Information</span>
                                <div>8349709760/Payrail Bank</div>
                                <input type="text" defaultValue="8349709760" id="account-number" hidden />
                            </AccountInfo>
                        </div>
                        <CopyIcon src={require("../../images/copy-icon.svg").default} alt="copy" />
                    </InfoBox>
                </ButtonWrapper>

                <ButtonWrapper>
                    <Button type="button" className="" 
                        onClick={()=>{
                            VerifyTransfer()
                        }}>
                        I have completed payment
                    </Button>
                </ButtonWrapper>
            </Form>
        
    )
}

export default BankTransferDetails;