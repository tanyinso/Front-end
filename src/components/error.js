import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/mtn-payment');
    }, 2800); 
    return () => clearTimeout(timeout); 
  }, [navigate]);

  return (
    <div className="error-popup">
      <h2>Error</h2>
      <p>There was an error processing your payment. Please try again later.</p>
    </div>
  );
};

export default ErrorPayment;