import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinItem from './CoinItem';
import Loading from './loading';
import { fetchCoins } from '../redux/coins/coins';
import microphone from '../images/microphone.svg';
import setts from '../images/settings.svg';

const CoinsList = () => {
  const { loading, coins } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((coins.length) === 0)dispatch(fetchCoins());
  }, []);

  const [myClasses, setClasses] = useState([
    {
      name: true,
    },
    {
      name: true,
    },
    {
      name: true,
    },
    {
      name: true,
    },
    {
      name: true,
    },
    {
      name: true,
    },
    {
      name: true,
    },
    {
      name: true,
    },
  ]);

  const handleClick = (index) => {
    const newClasses = [...myClasses];
    if (newClasses[index].name) {
      newClasses[index].name = false;
    } else {
      newClasses[index].name = true;
    }
    setClasses(newClasses);
  };

  if (coins === null || coins === undefined) {
    return <Loading />;
  }

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

  const bitcoins = [...allCoins].filter((coin) => coin.name.includes('Bitcoin'));

  const chains = [...allCoins].filter((coin) => coin.name.includes('Chain'));

  const detroits = [...allCoins].filter((coin) => coin.name.includes('Detroit'));

  const dogecoins = [...allCoins].filter((coin) => coin.name.includes('Dogecoin'));

  const ethereum = [...allCoins].filter((coin) => coin.name.includes('Ethereum'));

  const indices = [...allCoins].filter((coin) => coin.name.includes('Index'));

  const tokens = [...allCoins].filter((coin) => coin.name.includes('Token'));

  const networks = [...allCoins].filter((coin) => coin.name.includes('Network'));

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="topHeader coinsHeader">
        <div className="detailsLink">
          <button type="button">
            &lt;
          </button>
        </div>
        <h2>Crypto Coins</h2>
        <img
          src={microphone}
          alt="microphone"
        />
        <img
          src={setts}
          alt="Settings"
        />
      </div>
      <div className="filter">
        <h6>Filter Coins by Name</h6>
      </div>
      <ul className="details" id="categories">
        <li key="1" className="detail">
          <div className="detailsItem">
            <p>Bitcoins</p>
            <p>
              (
              {bitcoins.length}
              )
              <span>
                <button className={`${myClasses[0].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(0); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[0].name ? 'hideDisplay' : 'bitcoins'}`}>
            {bitcoins.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="2" className="detail">
          <div className="detailsItem">
            <p>Chains</p>
            <p>
              (
              {chains.length}
              )
              <span>
                <button className={`${myClasses[1].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(1); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[1].name ? 'hideDisplay' : 'chains'}`}>
            {chains.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="3" className="detail">
          <div className="detailsItem">
            <p>Detroits</p>
            <p>
              (
              {detroits.length}
              )
              <span>
                <button className={`${myClasses[2].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(2); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[2].name ? 'hideDisplay' : 'detroits'}`}>
            {detroits.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="4" className="detail">
          <div className="detailsItem">
            <p>Dogecoins</p>
            <p>
              (
              {dogecoins.length}
              )
              <span>
                <button className={`${myClasses[3].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(3); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[3].name ? 'hideDisplay' : 'dogecoins'}`}>
            {dogecoins.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="5" className="detail">
          <div className="detailsItem">
            <p>Ethereum</p>
            <p>
              (
              {ethereum.length}
              )
              <span>
                <button className={`${myClasses[4].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(4); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[4].name ? 'hideDisplay' : 'ethereum'}`}>
            {ethereum.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="6" className="detail">
          <div className="detailsItem">
            <p>Indices</p>
            <p>
              (
              {indices.length}
              )
              <span>
                <button className={`${myClasses[5].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(5); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[5].name ? 'hideDisplay' : 'indices'}`}>
            {indices.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="7" className="detail">
          <div className="detailsItem">
            <p>Networks</p>
            <p>
              (
              {networks.length}
              )
              <span>
                <button className={`${myClasses[6].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(6); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[6].name ? 'hideDisplay' : 'networks'}`}>
            {networks.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
        <li key="8" className="detail">
          <div className="detailsItem">
            <p>Tokens</p>
            <p>
              (
              {tokens.length}
              )
              <span>
                <button className={`${myClasses[7].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(7); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`coins ${myClasses[7].name ? 'hideDisplay' : 'tokens'}`}>
            {tokens.map((coin) => (
              <CoinItem
                key={coin.id}
                coin={coin}
              />
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default CoinsList;
