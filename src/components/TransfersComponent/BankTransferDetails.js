/* eslint-disable no-useless-escape */
import M from 'materialize-css'
import { Button, ButtonWrapper } from "../styled/Button.styled";
import { Form } from "../styled/Form.styled";
import ModalWrapper from "../utils/ModalWrapper";
import { AccountInfo, CopyIcon, InfoBox, Text } from "../styled/Utils.styled";

const BankTransferDetails = () => {
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
    return (
        <ModalWrapper id="bank-transfer-details" transferType="transfer">
            <Form>
                <Text className="left-align">
                    <span>
                        Transfer NGN 35,000,000.09 to  
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
                    <Button type="button" className="modal-close modal-trigger" data-target="verifying">
                        I have completed payment
                    </Button>
                </ButtonWrapper>
            </Form>
        </ModalWrapper>
    )
}

export default BankTransferDetails;