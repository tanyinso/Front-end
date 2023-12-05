import React from 'react'

import { Link } from 'react-router-dom';
function OrangePayment() {

  return (
    <>

     
        <div className="payment-section">
          <Link to="/orange-payment" className="payment-link" >
            <img src="images/orange.png" alt="Orange Logo" className="payment-logo" />
            <span className="payment-text">Pay with Orange</span>
          </Link>
        
            <div className="payment-fields">
              <input type="text" name="name" placeholder="Account name" className="payment-input" />
              <input type="number" name="phone" placeholder="Phone Number" className="payment-input" />
              <input type="number" name="amount" placeholder="Amount" className="payment-input" />
            </div>
          
        </div>
    
    </>
  )
}

export default OrangePayment
