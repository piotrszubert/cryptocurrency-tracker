import React from 'react'
import './Currency.css'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Currency = ({ filteredItems, isLoading }) => {

    const toggle = () => {
       // let more = document.getElementById("more");
       let more = document.getElementsByClassName("more");
        let itemBtn = document.getElementById("item-btn");
        if (more.className === "more-info") {
            more.className = "more-info-active";
            console.log(button)
        } else {
            more.className = "more-info";
        }
    }

    let button = document.getElementsByClassName(".more-info");
   
    return isLoading ? (<div className="loader">Loading...</div>) : (
        <div items={filteredItems}>
            {filteredItems.map((item) => (
                <div key={item.id} className="item-wrapper">
                    <div className="item">
                        <h2>{item.name}</h2>
                        <img src={item.image} alt="crypto symbol"></img>
                        <h3>{item.symbol}</h3>
                        <p>{item.current_price} pln</p>
                        <button id="item-btn" onClick={toggle}>&#10140;</button>
                    </div>
                    <div id="more" className="more-info-active">
                        <div className="more-data">
                            <div className="info-text">
                                <p>high_24: {item.high_24h}</p>
                                <p>low_24: {item.low_24h}</p>
                            </div>
                            <div>
                                <p>price_change_24h: {item.price_change_24h}</p>
                                <p>price_change_percentage_24h: {item.price_change_percentage_24h}</p>
                            </div>
                            <div>
                                <Sparklines className="sparkline" height={60} margin={10} data={item.sparkline_in_7d.price}>
                                    <SparklinesLine style={{fill:"none"}} color="#b777ff" />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Currency;