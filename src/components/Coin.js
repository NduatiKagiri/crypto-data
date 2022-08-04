import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchDetails } from '../redux/coins/details';
import Loading from './loading';
import crypto from './crypto.jpeg';

const Coin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id]);

  const { loading, details } = useSelector((state) => state.details);

  useEffect(() => {
    if ((details.length) === 0)dispatch(fetchDetails(id));
  }, [id]);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Link to="/" className="nav-link detailsLink">
          <button type="button">
            &lt;
          </button>
        </Link>
      </div>
      <div className="detailsHeader">
        <div className="detailsHeaderImage">
          <img
            src={crypto}
            alt={details.name}
          />
        </div>
        <div className="detailsHeaderInfo">
          <p>{details.name}</p>
          <p>{details.asset_platform_id}</p>
          <p>{details.symbol}</p>
        </div>
      </div>
      <ul className="details">
        <li key="1" className="detail">
          <div className="detailsItem">
            <p>Localizations</p>
            <p>
              (
              {Object.entries(details.localization).length}
              )
              <span>
                <button className={`${myClasses[0].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(0); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`detailsInfo ${myClasses[0].name ? 'hideDisplay' : 'localization'}`}>
            {Object.entries(details.localization).map(([key, value]) => (
              <li key={key}>
                <p>
                  {key}
                  :
                </p>
                <p>
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </li>
        <li key="2" className="detail">
          <div className="detailsItem">
            <p>Descriptions</p>
            <p>
              (
              {Object.entries(details.description).length}
              )
              <span>
                <button className={`${myClasses[1].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(1); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`detailsInfo ${myClasses[1].name ? 'hideDisplay' : 'description'}`}>
            {Object.entries(details.description).map(([key, value]) => (
              <li key={key}>
                <p>
                  {key}
                  :
                </p>
                <p>
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </li>
        <li key="3" className="detail">
          <div className="detailsItem">
            <p>Current Prices</p>
            <p>
              (
              {Object.entries(details.market_data.current_price).length}
              )
              <span>
                <button className={`${myClasses[2].name ? '' : 'handleClicked'}`} type="button" onClick={() => { handleClick(2); }}>
                  →
                </button>
              </span>
            </p>
          </div>
          <ul className={`detailsInfo ${myClasses[2].name ? 'hideDisplay' : 'prices'}`}>
            {Object.entries(details.market_data.current_price).map(([key, value]) => (
              <li key={key}>
                <p>
                  {key}
                  :
                </p>
                <p>
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Coin;

// <li key="2">
//   Descriptions
//   {details.description.length}
// </li>
// <li key="3">
//   Images
//   {details.images.length}
// </li>
// <li key="4">
//   Tickers
//   {details.tickers.length}
// </li>

// <div>
//   <Link to="coins" className="nav-link detailsLink">
//     <button type="button">
//       &lt;
//     </button>
//   </Link>
// </div>
// <div className="detailsHeader">
//   <div className="detailsHeaderImage">
//     <img
//       src={details.image.small}
//       alt={details.name}
//     />
//   </div>
//   <div className="detailsHeaderInfo">
//     <p>{details.name}</p>
//     <p>{details.asset_platform_id}</p>
//     <p>{details.symbol}</p>
//   </div>
// </div>

// <ul className="details">
//   <li key="1" className="detail">
//     <div className="detailsItem">
//       <p>Localizations</p>
//       <p>
//         (
//         {Object.entries(details.localization).length}
//         )
//         <span>
//           <button type="button" onClick={() => { handleClick(0); }}>
//             →
//           </button>
//         </span>
//       </p>
//     </div>
//     <ul className={`detailsInfo ${myClasses[0].name ? 'hideDisplay' : 'localization'}`}>
//       {Object.entries(details.localization).map(([key, value]) => (
//         <li key={key}>
//           <p>
//             {key}
//           </p>
//           <p>
//             {value}
//           </p>
//         </li>
//       ))}
//     </ul>
//   </li>
//   <li key="2" className="detail">
//     <div className="detailsItem">
//       <p>Descriptions</p>
//       <p>
//         (
//         {Object.entries(details.description).length}
//         )
//         <span>
//           <button type="button" onClick={() => { handleClick(1); }}>
//             →
//           </button>
//         </span>
//       </p>
//     </div>
//     <ul className={`detailsInfo ${myClasses[1].name ? 'hideDisplay' : 'description'}`}>
//       {Object.entries(details.description).map(([key, value]) => (
//         <li key={key}>
//           <p>
//             {key}
//           </p>
//           <p>
//             {value}
//           </p>
//         </li>
//       ))}
//     </ul>
//   </li>
// </ul>
