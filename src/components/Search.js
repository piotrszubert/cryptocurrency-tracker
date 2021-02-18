import React from 'react';

const Search = ( {handleSearch} ) => {
    return(
        <div  onChange={handleSearch}  className="search">
            <form>
                <input type="text" placeholder="Search currency"></input>
            </form>
        </div>
    );
}

export default Search;