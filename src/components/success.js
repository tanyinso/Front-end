import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToContent = setTimeout(() => {
      navigate("/payed");
    }, 6000);

    return () => clearTimeout(redirectToContent);
  }, [id, navigate]);

  return (
    <div className="success-popup">
      <h2>Payment Successful</h2>
      <p>Your payment has been processed successfully.</p>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default PaymentConfirmation;