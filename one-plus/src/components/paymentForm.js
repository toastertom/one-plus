import React from 'react';
import { render } from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';

const ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

class PaymentForm extends React.Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_iHCzO08E2QmRJLm8g6Xa9qzV'>
        <form>
          <input type='text' data-stripe='number' placeholder='Credit Card Number'></input>
          <input type='text' data-stripe='exp-month' placeholder='Expiration Month'></input>
          <input type='text' data-stripe='exp-year' placeholder='Expiration Year'></input>
          <input type='text' data-stripe='cvc' placeholder='CVC'></input>
          <button type='submit'>Submit</button>
        </form>
      </StripeProvider>
    )
  }
}

export default PaymentForm;
