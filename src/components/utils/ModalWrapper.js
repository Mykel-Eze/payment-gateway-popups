import { Modal, CloseModal, ModalContent, ModalBody } from "../styled/Modal.styled";
import { ModalFooter, TransferType, TransferTypeWrapper } from "../styled/ModalFooter.styled";
import { ModalHeader, SecuredNotice, ModalTopDetails, BusinessLogo, TransactionDetials } from "../styled/ModalHeader.styled"
import { Container, Flex } from "../styled/Utils.styled";

const ModalWrapper = ({ id="", children, transferType}) => {
    return (
        <Modal id={id} className={"modal " + transferType+"-modal"}>
            <CloseModal src={require("../../images/close-popup.svg").default} alt="close modal" className="modal-close" />    

            <ModalBody>
                <ModalHeader>
                    <SecuredNotice>
                        <img src={require("../../images/lock.svg").default} alt="secured" />
                        <span>Secured by <b>Payrail</b></span>
                    </SecuredNotice>

                    <ModalTopDetails>
                        <Container>
                            <Flex>
                                <BusinessLogo src={require("../../images/default-avatar.png")} alt="business-logo" />
                                <TransactionDetials>
                                    <div className="tranxn-amount"><small>₦</small>35,000,000.09</div>
                                    <div className="tranxn-user-email">user@company.com</div>
                                </TransactionDetials>
                            </Flex>
                        </Container>
                    </ModalTopDetails>
                </ModalHeader>        
                
                <ModalContent>
                    <Container>
                        {children}
                    </Container>
                </ModalContent>

                <ModalFooter>
                    <Container>
                        <TransferTypeWrapper>
                            <TransferType className={`modal-trigger modal-close ${transferType === 'transfer' ? 'active' : ''}`} data-target="">
                                <div>
                                    <img src={require("../../images/transfer.svg").default} alt="transfer" className="default-img" />
                                    <img src={require("../../images/transfer-active.svg").default} alt="transfer" className="active-img" />
                                </div>
                                <div>Transfer</div>
                            </TransferType>
                            <TransferType className={`modal-trigger modal-close ${transferType === 'bank' ? 'active' : ''}`} data-target="choose-bank">
                                <div>
                                    <img src={require("../../images/bank.svg").default} alt="bank" className="default-img" />
                                    <img src={require("../../images/bank-active.svg").default} alt="bank" className="active-img" />
                                </div>
                                <div>Bank</div>
                            </TransferType>
                            <TransferType className={`modal-trigger modal-close ${transferType === 'card' ? 'active' : ''}`} data-target="enter-card-details">
                                <div>
                                    <img src={require("../../images/card.svg").default} alt="card" className="default-img" />
                                    <img src={require("../../images/card-active.svg").default} alt="card" className="active-img" />
                                </div>
                                <div>Card</div>
                            </TransferType>
                            <TransferType className={`modal-trigger modal-close ${transferType === 'ussd' ? 'active' : ''}`} data-target="choose-bank-ussd">
                                <div>
                                    <img src={require("../../images/ussd.svg").default} alt="ussd" className="default-img" />
                                    <img src={require("../../images/ussd-active.svg").default} alt="ussd" className="active-img" />
                                </div>
                                <div>USSD</div>
                            </TransferType>
                            {/* <TransferType className={`modal-trigger modal-close ${transferType === 'qr' ? 'active' : ''}`} data-target="">
                                <div>
                                    <img src={require("../../images/qr-code.svg").default} alt="qr-code" className="default-img" />
                                    <img src={require("../../images/qr-code-active.svg").default} alt="qr-code" className="active-img" />
                                </div>
                                <div>QR Code</div>
                            </TransferType> */}
                        </TransferTypeWrapper>
                    </Container>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default ModalWrapper;