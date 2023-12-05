import React from 'react';
import { Link } from 'react-router-dom';

function MtnPayment() {
  return (
    <div className="payment-section">
      <Link to="/mtn-payment" className="payment-link">
        <img src="images/mtn.png" alt="MTN Logo" className="payment-logo" />
        <span className="payment-text">Pay with MTN</span>
      </Link>

      <div className="payment-fields">
        <input type="text" name="name" placeholder="Account name" className="payment-input" />
        <input type="number" name="phone" placeholder="Phone Number" className="payment-input" />
        <input type="number" name="amount" placeholder="Amount" className="payment-input" />
      </div>
    </div>
  );
}

export default MtnPayment;