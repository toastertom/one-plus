import React from 'react';
import { render } from 'react-dom';
import './index.css';

import PaymentForm from './components/paymentForm';
import registerServiceWorker from './registerServiceWorker';


// Components
render(<PaymentForm/>, document.querySelector('#root'));

registerServiceWorker();
