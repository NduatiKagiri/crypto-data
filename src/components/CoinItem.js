import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoinItem = (props) => {
  const { coin } = props;

  return (
    <li className="rocket">
      <NavLink to="/coin" className="nav-link">
        <p>{coin.id}</p>
        <h3>{coin.name}</h3>
        <p>{coin.symbol}</p>
      </NavLink>
    </li>
  );
};

CoinItem.propTypes = {
  coin: PropTypes.instanceOf(Array).isRequired,
};

export default CoinItem;
