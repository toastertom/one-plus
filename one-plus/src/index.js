import React from 'react';
import { render } from 'react-dom';
import './index.css';

import App from './components/App';
import PaymentForm from './components/PaymentForm';
import registerServiceWorker from './registerServiceWorker';


// Components

render(<App/>, document.querySelector('#root'));

registerServiceWorker();
