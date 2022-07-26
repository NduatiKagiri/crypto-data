import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinItem from './CoinItem';
import { fetchCoins } from '../redux/coins/coins';

const CoinsList = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((coins.length) === 0)dispatch(fetchCoins());
  }, []);
  return (
    <ul className="coins">
      {coins.map((coin) => (
        <CoinItem
          key={coin.id}
          coin={coin}
        />
      ))}
    </ul>
  );
};

export default CoinsList;
