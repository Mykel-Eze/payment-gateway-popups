import './css/styles.css'
import './css/fonts.css'
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from "prop-types";
import React, { useContext, useEffect } from 'react';
import M from 'materialize-css';

import EnterCardDetails from './components/CardComponents/EnterCardDetails';
import EnterCardPin from './components/CardComponents/EnterCardPin';
import TransactionCompleted from './components/TransactionCompleted';
import TransactionNotCompleted from './components/TransactionNotCompleted';

import ChooseBankUssd from './components/UssdComponents/ChooseBankUssd';
import BankUssdDetails from './components/UssdComponents/BankUssdDetails';
import Verifying from './components/Verifying';
import ChooseBank from './components/BankComponents/ChooseBank';
import BankTransferDetails from './components/TransfersComponent/BankTransferDetails';
import PayWithWallet from './components/WalletComponents/PayWithWallet';
import EnterWalletPin from './components/WalletComponents/EnterWalletPin';
import ModalWrapper from './components/utils/ModalWrapper';
import { ScreenID } from './constants';
import { GatewayContext } from './store/provider';
import { setScreen } from './store/action';

function App(prop) {
 
  const { state, dispatch } = useContext(GatewayContext);
  
  const {transaction_details = {}, wallet={}, screen} = state

  useEffect(()=> {
    var elemsModal = document.querySelectorAll('.modal');
      M.Modal.init(elemsModal); 
    }, []);

    useEffect(()=> {
      dispatch({type: 'reset', payload: {wallet: prop.wallet, transaction_details: prop.transaction_details}})
      }, [prop.transaction_details]);

    const changeScreen = (screen) => {
     dispatch(setScreen(screen))
    }

    const getScreen = (transaction_details) => {

    return {

      [ScreenID.WALLET]:  <PayWithWallet transaction_details={transaction_details} />,
      [ScreenID.TRANSFER]: <BankTransferDetails transaction_details={transaction_details} />,
      [ScreenID.BANK]:  <ChooseBank transaction_details={transaction_details} />,
      [ScreenID.CARD]:  <EnterCardDetails transaction_details={transaction_details} />,
      [ScreenID.USSD]: <ChooseBankUssd transaction_details={transaction_details} /> ,
  
    }

  }

  return (
    <div className="App">
      <div className="container rel view-height">
        <div className="main-boxes-wrapper">
          <h1 className='mbw-title'>Payment Gateway Popups</h1>
          <div className="popup-trigger-grid">
            <div></div>
            <div></div>
            <div className="popup-trigger-block modal-trigger" data-target="gateway-modal">
              <h4 className="bold-txt">Pay Now</h4>
            </div>

          </div>
        </div>
      </div>

      <ModalWrapper id="gateway-modal"
       screen={screen} setScreen={changeScreen} 
       transaction_details={transaction_details}
       wallet={wallet}
       >

        {getScreen(transaction_details)[screen]}

      </ModalWrapper>

    </div>
  );
}

App.defaultProps = {
  transaction_details: {},
  wallet: {},
 
}

App.propTypes = {
  transaction_details: PropTypes.object,
  wallet: PropTypes.object,
}

export default App;
