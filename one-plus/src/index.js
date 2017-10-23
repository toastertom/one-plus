import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './styles/index.css';

// Components
import Home from './components/HomePg';
import Checkout from './components/CheckoutPg';
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
