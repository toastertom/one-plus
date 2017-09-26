import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

// Components
import Home from './components/Home';
import Checkout from './components/Checkout';
import PaymentForm from './components/PaymentForm';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" component= { Home } />
        <Route exact path="/payment" component= { Checkout } />
      </div>
    </Router>
  )
}

render(<Root/>, document.querySelector('#root'));

registerServiceWorker();
