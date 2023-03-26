/* eslint-disable no-useless-escape */
import M from 'materialize-css'
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import ModalWrapper from "../utils/ModalWrapper";
import { Text } from "../styled/Utils.styled";

const BankUssdDetails = ({data, amount, chooseAnotherBank, onSubmit}) => {
    const CopyToClipboard = (selectedId) => {
        /* Get the text field */
        var copyText = document.getElementById(selectedId);
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        M.toast({html: 'USSD code copied'})
    }
    return (
     
            <Form>
                <Text>
                    <span>
                        Dial the code below to complete this transaction with GTBank's 737
                    </span>
                </Text>

                <ButtonWrapper>
                    <Button type="button" className="pointer default-btn" onClick={() => CopyToClipboard("ussd-number")}>
                        <b className="bold-txt">*737*33*4*953486#</b>
                        <span className="copy-notice">Click to Copy</span>
                        <input type="text" defaultValue="*737*33*4*953486#" id="ussd-number" hidden />
                    </Button>
                </ButtonWrapper>

                <ButtonWrapper>
                    <Button type="button" onClick={onSubmit}>
                        I have completed payment
                    </Button>
                </ButtonWrapper>

                <Text>
                    <div className="modal-trigger" onClick={chooseAnotherBank}>
                        <u>Choose another bank</u>
                    </div>
                </Text>
            </Form>
       
    )
}

export default BankUssdDetails;