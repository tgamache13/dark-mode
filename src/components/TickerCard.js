import React from 'react';
import Tickers from './Tickers';

export default function TickerCard(ticker) {
    return (
        <div className="ticker-card">
            <div className="ticker-name">
                <h1>{ticker.id}</h1>
                <h1>{ticker.symbol}</h1>
            </div>
            <div className="coin__logo">
                <img src={ticker.image} alt={ticker.id} />
            </div>
            <h3 className="current-price">Current Price: {ticker.current_price} </h3>
            <h3 className="supply">Circulating Supply: {ticker.circulating_supply}</h3>
            <h3 className="cap">Market Cap Rank: {ticker.market_cap_rank}</h3>
        </div>
    );
}