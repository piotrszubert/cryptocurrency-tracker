import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
https://api.coingecko.com/api/v3/coins/markets?
vs_currency=pln&order=market_cap_desc&per_page
=100&page=1&sparkline=false
*/

const App = () => {

  const [items, setItems] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
      setItems(result.data);
      // setIsLoading(false);
    }
    fetchItems();
  }, [])
  /* 
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    ).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
   */
  return (
    <div items={items}>
      {items.map((item) => (
        <div className="item" key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="crypto symbol"></img>
            <h3>{item.symbol}</h3>
            <p>{item.current_price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
