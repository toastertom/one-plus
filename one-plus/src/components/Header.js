import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Affiliate Hub</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
          <li><Link to="/payment">Billing</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
