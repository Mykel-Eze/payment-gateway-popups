/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper, RightArrow } from "../styled/Button.styled";
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
import { useContext } from "react";
import { GatewayContext } from "../../store/provider";

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

const ChooseBankUssd = ({transaction_details}) => {
    const {amount} = transaction_details
    const {state, dispatch, setLocalData} = useContext(GatewayContext);
    const {payrail_local_db} = state

    const [screen, setScreen] = useState(ScreenID.WALLET);
    const [bank, setBank] = useState(payrail_local_db?.favorite_ussd_bank || 'Providus Bank')
    const [check, setCheck] = useState(false)

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
            <BankUssdDetails data={{bank}} amount={amount} chooseAnotherBank={chooseAnotherBank} onSubmit={completePayment} />
        )
    }

    if (screen == ScreenID.VERIFY) {
        return(
            <Verifying amount={amount} />
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

    const handleSubmit = () => {
       
        if (check) {
            setLocalData({favorite_ussd_bank: bank})
        }
        setScreen(ScreenID.BANKUSSD)
    }

    return (
      
            <Form>
                <SelectBankField 
                    items={bankList} 
                    onSelect={(e)=>{
                        setBank(e.target.value)
                    }}
                    value={bank}
                    defaultValue={bank}
                    parentModalClass="bank-modal"
                  />

                <CheckboxField 
                    checked={check}
                    onChange={(e)=>{
                        
                       setCheck(!check)
                    }}
                    CheckboxLabel={"Remember this option next time"}
                />

                {
                     payrail_local_db.favorite_ussd_bank || bank == payrail_local_db?.favorite_ussd_bank ?  <ButtonWrapper className="top-bank-lists spaced">
                    <Button type="button" className=" default-btn flex-div justify-content-btw" onClick={()=>{
                         setScreen(ScreenID.BANKUSSD)
                    }}>
                        <span className="bank-name">{payrail_local_db?.favorite_ussd_bank}</span>
                        <span className="bank-code">*919#</span>
                    </Button>
                </ButtonWrapper>: null
                }

                {
                    !payrail_local_db.favorite_ussd_bank || bank != payrail_local_db?.favorite_ussd_bank ? <ButtonWrapper className="proceed-btn-wrapper ">
                    <Button type="button" onClick={()=>handleSubmit()}>
                        Pay <b>₦{amount}</b>
                    </Button>
                </ButtonWrapper> : null
                    }
            </Form>
        
    )
}

export default ChooseBankUssd;