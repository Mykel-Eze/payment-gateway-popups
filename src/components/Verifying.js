/* eslint-disable no-useless-escape */
import { Form } from "./styled/Form.styled";
import ModalWrapper from "./utils/ModalWrapper";
import { Loader, LoaderWrapper, Text } from './styled/Utils.styled';

const Verifying = () => {

    return (
        <ModalWrapper id="verifying" transferType="">
            <Form>
                <LoaderWrapper className='modal-trigger modal-close' data-target="transaction-completed">
                    <div className="center">
                        <Loader src={require("../images/loading.svg").default} alt="loading" />
                    </div>
                    <Text>
                        Verifying your transaction 
                    </Text>
                </LoaderWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default Verifying;