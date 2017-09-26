import React, { Component } from 'react';
import Header from './Header';
import PaymentForm from './PaymentForm';



const Checkout = () => {
  return(
    <div className="checkout">
      <Header/>
      <PaymentForm/>
    </div>
  )
}

export default Checkout;
