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

  const aCoins = coins.map((coin, i) => {
    if (((i + 1) % 2) === 0) {
      return { ...coin, checker: 'evenCoin', order: i + 1 };
    }
    return { ...coin, checker: 'oddCoin', order: i + 1 };
  });

  const oddCoins = [...aCoins].filter((coin) => coin.checker === 'oddCoin');

  const oddMapped = oddCoins.map((coin, i) => {
    if (((i + 1) % 2) === 0) {
      return { ...coin, checker: 'oddCoin' };
    }
    return { ...coin, checker: 'evenCoin' };
  });

  const evenCoins = [...aCoins].filter((coin) => coin.checker === 'evenCoin');

  const evenMapped = evenCoins.map((coin, i) => {
    if (((i + 1) % 2) === 0) {
      return { ...coin, checker: 'evenCoin' };
    }
    return { ...coin, checker: 'oddCoin' };
  });

  const classedCoins = evenMapped.concat(oddMapped);

  const allCoins = [...classedCoins].sort((a, b) => a.order - b.order);

  return (
    <ul className="coins">
      {allCoins.map((coin) => (
        <CoinItem
          key={coin.id}
          coin={coin}
        />
      ))}
    </ul>
  );
};

export default CoinsList;
