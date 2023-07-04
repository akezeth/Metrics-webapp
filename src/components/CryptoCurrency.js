import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCrypto } from '../redux/cryptocurrency/cryptoSlice';

const CryptoCurrency = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const crytoLists = useSelector((store) => store.crytoList);
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  const detailPage = (coins) => {
    navigate(`/details/${coins.name}`, { state: { coins } });
  };

  return (
    <>
      <form className="container my5" onSubmit={handleSubmit}>
        <div className="search-container">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} ref={inputRef} placeholder="Enter Currency Name" className="search" />
        </div>
        <BsSearch className="search-icon" />
      </form>
      <div className="container grid my5">
        {crytoLists.isloading && <div>loading</div>}
        {!crytoLists.isloading
          && (crytoLists.crytoList.filter((coin) => {
            const { symbol } = coin;
            return search.toLowerCase() === ''
              ? coin
              : symbol.toLowerCase().includes(search.toLowerCase());
          }).map((coin) => {
            const { changePercent24Hr } = coin;
            return (
              <button type="button" key={coin.id} className="card" onClick={() => detailPage(coin)}>
                <h3>{coin.symbol}</h3>
                <div className="stat">
                  <div className="up">
                    {changePercent24Hr < 0 ? (
                      <span>
                        <FaChevronDown color="red" />
                        {Math.abs(changePercent24Hr).toFixed(2)}
                      </span>
                    ) : (
                      <span>
                        <FaChevronUp color="green" />
                        {Math.abs(changePercent24Hr).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          }))}
      </div>
    </>
  );
};

export default CryptoCurrency;
