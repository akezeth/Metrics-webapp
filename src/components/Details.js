import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaBitcoin } from 'react-icons/fa';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  const { coins } = location.state || { coins: {} };
  const { priceUsd } = coins;
  return (
    <div className="container">
      <div className="details">
        <BiArrowBack className="back-arrow" onClick={() => backHome()} />
        <h2 className="detail-title">
          {coins.name}
          {' '}
          {coins.symbol}
        </h2>
        <div className="details-body">
          <p className="market-cap d-flex-space-be">
            Market Cap:
            <span>
              $
              {Number(coins.marketCapUsd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="price d-flex-space-be">
            <span>
              Price(Btc):
              {' '}
              <FaBitcoin />
              {' '}
            </span>
            {' '}
            {Math.abs(priceUsd).toFixed(5)}
          </p>
          <p className="t24hr d-flex-space-be">
            24h %:
            {' '}
            <span>
              {' '}
              {Number(coins.maxSupply).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="volume24 d-flex-space-be">
            Volume(24h):
            <span>
              $
              {' '}
              {Number(coins.volumeUsd24Hr).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
