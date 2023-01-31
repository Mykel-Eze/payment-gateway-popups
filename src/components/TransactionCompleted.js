/* eslint-disable no-useless-escape */
import { Button, ButtonWrapper } from "./styled/Button.styled";
import { Form } from "./styled/Form.styled";
import ModalWrapper from "./utils/ModalWrapper";
import { Text } from './styled/Utils.styled';

const TransactionCompleted = () => {
    return (
        <ModalWrapper id="transaction-completed" transferType="">
            <Form>
                <div className="center">
                    <img src={require("../images/completed.svg").default} alt="completed" className="completed-img" />
                </div>
                <Text>
                    <div className="title">Transaction completed</div>
                    <span>
                        Proceed to marchant page by clicking the button below
                    </span>
                </Text>
                <ButtonWrapper>
                    <Button type="button" className="modal-close default-btn">
                        Back to Marchant page 
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default TransactionCompleted;