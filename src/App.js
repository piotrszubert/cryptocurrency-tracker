import './App.css';
import React from 'react';
import axios from 'axios';

/*
https://api.coingecko.com/api/v3/coins/markets?
vs_currency=pln&order=market_cap_desc&per_page
=100&page=1&sparkline=false
*/

function App() {

  axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  ).then(res => {
    console.log(res.data);
  }).catch(err => console.log(err));

return (
  <div>

  </div>
);
}

export default App;
