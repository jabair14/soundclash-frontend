import React, { useState } from 'react';

function Search({ searchTerm, onSearchChange }) {

    // console.log(searchTerm)

    return (
        <div className="searchbar">
      <label htmlFor="search">Search Packs:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
    )
}

export default Search;