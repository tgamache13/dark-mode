import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TickerCard from './TickerCard';

export default function Tickers() {
    const [tickers, setTickers] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then(res => {
                console.log(res);
                setTickers(res.data);
                console.log(tickers);
            })
            .catch(err => console.log(err))
    }, []);
    return(
        <div className='tickers'>
           {tickers.map( ticker => 
                <TickerCard key={ticker.id}  {...ticker}/>
            )}
        </div>
    );
}