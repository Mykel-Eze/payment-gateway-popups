/* eslint-disable no-useless-escape */
import { useState } from 'react'
import { Button, RightArrow, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import OtpInput from 'react-otp-input';
import ModalWrapper from "../utils/ModalWrapper";
import { PinCodes } from '../styled/PinCodes.styled';
import { Text } from '../styled/Utils.styled';

const EnterWalletPin = ({cardPin,setCardPin, error, amount, onSubmit}) => {
    

    return (
      
            <Form onSubmit={onSubmit}>
                <Text>
                    Enter 4 transaction PIN to authorize this payement
                </Text>
                <PinCodes>
                    <OtpInput
                        value={cardPin}
                        onChange={(val) => {
                            setCardPin(val)
                        }}
                        numInputs={4}
                        separator={<span> </span>}
                        hasErrored={error}
                        
                    />
                </PinCodes>
                <ButtonWrapper>
                    <Button type="submit">
                        Pay ₦{amount}
                        <RightArrow src={require("../../images/right-arr.svg").default} />
                    </Button>
                </ButtonWrapper>
            </Form>
      
    )
}

export default EnterWalletPin;