import React from 'react';
import { render } from 'react-dom';

const ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

class PaymentForm extends React.Component {
  render() {
    return (
      <form>
        <input type='text' data-stripe='number' placeholder='Credit Card Number'></input>
        <input type='text' data-stripe='exp-month' placeholder='Expiration Month'></input>
        <input type='text' data-stripe='exp-year' placeholder='Expiration Year'></input>
        <input type='text' data-stripe='cvc' placeholder='CVC'></input>
        <button>Submit</button>
      </form>
    )
  }
}

export default PaymentForm;
