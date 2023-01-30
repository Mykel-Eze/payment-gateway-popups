/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "./styled/Button.styled";
import { Form } from "./styled/Form.styled";
import ModalWrapper from "./utils/ModalWrapper";
import { Text } from './styled/Utils.styled';

const TransactionNotCompleted = () => {
    return (
        <ModalWrapper id="transaction-not-completed" transferType="card">
            <Form>
                <div className="center">
                    <img src={require("../images/caution.svg").default} alt="caution" className="caution-img" />
                </div>
                <Text>
                    <span>Your transaction was not completed</span>
                </Text>
                <ButtonWrapper className="spaced">
                    <Button type="button" className="modal-close default-btn hidden">
                        Try pay with Card
                    </Button>
                    <Button type="button" className="modal-close default-btn">
                        Try pay with USSD
                    </Button>
                    <Button type="button" className="modal-close default-btn">
                        Try pay with Bank
                    </Button>
                    <Text>
                        <div className="modal-close modal-trigger" data-target="enter-card-details">&#8635; Try again</div>
                    </Text>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default TransactionNotCompleted;