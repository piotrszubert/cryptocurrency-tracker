import React from 'react'

const Currency = ( {filteredItems, isLoading} ) => {
    return isLoading ? (<h2>Loading...</h2>) : (

            <div items={filteredItems}>
                {filteredItems.map((item) => (
                    <div className="item" key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.image} alt="crypto symbol"></img>
                        <h3>{item.symbol}</h3>
                        <p>{item.current_price} pln</p>
                    </div>
                ))}
            </div>
        );
}

export default Currency;