import { Modal, CloseModal, ModalContent, ModalBody } from "../styled/Modal.styled";
import { ModalFooter, TransferType, TransferTypeWrapper } from "../styled/ModalFooter.styled";
import { ModalHeader, SecuredNotice, ModalTopDetails, BusinessLogo, TransactionDetials } from "../styled/ModalHeader.styled"
import { Container, Flex, WalletBalance } from "../styled/Utils.styled";

const ModalWrapper = ({ id="", children, transferType, walletBalanceAmount=""}) => {
    const TransactionAmount = 100000;
    return (
        <Modal id={id} className={`modal ${transferType}-modal ${TransactionAmount > walletBalanceAmount ? 'low-funds' : ''}`}>
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
                                    {transferType === 'wallet' ? <WalletBalance className={TransactionAmount > walletBalanceAmount ? 'low-funds' : ''}>Wallet Balance: ₦500,000.69</WalletBalance> : null}
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
                            <TransferType className={`modal-trigger modal-close ${transferType === 'wallet' ? 'active' : ''}`} data-target="pay-with-wallet">
                                <div>
                                    <img src={require("../../images/wallet.svg").default} alt="wallet" className="default-img" />
                                    <img src={require("../../images/wallet-active.svg").default} alt="wallet" className="active-img" />
                                </div>
                                <div>Wallet</div>
                            </TransferType>
                            <TransferType className={`modal-trigger modal-close ${transferType === 'transfer' ? 'active' : ''}`} data-target="bank-transfer-details">
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
                        </TransferTypeWrapper>
                    </Container>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default ModalWrapper;