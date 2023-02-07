/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import ModalWrapper from "../utils/ModalWrapper";
import { Text } from '../styled/Utils.styled';

const PayWithWallet = () => {
    return (
        <ModalWrapper id="pay-with-wallet" transferType="wallet" walletBalanceAmount="100000">
            <Form>
                <Text>
                    Olamide, we notice you exist within our ecosystem. Click 
                    “<span className="gray-txt">Pay with Payrail Wallet</span>” for fast check out.
                    <span className="low-funds-notice" hidden>Your wallet balance is low select other options</span>
                </Text>
                <ButtonWrapper className="spaced">
                    <Button type="button" className="modal-close modal-trigger wallet-pay-btn" data-target="enter-wallet-pin">
                        Pay with Payrail Wallet
                    </Button>
                    <Button type="button" className="modal-close default-btn">
                        Cancel
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default PayWithWallet;