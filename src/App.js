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
  const [search, setSearch] = useState('');

/*   let vsCurrency = {
    1: 'pln',
    2: 'eur',
    3: 'usd'
  } */

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
     // const result = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency[1]}&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])

    const handleSearch = (e) => {
      e.target.value.toLowerCase();
      setSearch(e.target.value)
    }
  
   const filteredItems = items.filter(item => 
     item.name.toLowerCase().includes(search.toLowerCase())
     || item.symbol.toLowerCase().includes(search.toLowerCase())
    );
     
   return (
       <div>
       <Search items={items} handleSearch={handleSearch}></Search>
       <Currency filteredItems={filteredItems} isLoading={isLoading} /* vsCurrency={vsCurrency} */></Currency>
       </div>
  ); 
}

export default App;
