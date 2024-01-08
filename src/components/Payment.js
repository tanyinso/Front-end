import React from 'react'
import MtnPay from './mtnPayment';
import OrangePayment from './orangePayment';
import '../components/css/style.css'
const Payment = () => {
 
 return (
    <section className="pay-container">
      <h2 className="heading">Buy course</h2>
      <div className="pay-wrapper">
    {/* orange here */}
<MtnPay/>
{/* <OrangePayment/> */}

     
      </div>
    </section>
  );
};

export default Payment;