import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GatewayProvider from './store/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
 const initialState = {
 
  transaction_details: {
      email: "atundearisekola@gmail.com",
      first_name: "Toyeeb",
      last_name: "Atunde",
      amount: 100000,

  },
  wallet:{
      balance: 500000
  },
};
root.render(
  <React.StrictMode>
    <GatewayProvider>
      <App transaction_details={initialState.transaction_details} wallet={initialState.wallet} />
    </GatewayProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
