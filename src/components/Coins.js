import React from 'react';
import { NavLink } from 'react-router-dom';

const Coins = () => (
  <>
    <h1>ALL COINS</h1>
    <h3>
      <NavLink to="/coin" className="nav-link">Single Coin</NavLink>
    </h3>
  </>
);

export default Coins;
