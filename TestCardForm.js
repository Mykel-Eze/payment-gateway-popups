import React, { useState } from 'react';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event) => {
    let input = event.target.value.replace(/\s/g, '');
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedInput += ' ';
      }
      formattedInput += input[i];
    }
    setCardNumber(formattedInput);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryChange = (event) => {
    let input = event.target.value.replace(/[/\s]/g, '');
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
      if (i === 2) {
        formattedInput += '/';
      }
      formattedInput += input[i];
    }
    setExpiry(formattedInput);
  };

  const handleCvvChange = (event) => {
    let input = event.target.value.replace(/\s/g, '');
    setCvv(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and submit form
    console.log('Submitted');
  };

  const isFormValid = () => {
    // Check if form inputs are valid
    return (
      cardNumber.replace(/\s/g, '').length === 16 &&
      cardName !== '' &&
      expiry.length === 5 &&
      cvv.length === 3
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19"
          pattern="\d*"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <label htmlFor="cardName">Cardholder Name:</label>
        <input
          type="text"
          id="cardName"
          value={cardName}
          onChange={handleCardNameChange}
          autoComplete="off"
          required
        />
      </div>
      <div>
        <label htmlFor="expiry">Expiry Date:</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={handleExpiryChange}
          maxLength="5"
          pattern="\d\d/\d\d"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCvvChange}
          maxLength="3"
          pattern="\d*"
          autoComplete="off"
          required
        />
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
};

export default CreditCardForm;
