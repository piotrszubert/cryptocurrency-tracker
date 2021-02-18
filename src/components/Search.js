import React from 'react';

const Search = ( {items} ) => {
    return(
        <div className="search">
            <form>
                <input type="text" placeholder="Search currency"></input>
            </form>
        </div>
    );
}

export default Search;