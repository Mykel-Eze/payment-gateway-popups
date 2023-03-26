import { ScreenID } from "../../constants";
import { Modal, CloseModal, ModalContent, ModalBody } from "../styled/Modal.styled";
import { ModalFooter, TransferType, TransferTypeWrapper } from "../styled/ModalFooter.styled";
import { ModalHeader, SecuredNotice, ModalTopDetails, BusinessLogo, TransactionDetials } from "../styled/ModalHeader.styled"
import { Container, Flex, WalletBalance } from "../styled/Utils.styled";
import TabButton from "../TabButton";

const ModalWrapper = ({ id="modal", children, screen, setScreen, wallet={}, transaction_details={}}) => {
    console.log("___1", transaction_details)
    const {balance} = wallet
    const {amount, email, first_name} = transaction_details
   
    return (
        <Modal id={id} className={`modal gateway-modal ${amount > balance ? 'low-funds' : ''}`}>
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
                                    {screen === 'wallet' ? <WalletBalance className={amount > balance ? 'low-funds' : ''}>Wallet Balance: {` ₦${balance}`}</WalletBalance> : null}
                                    <div className="tranxn-amount"><small>₦</small>{amount}</div>
                                    <div className="tranxn-user-email">{email}</div>
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
                            <TabButton 
                                label={"Wallet"} 
                                active={screen === ScreenID.WALLET} 
                                inActiveIcon={require("../../images/wallet.svg").default}
                                activeIcon={require("../../images/wallet-active.svg").default}
                                onClick={()=>{
                                    setScreen(ScreenID.WALLET)
                                }}
                                target="pay-with-wallet"
                             />
                             <TabButton 
                                label={"Transfer"} 
                                active={screen === ScreenID.TRANSFER} 
                                inActiveIcon={require("../../images/transfer.svg").default}
                                activeIcon={require("../../images/transfer-active.svg").default}
                                target="bank-transfer-details"
                                onClick={()=>{
                                    setScreen(ScreenID.TRANSFER)
                                }}
                             />
                             <TabButton 
                                label={"Bank"} 
                                active={screen === ScreenID.BANK} 
                                inActiveIcon={require("../../images/bank.svg").default}
                                activeIcon={require("../../images/bank-active.svg").default}
                                target="choose-bank"
                                onClick={()=>{
                                    setScreen(ScreenID.BANK)
                                }}
                             />

                              <TabButton 
                                label={"Card"} 
                                active={screen === ScreenID.CARD} 
                                inActiveIcon={require("../../images/card.svg").default}
                                activeIcon={require("../../images/card-active.svg").default}
                                target="enter-card-details"
                                onClick={()=>{
                                    setScreen(ScreenID.CARD)
                                }}
                             />

                              <TabButton 
                                label={"USSD"} 
                                active={screen === ScreenID.USSD} 
                                inActiveIcon={require("../../images/ussd.svg").default}
                                activeIcon={require("../../images/ussd-active.svg").default}
                                target="choose-bank-ussd"
                                onClick={()=>{
                                    setScreen(ScreenID.USSD)
                                }}
                             />
                            
                        </TransferTypeWrapper>
                    </Container>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}

export default ModalWrapper;