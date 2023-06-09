import './css/styles.css'
import './css/fonts.css'
import 'materialize-css/dist/css/materialize.min.css';

import { useEffect } from 'react';
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

function App() {

  useEffect(()=> {
    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);
  }, []);

  return (
    <div className="App">
      <div className="container rel view-height">
        <div className="main-boxes-wrapper">
          <h1 className='mbw-title'>Payment Gateway Popups</h1>
          <div className="popup-trigger-grid">
            <div></div>
            <div></div>
            <div className="popup-trigger-block modal-trigger" data-target="pay-with-wallet">
              <h4 className="bold-txt">Pay Now</h4>
            </div>
            {/* <div className="popup-trigger-block modal-trigger" data-target="bank-transfer-details">
              <h4 className="bold-txt">Transfer</h4>
            </div>
            <div className="popup-trigger-block modal-trigger" data-target="choose-bank">
              <h4 className="bold-txt">Bank</h4>
            </div>
            <div className="popup-trigger-block modal-trigger" data-target="enter-card-details">
              <h4 className="bold-txt">Card</h4>
            </div>
            <div className="popup-trigger-block modal-trigger" data-target="choose-bank-ussd">
              <h4 className="bold-txt">USSD</h4>
            </div> */}
          </div>
        </div>
      </div>

      <TransactionCompleted />
      <TransactionNotCompleted />
      <Verifying />

      <EnterCardDetails />
      <EnterCardPin />

      <ChooseBankUssd />
      <BankUssdDetails />

      <ChooseBank />

      <BankTransferDetails />

      <PayWithWallet />
      <EnterWalletPin />
    </div>
  );
}

export default App;
