import React, { useState } from 'react';
import axios from 'axios';
import mtn from '../components/images/mtn.png';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePayment = (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (name.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }

    const url = 'http://localhost:7777/payment';
    const data = {
      amount: 'Amount',
      phoneNumber: phoneNumber,
      fees: true,
      service: 'MTN',
      currency: 'XAF',
      message: 'Message',
      country: 'CM'
    };

    axios
      .post(url, data)
      .then(response => {
        if (response.status === 200) {
          navigate('/success');
        } else {
          // handle transaction failure separately
          handleTransactionFailure();
        }
      })
      .catch(error => {
        // handle API error separately
        handleTransactionFailure();
      });
  };

  const handleTransactionFailure = () => {
    navigate('/failedTransaction');
  };

  return (
    <div>
      <form className="momo-form" action="">
        <img className="momo-logo" src={mtn} alt="MoMo Logo" />
        <div>
          <label>Name:</label>
          <input className="momo-input" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            className="momo-input"
            type="text"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input className="momo-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button className="momo-button" onClick={handlePayment}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;