import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoinItem = (props) => {
  const { coin } = props;

  return (
    <li className={`singleCoin ${coin.checker}`}>
      <Link to={`/coin/${coin.id}`} className="nav-link">
        <p>→</p>
      </Link>
      <div>
        <p>{coin.id}</p>
        <h3>{coin.name}</h3>
        <p>{coin.symbol}</p>
      </div>
    </li>
  );
};

CoinItem.propTypes = {
  coin: PropTypes.instanceOf(Array).isRequired,
};

export default CoinItem;
