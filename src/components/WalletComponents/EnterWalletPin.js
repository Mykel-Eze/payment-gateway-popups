/* eslint-disable no-useless-escape */
import { useState } from 'react'
import { Button, RightArrow, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import OtpInput from 'react-otp-input';
import ModalWrapper from "../utils/ModalWrapper";
import { PinCodes } from '../styled/PinCodes.styled';
import { Text } from '../styled/Utils.styled';

const EnterWalletPin = () => {
    const [cardPin, setCardPin] = useState('')

    return (
        <ModalWrapper id="enter-wallet-pin" transferType="wallet" walletBalanceAmount="100000">
            <Form>
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
                    />
                </PinCodes>
                <ButtonWrapper>
                    <Button type="button" className="modal-close modal-trigger" data-target="transaction-completed">
                        Pay ₦5,000.09
                        <RightArrow src={require("../../images/right-arr.svg").default} />
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default EnterWalletPin;