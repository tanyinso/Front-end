import React from 'react'
import OrangePayment from './orangePayment';
import MtnPayment from './mtnPayment';

const Payment = () => {
 
 return (
    <section className="pay-container">
      <h2 className="heading">Buy course</h2>
      <div className="pay-wrapper">
    {/* orange here */}
    <OrangePayment/>
    <MtnPayment/>

     
      </div>
    </section>
  );
};

export default Payment;