import './css/styles.css'
import './css/fonts.css'
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from 'react';
import M from 'materialize-css';

import EnterCardDetails from './components/CardComponents/EnterCardDetails';

import ChooseBankUssd from './components/UssdComponents/ChooseBankUssd';
import ChooseBank from './components/BankComponents/ChooseBank';
import BankTransferDetails from './components/TransfersComponent/BankTransferDetails';
import PayWithWallet from './components/WalletComponents/PayWithWallet';
import ModalWrapper from './components/utils/ModalWrapper';
import { ScreenID } from './constants';
import { GatewayContext } from './store/provider';
import { setScreen } from './store/action';

function App(prop) {
 
  const { state, dispatch } = useContext(GatewayContext);
  const {transaction_details = {}, wallet={}, screen} = state
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0); 

  useEffect(()=> {
    var elemsModal = document.querySelectorAll('.modal');
      M.Modal.init(elemsModal); 
      
    }, []);

    /**
     * Function to load data from local storage
     */
    const loadLocalData = () => {
      try {
        const db = localStorage.getItem('payrail_local_db');
        dispatch({type: 'payrail_local_db', payload: JSON.parse(db)})
      } catch (error) {
        console.log("___ERROR__", error)
      }
     
    }

    /**
     * The initial state of the application is set.
     */

    useEffect(()=> {
      dispatch({type: 'reset', payload: {wallet: prop.wallet, transaction_details: prop.transaction_details}})
      loadLocalData()
      }, [prop.transaction_details]);

      const Pay = () =>{
        dispatch({type: 'reset', payload: {wallet: prop.wallet, transaction_details: {...prop.transaction_details, email, amount}}})
        const payBtnModal = document.querySelector('#gateway-modal');
        M.Modal.getInstance(payBtnModal).open();
      }

      /**
       * Function to handle screen navigation
       * @param {*} screen 
       */

      const changeScreen = (screen) => {
      dispatch(setScreen(screen))
      }

    /**
     * The getScreen method serve as the application routing system
     * @param {*} transaction_details 
     * @returns Component
     */
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
            <div>
              <label>Amount</label>
            <input  value={amount} onChange={(e)=>{
                    setAmount(e.target.value)
            }} />
             <label>Email</label>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} />
            </div>
           
            <div className="popup-trigger-block modal-trigger" onClick={()=>Pay()}>
              <h4 className="bold-txt">Pay Now</h4>
            </div>

            <button onClick={()=>{
console.log('__', )
              let childWindow = window.open('', '_blank');
              let iframe = childWindow.document.createElement('iframe');
              iframe.setAttribute('srcdoc', "<div id=\"threedsChallengeRedirect\" xmlns=\"http://www.w3.org/1999/html\"style=\" height: 100vh\"> <form id =\"threedsChallengeRedirectForm\" method=\"POST\" action=\"https://authentication.cardinalcommerce.com/ThreeDSecure/V2_1_0/CReq\" target=\"challengeFrame\"> <input type=\"hidden\" name=\"creq\" value=\"eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjAzMjM5Y2JhLTJjM2YtNDAzZC1hZjExLTYxODg2YWJkZTIyMyIsImFjc1RyYW5zSUQiOiI0ZGYxYmM3My03YTdhLTRhNzQtODA2NS1mODI5YmJhNzM3ZGYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDUiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0\" /> </form> <iframe id=\"challengeFrame\" name=\"challengeFrame\" width=\"100%\" height=\"100%\" ></iframe> <script id=\"authenticate-payer-script\"> var e=document.getElementById(\"threedsChallengeRedirectForm\"); if (e) { e.submit(); if (e.parentNode !== null) { e.parentNode.removeChild(e); } } </script> </div>");
              childWindow.document.body.appendChild(iframe);

              window.addEventListener('load', function() {
                let message = {
                  type: '3DS_challenge_response',
                  data: 'response_data_here'
                };
                window.parent.postMessage(message, '*');
              });

              window.addEventListener('message', function(event) {
                if (event.origin !== childWindow.origin) return;
                if (event.data.type === '3DS_challenge_response') {
                  let responseData = event.data.data;
                  // Handle the response data here
                }
              });
              
            }}>test iframe</button>

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
