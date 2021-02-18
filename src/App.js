import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Currency from './components/Currency';
import Search from './components/Search';

/*
https://api.coingecko.com/api/v3/coins/markets?
vs_currency=pln&order=market_cap_desc&per_page
=100&page=1&sparkline=false
*/

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])

   return (
    <div>
    <Search></Search>
    <Currency items={items} isLoading={isLoading}></Currency>
    </div>
  ); 
}

export default App;
